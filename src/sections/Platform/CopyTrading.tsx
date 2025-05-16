"use client";

import { useState, useMemo } from "react";
import CopiedWalletCard from "@/components/platform/copyTrading/CopiedWalletCard";
import CopyTradingSettings from "@/components/platform/copyTrading/CopyTradingSettings";
import { Wallet, LogOut } from "lucide-react";
import { useWalletModal } from "@solana/wallet-adapter-react-ui";
import { useWallet } from "@solana/wallet-adapter-react";

interface WalletInterface {
  id: string;
  name: string;
  address: string;
  status: "Active" | "Paused";
  openedPools: number;
  closedPools: number;
  realized: string;
  lastActive: string;
}

export default function CopyTrading() {
  const { setVisible: setModalVisible } = useWalletModal();
  const { connected, publicKey, disconnect, wallet } = useWallet();
  const [copiedWallets, setCopiedWallets] = useState<WalletInterface[]>([]);

  const handleAddWallet = (wallet: WalletInterface) => {
    setCopiedWallets((prev) => [...prev, wallet]);
  };

  const handlePause = (id: string) => {
    setCopiedWallets((prev) =>
      prev.map((w) =>
        w.id === id
          ? { ...w, status: w.status === "Active" ? "Paused" : "Active" }
          : w
      )
    );
  };

  const handleDelete = (id: string) => {
    setCopiedWallets((prev) => prev.filter((w) => w.id !== id));
  };

  const handleConnectWalletClick = () => {
    setModalVisible(true);
  };

  const handleDisconnectWalletClick = async () => {
    try {
      await disconnect();
    } catch (error) {
      console.error("Error disconnecting wallet:", error);
    }
  };

  const formattedPublicKey = useMemo(() => {
    if (!publicKey) return null;
    const base58 = publicKey.toBase58();
    return `${base58.slice(0, 4)}...${base58.slice(-4)}`;
  }, [publicKey]);

  return (
    <div className="flex flex-1 overflow-hidden h-full">
      <div className="flex-1 flex flex-col bg-[var(--color-platform-hero-background)] overflow-y-auto">
        <div className="px-8 pt-8 pb-4 flex justify-between items-center">
          <h1 className="text-white text-[28px] md:text-[32px] font-bold">Copy Trading</h1>
          {!connected ? (
            <button
              onClick={handleConnectWalletClick}
              className="bg-teal-500 hover:bg-teal-600 text-white font-medium py-2.5 px-5 rounded-xl flex items-center gap-2 transition-colors duration-150 text-sm"
            >
              <Wallet size={18} />
              Connect Wallet
            </button>
          ) : (
            <div className="flex items-center gap-3">
              <span className="text-white/70 text-sm font-medium bg-[var(--color-platform-tableElements-background)] px-3 py-2.5 rounded-xl">
                {formattedPublicKey}
              </span>
              <button
                onClick={handleDisconnectWalletClick}
                title="Disconnect Wallet"
                className="bg-red-600 hover:bg-red-700 text-white font-medium p-2.5 rounded-xl flex items-center justify-center transition-colors duration-150"
              >
                <LogOut size={18} />
              </button>
            </div>
          )}
        </div>
        <div className="flex-1 p-8 pt-4 flex flex-col gap-4">
          {copiedWallets.map((wallet) => (
            <CopiedWalletCard
              key={wallet.id}
              wallet={wallet}
              onPause={handlePause}
              onDelete={handleDelete}
            />
          ))}
          {copiedWallets.length === 0 && (
            <div className="flex flex-col items-center justify-center h-full text-white/50">
                <Wallet size={48} className="mb-4" />
                <p className="text-lg font-medium">No Wallets Copied Yet</p>
                <p className="text-sm">Add wallets from the panel on the right to start copy trading.</p>
            </div>
          )}
        </div>
      </div>

      <aside className="w-[400px] bg-[var(--color-platform-tableElements-background)] border-l border-white/10 p-6 flex flex-col overflow-y-auto">
        <CopyTradingSettings onConfirm={handleAddWallet} />
      </aside>
    </div>
  );
}
