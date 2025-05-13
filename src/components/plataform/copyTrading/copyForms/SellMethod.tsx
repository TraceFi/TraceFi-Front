"use client";

import { useState } from "react";

export default function SellMethodSection() {
  const [selectedOption, setSelectedOption] = useState<"copy" | "not" | "custom">("copy");
  const [takeProfit, setTakeProfit] = useState("");
  const [stopLoss, setStopLoss] = useState("");
  const [trailingStop, setTrailingStop] = useState(false);

  return (
    <div className="flex flex-col gap-3">
      <label className="text-sm text-white">Sell Method</label>

      <div className="flex gap-2">
        <button
          className={`flex-1 py-1 rounded-xl border text-sm transition ${
            selectedOption === "copy"
              ? "border-green-500 text-green-400"
              : "border-white/10 text-white/70"
          }`}
          onClick={() => setSelectedOption("copy")}
        >
          Copy Sells
        </button>
        <button
          className={`flex-1 py-1 rounded-xl border text-sm transition ${
            selectedOption === "not"
              ? "border-green-500 text-green-400"
              : "border-white/10 text-white/70"
          }`}
          onClick={() => setSelectedOption("not")}
        >
          Not Sells
        </button>
      </div>

      <button
        onClick={() => setSelectedOption("custom")}
        className={`w-full text-sm py-1 rounded-xl border transition ${
          selectedOption === "custom"
            ? "border-green-500 text-green-400"
            : "border-white/10 text-white hover:border-white"
        }`}
      >
        Customize TP & SL
      </button>

      {selectedOption === "custom" && (
        <div className="flex flex-col gap-4 border-t border-white/10 pt-4 text-sm text-white">
          <div>
            <label className="block mb-1 text-sm">TP</label>
            <div className="relative">
              <input
                type="number"
                placeholder="Please enter the Take Profit ratio"
                className="w-full bg-transparent border border-white/10 p-2 pr-10 rounded-xl text-sm outline-none
                appearance-none [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                value={takeProfit}
                onChange={(e) => setTakeProfit(e.target.value)}
              />
              <span className="absolute right-3 top-2 text-white/50 text-sm">%</span>
            </div>
            <p className="mt-1 text-white/60">Estimated Profit:</p>
          </div>
          <div>
            <label className="block mb-1 text-sm">SL</label>
            <div className="relative">
              <input
                type="number"
                placeholder="Please enter the Stop Loss ratio"
                className="w-full bg-transparent border border-white/10 p-2 pr-10 rounded-xl text-sm outline-none
                appearance-none [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                value={stopLoss}
                onChange={(e) => setStopLoss(e.target.value)}
              />
              <span className="absolute right-3 top-2 text-white/50 text-sm">%</span>
            </div>
            <p className="mt-1 text-white/60">Estimated Loss: </p>
          </div>
        </div>
      )}
    </div>
  );
}
