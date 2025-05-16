"use client";

import React, { FC, useMemo, useCallback } from "react";
import {
  ConnectionProvider,
  WalletProvider,
} from "@solana/wallet-adapter-react";
import { WalletAdapterNetwork, WalletError } from "@solana/wallet-adapter-base";
import { PhantomWalletAdapter } from "@solana/wallet-adapter-wallets";
import { WalletModalProvider } from "@solana/wallet-adapter-react-ui";

// Descomentar se o modal da carteira estiver sem estilo
require("@solana/wallet-adapter-react-ui/styles.css");

interface WalletContextProviderProps {
  children: React.ReactNode;
}

const WalletContextProvider: FC<WalletContextProviderProps> = ({
  children,
}) => {
  const network = WalletAdapterNetwork.Mainnet;

  const endpoint = useMemo(() => "https://rpc.helius.xyz/?api-key=", []);

  const wallets = useMemo(
    () => [
      new PhantomWalletAdapter(),
    ],
    []
  );

  const onError = useCallback((error: WalletError) => {
    console.error("Wallet Adapter Error:", error);
  }, []);

  return (
    <ConnectionProvider endpoint={endpoint}>
      <WalletProvider wallets={wallets} autoConnect={true} onError={onError}>
        <WalletModalProvider>{children}</WalletModalProvider>
      </WalletProvider>
    </ConnectionProvider>
  );
};

export default WalletContextProvider;
