"use client";

import { useState } from "react";

interface Props {
  showAdvanced: boolean;
  toggleAdvanced: () => void;
}

export default function AdvancedSettingsSection({ showAdvanced, toggleAdvanced }: Props) {
  const [blacklistInput, setBlacklistInput] = useState("");
  const [blacklist, setBlacklist] = useState<string[]>([]);

  const handleAddToken = () => {
    const trimmed = blacklistInput.trim();
    if (trimmed && !blacklist.includes(trimmed)) {
      setBlacklist([...blacklist, trimmed]);
      setBlacklistInput("");
    }
  };

  const handleRemoveToken = (token: string) => {
    setBlacklist((prev) => prev.filter((t) => t !== token));
  };

  return (
    <div>
      <div
        onClick={toggleAdvanced}
        className="cursor-pointer flex items-center justify-between text-sm mt-2 mb-3 text-white"
      >
        <span>Advanced Settings</span>
        <span className="text-xs text-white/60">{showAdvanced ? "▲" : "▼"}</span>
      </div>

      {showAdvanced && (
        <div className="flex flex-col gap-4 border-t border-white/10 pt-4">
          <div className="grid grid-cols-2 gap-2 text-sm">
            {[
              "Min MktCap (K)", "Max MktCap (K)",
              "Min Liq (K)", "Max Liq (K)",
              "Min Buy Amount", "Max Buy Amount",
              "Min Age (m)", "Max Age (m)",
              "Min Burnt (%)", "Increase Times",
            ].map((placeholder) => (
              <input
                key={placeholder}
                placeholder={placeholder}
                className="bg-transparent border border-white/10 p-2 rounded-xl"
              />
            ))}
          </div>

          <div className="flex gap-2 flex-wrap">
            {["Pump", "Raydium", "Moonshot", "Others"].map((platform) => (
              <button
                key={platform}
                className="border border-white/10 px-3 py-1 rounded-full text-sm hover:border-white transition"
              >
                {platform}
              </button>
            ))}
          </div>

          <div>
            <label className="text-sm mb-1 block text-white">Token Blacklist</label>

            <div className="flex gap-2">
              <input
                value={blacklistInput}
                onChange={(e) => setBlacklistInput(e.target.value)}
                placeholder="Ex: Token Contract Address"
                className="flex-1 bg-transparent border border-white/10 p-2 rounded-xl text-sm"
              />
              <button
                onClick={handleAddToken}
                className="text-sm text-red-400 hover:underline"
              >
                + Add
              </button>
            </div>

            {blacklist.length > 0 && (
              <div className="mt-5 flex flex-wrap gap-2">
                {blacklist.map((token) => (
                  <div
                    key={token}
                    className="text-xs bg-red-800/40 text-red-300 border border-red-500 px-3 py-1 rounded-full cursor-pointer hover:bg-red-800/60 transition"
                    onClick={() => handleRemoveToken(token)}
                  >
                    {token}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
