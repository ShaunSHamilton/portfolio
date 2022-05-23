import React, { useState, useMemo, useEffect } from "react";
import { findReference, FindReferenceError } from "@solana/pay";
import { Keypair, Transaction } from "@solana/web3.js";
import { useConnection, useWallet } from "@solana/wallet-adapter-react";
import { error, info } from "logover";

const STATUS = {
  Initial: "Initial",
  Submitted: "Submitted",
  Paid: "Paid",
};

const { NODE_ENV } = process.env;

export const Coffee = () => {
  const { connection } = useConnection();
  const { publicKey, sendTransaction } = useWallet();
  const orderID = useMemo(() => Keypair.generate().publicKey, []); // Public key used to identify the order

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(STATUS.Initial); // Tracking transaction status
  const [supportAmount, setSupportAmount] = useState(0.1);

  // useMemo is a React hook that only computes the value if the dependencies change
  const order = useMemo(
    () => ({
      buyer: publicKey.toString(),
      orderID: orderID.toString(),
      amount: supportAmount,
    }),
    [publicKey, orderID, supportAmount]
  );

  // Fetch the transaction object from the server
  const processTransaction = async () => {
    setLoading(true);
    const txResponse = await fetch(
      `/${NODE_ENV === "production" ? "api" : "dev"}/create-transaction`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(order),
      }
    );
    const txData = await txResponse.json();

    const tx = Transaction.from(Buffer.from(txData.transaction, "base64"));
    info("Tx data is", tx);

    try {
      const txHash = await sendTransaction(tx, connection);
      info(
        `Transaction sent: https://solscan.io/tx/${txHash}?cluster=${
          NODE_ENV === "production" ? "mainnet" : "devnet"
        }`
      );
      setStatus(STATUS.Submitted);
    } catch (error) {
      error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    // Check if transaction was confirmed
    if (status === STATUS.Submitted) {
      setLoading(true);
      const interval = setInterval(async () => {
        try {
          const result = await findReference(connection, orderID);
          info("Finding tx reference", result);
          if (!result.err) {
            clearInterval(interval);
            setStatus(STATUS.Paid);
            setLoading(false);
            alert("Thank you for your support!");
          }
        } catch (e) {
          if (e instanceof FindReferenceError) {
            return null;
          }
          error("Unknown error", e);
        } finally {
          setLoading(false);
        }
      }, 1000);
      return () => {
        clearInterval(interval);
      };
    }
  }, [status]);

  if (!publicKey) {
    return (
      <div>
        <p>You need to connect your wallet to make transactions</p>
      </div>
    );
  }

  if (loading) {
    return <p className="tx-loader">Processing...</p>;
  }

  return (
    <form
      id="support-form"
      onSubmit={(e) => {
        e.preventDefault();
        processTransaction();
      }}
    >
      <label>
        Amount:{" "}
        <input
          type="number"
          name="support"
          id="support-amount"
          min={0.1}
          placeholder="0.10"
          defaultValue={0.1}
          step={0.01}
          onChange={(e) => setSupportAmount(parseFloat(e.target.value))}
        />{" "}
        USDC
      </label>
      <button
        disabled={loading}
        id="support-button"
        type="submit"
        // onClick={processTransaction}
      >
        Support my Work 🠚
      </button>
      <p>Powered by Solana Pay</p>
    </form>
  );
};
