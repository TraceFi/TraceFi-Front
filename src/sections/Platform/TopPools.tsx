"use client";

import { useState } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import PoolsTable from "@/components/platform/topPools/table/PoolsTable";
import LiquidityStepOne from "@/components/platform/topPools/modal/StepOneModal";
import LiquidityStepTwo from "@/components/platform/topPools/modal/StepTwoModal";
import LiquidityStepThree from "@/components/platform/topPools/modal/StepThreeModal";
import TableSearch from "@/components/platform/topPools/table/TableSearch";
import Toast from "@/components/ui/Toast";
import { Wallet } from "lucide-react";
import { useWalletModal } from "@solana/wallet-adapter-react-ui";

interface Pool {
  poolName: string;
  poolSymbol: string;
  volume: string;
  tvl: string;
  apy: string;
  fees: string;
  platform: string;
  iconUrl?: string;
}

export default function TopPools() {
  const { setVisible } = useWalletModal();
  const [selectedFilter, setSelectedFilter] = useState("Personalized");
  const [selectedPool, setSelectedPool] = useState<Pool | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [step, setStep] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");

  const [liquidityType, setLiquidityType] = useState("double");
  const [solAmount, setSolAmount] = useState("");
  const [tokenAmount, setTokenAmount] = useState("");

  const [strategy, setStrategy] = useState("Spot");
  const [priceRange, setPriceRange] = useState("");
  const [minPrice, setMinPrice] = useState("");
  const [slippage, setSlippage] = useState("1.0%");

  const [toastMessage, setToastMessage] = useState("");

  const filters = ["Personalized", "Meteora", "Orca"];

  const handleCreatePosition = () => {
    setIsModalOpen(false);
    setToastMessage("Pool criada com sucesso!");
  };

  const handleSelectPool = (pool: Pool) => {
    setSelectedPool(pool);
    setStep(1);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setSelectedPool(null);
    setIsModalOpen(false);
    setStep(1);
    setLiquidityType("double");
    setSolAmount("");
    setTokenAmount("");
    setStrategy("Spot");
    setPriceRange("");
    setMinPrice("");
    setSlippage("1.0%");
  };

  const handleConnectWalletClick = () => {
    setVisible(true);
  };

  return (
    <div className="flex-1 flex flex-col overflow-hidden h-full">
      <div className="bg-transparent px-6 md:px-12 py-4 flex justify-between items-center">
        <h1 className="text-white text-[28px] md:text-[32px] font-bold">Top Pools</h1>
        <button
          onClick={handleConnectWalletClick}
          className="bg-teal-500 hover:bg-teal-600 text-white font-medium py-2.5 px-5 rounded-xl flex items-center gap-2 transition-colors duration-150 text-sm"
        >
          <Wallet size={18} />
          Connect Wallet
        </button>
      </div>
      <section className="flex-1 overflow-y-auto bg-[var(--color-platform-hero-background)] py-8 px-6 md:px-12">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-12">
          <div className="flex gap-4">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setSelectedFilter(filter)}
                className={`px-5 py-2 rounded-full text-white text-[16px] font-semibold transition ${
                  selectedFilter === filter
                    ? "bg-[var(--color-platform-tableElements-background)] border border-white/20"
                    : "bg-[var(--color-platform-tableElements-background)] opacity-60 hover:opacity-100"
                }`}
              >
                {filter}
              </button>
            ))}
          </div>

          <TableSearch value={searchTerm} onChange={setSearchTerm} />
        </div>

        <PoolsTable onSelectPool={handleSelectPool} search={searchTerm} />

        <Dialog open={isModalOpen} onOpenChange={handleCloseModal}>
          <DialogContent className="bg-[var(--color-platform-tableElements-background)] text-white p-6 rounded-xl w-full max-w-[480px]">
            {selectedPool && step === 1 && (
              <LiquidityStepOne
                pool={selectedPool}
                liquidityType={liquidityType}
                setLiquidityType={setLiquidityType}
                solAmount={solAmount}
                setSolAmount={setSolAmount}
                tokenAmount={tokenAmount}
                setTokenAmount={setTokenAmount}
                onNext={() => setStep(2)}
              />
            )}

            {selectedPool && step === 2 && (
              <LiquidityStepTwo
                poolName={selectedPool.poolName}
                strategy={strategy}
                setStrategy={setStrategy}
                priceRange={priceRange}
                setPriceRange={setPriceRange}
                minPrice={minPrice}
                setMinPrice={setMinPrice}
                slippage={slippage}
                setSlippage={setSlippage}
                onBack={() => setStep(1)}
                onNext={() => setStep(3)}
              />
            )}

            {selectedPool && step === 3 && (
              <LiquidityStepThree
                poolName={selectedPool.poolName}
                tokenAmount={tokenAmount}
                solAmount={solAmount}
                strategy={strategy}
                onBack={() => setStep(2)}
                onConfirm={handleCreatePosition}
              />
            )}
          </DialogContent>
        </Dialog>

        {toastMessage && (
          <Toast message={toastMessage} onClose={() => setToastMessage("")} />
        )}
      </section>
    </div>
  );
}