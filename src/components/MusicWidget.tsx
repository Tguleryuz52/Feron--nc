"use client";

const OFF_WHITE = "#F5F5F7";

export default function MusicWidget() {
  return (
    <div
      className="flex items-center gap-4 backdrop-blur-md rounded-2xl px-4 py-3.5 w-[340px] border border-white/10"
      style={{ backgroundColor: "rgba(255,255,255,0.08)" }}
    >
      {/* Album Art — Square with rounded corners */}
      <div className="w-[60px] h-[60px] rounded-[10px] shrink-0 overflow-hidden bg-[#3B3560]">
        <div className="w-full h-full flex flex-col items-center justify-center relative">
          <span className="text-[4px] font-bold text-white/40 uppercase tracking-[0.15em] absolute top-[5px]">
            KAYTRANADA
          </span>
          <div className="w-[34px] h-[34px] rounded-full bg-black/40 border border-white/10 flex items-center justify-center mt-1">
            <div className="w-[28px] h-[28px] rounded-full border border-white/5 flex items-center justify-center">
              <div className="w-[8px] h-[8px] rounded-full bg-white/15 border border-white/10" />
            </div>
          </div>
          <span className="text-[3.5px] font-bold text-white/30 uppercase tracking-[0.1em] absolute bottom-[5px]">
            99.9%
          </span>
        </div>
      </div>

      {/* Track Info */}
      <div className="flex flex-col flex-1 min-w-0 gap-1">
        {/* Title row */}
        <div className="flex items-start justify-between gap-3">
          <div className="flex flex-col min-w-0">
            <span
              className="text-[14px] font-bold truncate leading-tight"
              style={{ color: OFF_WHITE }}
            >
              CHANCES
            </span>
            <span className="text-zinc-500 text-[11px] truncate mt-1">
              KAYTRANADA, Shay Lia
            </span>
          </div>
          {/* Spotify icon */}
          <svg
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-[18px] h-[18px] text-[#1DB954] shrink-0 mt-0.5"
          >
            <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.26.36.18.48.659.24 1.08zm1.44-3.3c-.301.42-.84.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.6.18-1.2.72-1.38 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z" />
          </svg>
        </div>

        {/* Controls row */}
        <div className="flex items-center gap-3 mt-1">
          <span
            className="bg-white/10 text-[8px] uppercase font-bold px-2 py-[3px] rounded leading-none tracking-widest"
            style={{ color: "rgba(245,245,247,0.65)" }}
          >
            Preview
          </span>
          <div className="flex items-center gap-4 ml-auto">
            {/* Plus button */}
            <button className="text-zinc-500 hover:text-white transition-colors duration-300">
              <svg
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.8"
                stroke="currentColor"
                className="w-[17px] h-[17px]"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 4.5v15m7.5-7.5h-15"
                />
              </svg>
            </button>
            {/* More dots */}
            <button className="text-zinc-500 hover:text-white transition-colors duration-300 flex items-center gap-[3px]">
              <span className="w-[3px] h-[3px] bg-current rounded-full" />
              <span className="w-[3px] h-[3px] bg-current rounded-full" />
              <span className="w-[3px] h-[3px] bg-current rounded-full" />
            </button>
            {/* Play button */}
            <button
              className="text-black w-[30px] h-[30px] rounded-full flex items-center justify-center hover:scale-105 transition-transform shrink-0"
              style={{ backgroundColor: OFF_WHITE }}
            >
              <svg
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-[12px] h-[12px] ml-[1.5px]"
              >
                <path d="M8 5v14l11-7z" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
