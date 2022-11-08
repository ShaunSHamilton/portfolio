import { useWallet } from "@solana/wallet-adapter-react";
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";
import React from "react";
import { Coffee } from "./coffee";

export const Solana = () => {
  const { publicKey } = useWallet();

  return publicKey ? <Coffee /> : <WalletMultiButton />;
};
