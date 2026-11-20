"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { Suspense, useState } from "react";
import Link from "next/link";
import { Lock } from "lucide-react";

function LoginForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [busy, setBusy] = useState(false);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setBusy(true);
    setError(null);
    const res = await fetch("/api/admin/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ password }),
    });
    if (res.ok) {
      router.replace(searchParams.get("next") || "/employer");
      router.refresh();
    } else {
      const body = await res.json().catch(() => ({}));
      setError(body.error ?? "Incorrect password. Please try again.");
      setBusy(false);
    }
  }

  return (
    <div className="mx-auto flex max-w-sm flex-col justify-center px-4 py-20 min-h-[70vh]">
      <div className="card p-8 bg-white border border-slate-200/80 rounded-2xl shadow-sm text-center">
        <div className="flex justify-center mb-5">
          <Link href="/">
            <img
              src="/images/tbm-logo.png"
              alt="The Bored Monkey"
              className="h-10 w-auto object-contain"
            />
          </Link>
        </div>

        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-[#FFF9E8] text-[#171717] border border-[#FFD43B]/60 mb-3 mx-auto">
          <Lock className="h-3 w-3 text-amber-600" />
          <span>Internal Team Portal</span>
        </div>

        <h1 className="text-xl font-black text-slate-900 tracking-tight">Team Authentication</h1>
        <p className="mt-1 text-xs text-slate-500">
          Enter your team passphrase to manage job postings and candidate applications.
        </p>

        <form onSubmit={onSubmit} className="mt-6 space-y-4 text-left">
          <div>
            <label htmlFor="password" className="label text-xs font-bold text-slate-700">Team Password</label>
            <input
              id="password"
              type="password"
              autoFocus
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="input text-sm"
              placeholder="••••••••••••"
            />
          </div>
          {error && (
            <p className="rounded-lg bg-rose-50 px-3 py-2 text-xs font-semibold text-rose-700 ring-1 ring-inset ring-rose-200">
              {error}
            </p>
          )}
          <button type="submit" disabled={busy} className="btn-primary w-full py-2.5 font-bold">
            {busy ? "Verifying…" : "Sign In to Dashboard"}
          </button>
        </form>
      </div>
    </div>
  );
}

export default function AdminLoginPage() {
  return (
    <Suspense>
      <LoginForm />
    </Suspense>
  );
}
