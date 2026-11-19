import { ReactNode } from "react";

type Variant = "default" | "brand" | "green" | "amber" | "slate";

const variants: Record<Variant, string> = {
  default: "bg-slate-100 text-slate-700",
  brand: "bg-[#FFFBEB] text-amber-900 ring-1 ring-inset ring-[#FDE68A] font-semibold",
  green: "bg-emerald-50 text-emerald-700 ring-1 ring-inset ring-emerald-200",
  amber: "bg-amber-50 text-amber-800 ring-1 ring-inset ring-amber-300 font-medium",
  slate: "bg-slate-50 text-slate-600 ring-1 ring-inset ring-slate-200",
};

export function Badge({
  children,
  variant = "default",
}: {
  children: ReactNode;
  variant?: Variant;
}) {
  return (
    <span
      className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${variants[variant]}`}
    >
      {children}
    </span>
  );
}
