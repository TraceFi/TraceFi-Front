"use client";

import { useState } from "react";
import WalletInput from "@/components/plataform/copyTrading/copyForms/WalletInput";
import AmountInputSection from "@/components/plataform/copyTrading/copyForms/AmountInput";
import SellMethodSection from "@/components/plataform/copyTrading/copyForms/SellMethod";
import AdvancedSettingsSection from "@/components/plataform/copyTrading/copyForms/AdvancedSettings";

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

export default function CopyTradingSettings({
  onConfirm,
}: {
  onConfirm: (wallet: Wallet) => void;
}) {
  const [walletName, setWalletName] = useState("");
  const [walletAddress, setWalletAddress] = useState("");
  const [amount, setAmount] = useState("");
  const [buyMode, setBuyMode] = useState<"max" | "fixed" | "ratio">("max");
  const [showAdvanced, setShowAdvanced] = useState(false);

  const handleConfirm = () => {
    const newWallet: Wallet = {
      id: crypto.randomUUID(),
      name: walletName || "Wallet Copiada",
      address: walletAddress || "G2bA...uyX",
      status: "Active",
      openedPools: 0,
      closedPools: 0,
      realized: "+0.0%",
      lastActive: "agora mesmo",
    };
    onConfirm(newWallet);
    setWalletName("");
    setWalletAddress("");
    setAmount("");
  };

  return (
    <div className="flex flex-col h-full ">
      <div className="flex-1 overflow-y-auto pr-1 flex flex-col gap-6 text-white max-w-full overflow-x-hidden">
        <WalletInput
          name={walletName}
          setName={setWalletName}
          address={walletAddress}
          setAddress={setWalletAddress}
        />

        <AmountInputSection
          amount={amount}
          setAmount={setAmount}
          buyMode={buyMode}
          setBuyMode={setBuyMode}
        />

        <SellMethodSection />

        <AdvancedSettingsSection
          showAdvanced={showAdvanced}
          toggleAdvanced={() => setShowAdvanced(!showAdvanced)}
        />
      </div>

      <div className="pt-4 border-t mt-4 border-white/10">
      <button
        onClick={handleConfirm}
        className={"w-full py-2 rounded-xl font-medium bg-teal-500"}
      >
        Confirm
      </button>
      </div>
    </div>
  );
}
