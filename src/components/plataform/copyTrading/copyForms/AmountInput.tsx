import { Info } from "lucide-react";

interface Props {
  amount: string;
  setAmount: (val: string) => void;
  buyMode: "max" | "fixed" | "ratio";
  setBuyMode: (val: "max" | "fixed" | "ratio") => void;
}

export default function AmountInputSection({
  amount,
  setAmount,
  buyMode,
  setBuyMode,
}: Props) {
  const buttons = [
    { label: "Max Buy Amount", value: "max" },
    { label: "Fixed Buy", value: "fixed" },
    { label: "Fixed Ratio", value: "ratio" },
  ];

  return (
    <div>
      <label className="text-sm mb-2 block text-white">Amount (SOL)</label>

      <div className="flex gap-2 mb-2 flex-wrap">
        {buttons.map((btn) => (
          <div key={btn.value} className="relative group">
            <button
              onClick={() => setBuyMode(btn.value as Props["buyMode"])}
              className={`px-3 py-1 rounded-xl border text-sm transition ${
                buyMode === btn.value
                  ? "border-green-500 text-green-400"
                  : "border-white/10 text-white/70"
              }`}
            >
              {btn.label}
            </button>

            <div
              className={`absolute z-10 bottom-full mb-1 w-60 
                text-white text-xs px-4 py-2 leading-relaxed 
                bg-[var(--color-platform-hero-background)] 
                border border-white/10 rounded-xl 
                opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-200
                ${["ratio", "fixed"].includes(btn.value) ? "right-0" : "left-0"}`}
            >
              {btn.value === "max" && (
                <p>
                  If the target’s buy amount exceeds the max, copy at the max. <br />
                  E.g. Max = 1 SOL. Target buys 0.5 ➜ copy 0.5. Target buys 2 ➜ copy 1.
                </p>
              )}
              {btn.value === "fixed" && (
                <p>
                  Always copy the same amount, no matter how much the target buys.
                </p>
              )}
              {btn.value === "ratio" && (
                <p>
                  Buy using a fixed ratio. E.g. Ratio = 200%, target buys 0.3 ➜ copy 0.6
                  (max capped).
                </p>
              )}
            </div>
          </div>
        ))}
      </div>

      <input
        type="number"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        className="w-full bg-transparent border border-white/10 text-white p-2 rounded-xl outline-none
        appearance-none [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
        placeholder="Ex: 1"
      />

      <div className="text-sm text-white/60 mt-1 flex justify-between">
        <span>≈$169.74 (1 SOL)</span>
        <span>Bal: 8.25 SOL</span>
      </div>
    </div>
  );
}
