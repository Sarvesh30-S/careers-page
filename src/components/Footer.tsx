import Link from "next/link";
import { Mail, Lock } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-slate-200/80 bg-white">
      <div className="mx-auto max-w-5xl px-4 py-6 sm:px-6 sm:py-8">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 sm:gap-6">
          {/* Left: Brand Logo & Direct Contact Lockup */}
          <div className="flex flex-wrap items-center gap-3 sm:gap-5">
            <Link href="/" className="inline-block transition-opacity hover:opacity-90 shrink-0">
              <img
                src="/images/tbm-logo.png"
                alt="The Bored Monkey"
                className="h-10 sm:h-11 w-auto object-contain"
              />
            </Link>
            <div className="h-4 w-px bg-slate-200 hidden sm:block" />
            <a
              href="mailto:careers@theboredmonkey.com"
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-600 hover:text-black transition-colors"
            >
              <Mail className="h-3.5 w-3.5 text-amber-500 shrink-0" />
              <span>careers@theboredmonkey.com</span>
            </a>
          </div>

          {/* Right: Public Navigation & Discrete Team Portal */}
          <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-xs text-slate-500">
            <Link
              href="/jobs"
              className="font-semibold text-slate-700 hover:text-black transition-colors"
            >
              Browse Openings
            </Link>
            <span className="text-slate-300 hidden sm:inline">•</span>
            <span className="text-slate-400">
              © {new Date().getFullYear()} The Bored Monkey
            </span>
            <Link
              href="/admin/login"
              title="Team Portal"
              className="text-slate-300 hover:text-slate-500 transition-colors ml-1"
            >
              <Lock className="h-3 w-3 inline" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
