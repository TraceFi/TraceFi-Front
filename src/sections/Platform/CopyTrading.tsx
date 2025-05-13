"use client";

import { useState } from "react";
import CopiedWalletCard from "@/components/plataform/copyTrading/CopiedWalletCard";
import CopyTradingSettings from "@/components/plataform/copyTrading/CopyTradingSettings";

interface Wallet {
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
  const [copiedWallets, setCopiedWallets] = useState<Wallet[]>([]);

  const handleAddWallet = (wallet: Wallet) => {
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

  return (
    <section className="w-full flex h-screen bg-[var(--color-platform-hero-background)]">
      <div className="flex-1 p-8 overflow-y-auto">
        <h1 className="text-white text-[40px] font-bold mb-8">Copy Trading</h1>
        <div className="flex flex-col gap-4">
          {copiedWallets.map((wallet) => (
            <CopiedWalletCard
              key={wallet.id}
              wallet={wallet}
              onPause={handlePause}
              onDelete={handleDelete}
            />
          ))}
        </div>
      </div>

      <aside className="w-[400px] bg-[var(--color-platform-tableElements-background)] border-l border-white/10 p-6">
        <CopyTradingSettings onConfirm={handleAddWallet} />
      </aside>
    </section>
  );
}
