import React from 'react';

export function Footer() {
  return (
    <footer className="w-full border-t border-[#1f242e] bg-[#0d0f13] mt-auto py-5 text-center font-sans">
      <div className="max-w-2xl mx-auto px-4 flex flex-col items-center gap-1">
        <p className="footer-copyright text-xs text-[#8D97A8] font-medium tracking-wide">
          &copy; 2026 FTR.dev | Built with clean code.
        </p>
        <p className="footer-tagline text-[11px] text-[#606a7b]">
          AIRoast Pro Utility &bull; AI Hardware Intelligence &amp; Rekomendasi Laptop
        </p>
      </div>
    </footer>
  );
}
