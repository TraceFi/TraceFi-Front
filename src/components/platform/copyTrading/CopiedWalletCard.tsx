"use client";

import { Pause, Play, Trash, Edit } from "lucide-react";

interface Props {
  wallet: {
    id: string;
    name: string;
    address: string;
    status: "Active" | "Paused";
    openedPools: number;
    closedPools: number;
    realized: string;
    lastActive: string;
  };
  onPause: (id: string) => void;
  onDelete: (id: string) => void;
  onEdit?: (id: string) => void;
}

export default function CopiedWalletCard({ wallet, onPause, onDelete, onEdit }: Props) {
  const isPaused = wallet.status === "Paused";

  return (
    <div className="bg-[var(--color-platform-tableElements-background)] px-6 py-4 rounded-xl flex items-center justify-between text-white">
      <div className="flex flex-col gap-1 max-w-[30%] truncate">
        <p className="font-semibold text-base truncate">{wallet.name}</p>
        <p className="text-xs text-white/60 truncate">{wallet.address}</p>
        <p className={`text-sm ${isPaused ? "text-yellow-400" : "text-green-400"}`}>
          ● {isPaused ? "Paused" : "Running"}
        </p>
      </div>

      <div className="flex items-center gap-10 text-sm max-w-[60%] text-white">
        <div className="px-3 py-1 rounded-lg flex items-center gap-2 text-white text-base">
          <span className="text-green-400">●</span> Openned:{" "}
          <span className="font-semibold text-white">{wallet.openedPools}</span>
        </div>

        <div className="px-3 py-1 rounded-lg flex items-center gap-2 text-white text-base">
          <span className="text-red-400">●</span> Closed:{" "}
          <span className="font-semibold text-white">{wallet.closedPools}</span>
        </div>

        <div className="px-3 py-1 rounded-lg flex items-center gap-2 text-white text-base">
          Realized:{" "}
          <span
            className={`font-semibold ${
              wallet.realized.startsWith("-") ? "text-red-400" : "text-green-400"
            }`}
          >
            {wallet.realized}
          </span>
        </div>
      </div>

      <div className="flex items-center gap-6 text-white/70">
        {isPaused ? (
          <Play
            className="cursor-pointer transition-colors duration-200 hover:text-green-400"
            onClick={() => onPause(wallet.id)}
          />
        ) : (
          <Pause
            className="cursor-pointer transition-colors duration-200 hover:text-yellow-400"
            onClick={() => onPause(wallet.id)}
          />
        )}

        <Edit
          className="cursor-pointer transition-colors duration-200 hover:text-blue-400"
          onClick={() => onEdit?.(wallet.id)}
        />

        <Trash
          className="cursor-pointer transition-colors duration-200 hover:text-red-500"
          onClick={() => onDelete(wallet.id)}
        />
      </div>
    </div>
  );
}
