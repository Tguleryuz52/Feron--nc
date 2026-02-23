"use client";

import { Play, Plus, MoreHorizontal } from "lucide-react";

export default function MusicWidget() {
  return (
    <div className="flex items-center gap-3 bg-black/50 backdrop-blur-sm rounded-lg p-2.5 pr-3 max-w-[260px]">
      {/* Album Art */}
      <div className="w-11 h-11 rounded bg-linear-to-br from-amber-800 to-amber-950 shrink-0 overflow-hidden flex items-center justify-center">
        <div className="w-5 h-5 rounded-full bg-black/40 border border-white/20" />
      </div>

      {/* Track Info */}
      <div className="flex flex-col gap-0.5 flex-1 min-w-0">
        <div className="flex items-center justify-between">
          <div className="min-w-0">
            <p className="text-white text-[11px] font-medium tracking-wide truncate leading-tight">
              CHANCES
            </p>
            <p className="text-white/50 text-[10px] font-light truncate leading-tight">
              KAYTRANADA, Shay Lia
            </p>
          </div>
          {/* Spotify icon */}
          <div className="shrink-0 ml-2">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="#1DB954">
              <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"/>
            </svg>
          </div>
        </div>

        {/* Controls */}
        <div className="flex items-center gap-2.5 mt-0.5">
          <span className="text-white/30 text-[9px] font-normal uppercase tracking-wider px-1 py-px border border-white/15 rounded text-center leading-none">
            Preview
          </span>
          <Plus size={12} className="text-white/40 cursor-pointer hover:text-white transition-colors" />
          <MoreHorizontal size={12} className="text-white/40 cursor-pointer hover:text-white transition-colors" />
          <Play size={14} className="text-white ml-auto cursor-pointer hover:opacity-80 transition-opacity" fill="white" />
        </div>
      </div>
    </div>
  );
}
