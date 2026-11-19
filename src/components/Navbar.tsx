import Link from "next/link";
import { SavedCount } from "@/components/SavedCount";

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/60 bg-white/95 backdrop-blur-md transition-all">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center group">
          <img
            src="/images/tbm-logo.png"
            alt="The Bored Monkey"
            className="h-[52px] sm:h-[60px] w-auto object-contain transition-transform group-hover:scale-102"
          />
        </Link>

        <nav className="flex items-center gap-1.5 sm:gap-3 text-sm font-semibold">
          <Link
            href="/jobs"
            className="px-3 py-1.5 rounded-lg text-slate-700 hover:text-[#171717] hover:bg-white transition-all"
          >
            Browse Openings
          </Link>
          <Link
            href="/employer"
            className="hidden sm:inline-flex px-3 py-1.5 rounded-lg text-slate-700 hover:text-[#171717] hover:bg-white transition-all"
          >
            Review Submissions
          </Link>
          <SavedCount />
        </nav>
      </div>
    </header>
  );
}
