"use client";

import { useState } from "react";
import CopiedWalletCard from "@/components/platform/copyTrading/CopiedWalletCard";
import CopyTradingSettings from "@/components/platform/copyTrading/CopyTradingSettings";
import { Wallet } from "lucide-react";
import { useWalletModal } from "@solana/wallet-adapter-react-ui";

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
  const { setVisible } = useWalletModal();
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
    setVisible(true);
  };

  return (
    <div className="flex flex-1 overflow-hidden h-full">
      <div className="flex-1 flex flex-col bg-[var(--color-platform-hero-background)] overflow-y-auto">
        <div className="px-8 pt-8 pb-4 flex justify-between items-center">
          <h1 className="text-white text-[28px] md:text-[32px] font-bold">Copy Trading</h1>
          <button
            onClick={handleConnectWalletClick}
            className="bg-teal-500 hover:bg-teal-600 text-white font-medium py-2.5 px-5 rounded-xl flex items-center gap-2 transition-colors duration-150 text-sm"
          >
            <Wallet size={18} />
            Connect Wallet
          </button>
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
