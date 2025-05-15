"use client";

import React, { FC, useMemo } from "react";
import {
  ConnectionProvider,
  WalletProvider,
} from "@solana/wallet-adapter-react";
import { WalletAdapterNetwork } from "@solana/wallet-adapter-base";
import { PhantomWalletAdapter } from "@solana/wallet-adapter-wallets";
import { WalletModalProvider } from "@solana/wallet-adapter-react-ui";
import { clusterApiUrl } from "@solana/web3.js";

// Descomentar se o modal da carteira estiver sem estilo
require("@solana/wallet-adapter-react-ui/styles.css");

interface WalletContextProviderProps {
  children: React.ReactNode;
}

const WalletContextProvider: FC<WalletContextProviderProps> = ({
  children,
}) => {
  // Você pode definir a rede para 'devnet', 'testnet', ou 'mainnet-beta'.
  const network = WalletAdapterNetwork.Devnet;

  // Você pode configurar o endpoint da RPC aqui.
  const endpoint = useMemo(() => clusterApiUrl(network), [network]);

  const wallets = useMemo(
    () => [
      /**
       * Wallets que implementam o Wallet Adapter Protocol, como Fluent, Solflare, Slope, Torus, etc.
       * Os adaptadores podem ser encontrados em '@solana/wallet-adapter-wallets'.
       */
      new PhantomWalletAdapter(),
      // Adicione outras carteiras que deseja suportar aqui
    ],
    [network] // network como dependência pode não ser estritamente necessário aqui, mas não prejudica.
  );

  return (
    <ConnectionProvider endpoint={endpoint}>
      <WalletProvider wallets={wallets} autoConnect>
        <WalletModalProvider>{children}</WalletModalProvider>
      </WalletProvider>
    </ConnectionProvider>
  );
};

export default WalletContextProvider; 