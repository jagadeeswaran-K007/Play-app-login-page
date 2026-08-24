import React from 'react';

export default function Dashboard({ email, onSignOut }) {
  return (
    <div className="min-h-screen bg-[#141414] text-white flex flex-col justify-between relative">
      {/* Header with Top-Left Logo and Top-Right Sign Out Button */}
      <header className="p-4 sm:p-6 max-w-7xl mx-auto w-full z-10 flex justify-between items-center">
        <div className="flex items-center gap-2 text-[#e50914]">
          <svg
            className="w-[1em] h-[1em] text-5xl sm:text-4xl fill-current leading-none"
            viewBox="0 0 24 24"
          >
            <path d="M8 5v14l11-7z" />
          </svg>
          <h1 className="font-bold text-5xl sm:text-4xl tracking-tighter leading-none">
            Play
          </h1>
        </div>

        <button
          onClick={onSignOut}
          className="bg-[#e50914] text-white px-3 py-1.5 sm:px-4 sm:py-1.5 rounded text-xs sm:text-sm font-semibold hover:bg-red-700 transition"
        >
          Sign Out
        </button>
      </header>

      {/* Main Content Card - Cleaned Modal Box */}
      <main className="flex-1 flex items-center justify-center z-10 px-4 py-8">
        <div className="bg-[#000000]/75 p-8 sm:p-12 rounded-lg max-w-md w-full text-center border border-zinc-800 shadow-2xl">
          <h2 className="text-2xl text-red-500 sm:text-3xl font-bold mb-3">
            Welcome to Play
          </h2>
          <p className="text-gray-400 text-sm mb-2">
            You have successfully signed in.
          </p>
          <p className="text-sm">
            Signed in as <span className="font-bold text-white">{email}</span>
          </p>
        </div>
      </main>

      {/* Footer */}
      <footer className="py-6 text-center text-xs text-gray-500 z-10">
        Play-inspired React Project
      </footer>
    </div>
  );
}