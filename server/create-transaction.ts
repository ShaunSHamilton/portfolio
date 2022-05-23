import { config } from "dotenv";
import { WalletAdapterNetwork } from "@solana/wallet-adapter-base";
import {
  clusterApiUrl,
  Connection,
  PublicKey,
  Transaction,
  // SystemProgram,
} from "@solana/web3.js";
import {
  createTransferCheckedInstruction,
  getAssociatedTokenAddress,
  getMint,
} from "@solana/spl-token";
import BigNumber from "bignumber.js";
import { Request, Response } from "express";
import { debug, error } from "logover";
config({ path: "../.env" });

const usdcAddress = new PublicKey(
  "Gh9ZwEmdLJ8DscKNTkTqPbNwLNNBjuSzaG9Vp2KGtKJr"
);

// Make sure you replace this with your wallet address!
const sellerAddress = process.env.OWNER_PUBLIC_KEY;

if (!sellerAddress) {
  throw new Error("Please set the OWNER_PUBLIC_KEY environment variable");
}

const sellerPublicKey = new PublicKey(sellerAddress);

const { NET } = process.env;

export const createTransaction = async (req: Request, res: Response) => {
  try {
    // Extract the transaction data from the request body
    debug(req.body);
    const { buyer, orderID, amount } = req.body;

    // If we don't have something we need, stop!
    if (!buyer) {
      return res.status(400).json({
        message: "Missing buyer address",
      });
    }

    if (!orderID) {
      return res.status(400).json({
        message: "Missing order ID",
      });
    }

    if (!amount || amount < 0.1) {
      return res.status(404).json({
        message: "Invalid amount",
      });
    }

    // Convert our price to the correct format
    const bigAmount = new BigNumber(amount);
    const buyerPublicKey = new PublicKey(buyer);
    const network =
      NET === "mainnet"
        ? WalletAdapterNetwork.Mainnet
        : WalletAdapterNetwork.Devnet;
    const endpoint = clusterApiUrl(network);
    const connection = new Connection(endpoint);

    const buyerUsdcAddress = await getAssociatedTokenAddress(
      usdcAddress,
      buyerPublicKey
    );
    const shopUsdcAddress = await getAssociatedTokenAddress(
      usdcAddress,
      sellerPublicKey
    );

    // This is new, we're getting the mint address of the token we want to transfer
    const usdcMint = await getMint(connection, usdcAddress);

    // A blockhash is sort of like an ID for a block. It lets you identify each block.
    const { blockhash, lastValidBlockHeight } =
      await connection.getLatestBlockhash("finalized");

    // The first two things we need - a recent block ID
    // and the public key of the fee payer
    const tx = new Transaction({
      blockhash,
      feePayer: buyerPublicKey,
      lastValidBlockHeight,
    });
    // tx.add(
    //   SystemProgram.transfer({
    //     fromPubkey: buyerPublicKey,
    //     toPubkey: shopUsdcAddress,
    //     lamports: bigAmount,
    //   })
    // );

    // Here we're creating a different type of transfer instruction
    const transferInstruction = createTransferCheckedInstruction(
      buyerUsdcAddress,
      usdcAddress, // This is the address of the token we want to transfer
      shopUsdcAddress,
      buyerPublicKey,
      bigAmount.toNumber() * 10 ** usdcMint.decimals,
      usdcMint.decimals // The token could have any number of decimals
    );
    debug(bigAmount.toNumber(), bigAmount.toNumber() ** usdcMint.decimals);

    // The rest remains the same :)
    transferInstruction.keys.push({
      pubkey: new PublicKey(orderID),
      isSigner: false,
      isWritable: false,
    });

    tx.add(transferInstruction);

    const serializedTransaction = tx.serialize({
      requireAllSignatures: false,
    });

    const base64 = serializedTransaction.toString("base64");

    res.status(200).json({
      transaction: base64,
    });
  } catch (err) {
    error(err);
    res.status(500).json({ error: "error creating transaction" });
    return;
  }
};
