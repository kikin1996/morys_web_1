"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const NAV_ITEMS = [
  { href: "/vyber-bytu", label: "Výběr bytu" },
  { href: "/standardy", label: "Standardy" },
  { href: "/galerie", label: "Galerie" },
  { href: "/aktuality", label: "Aktuality" },
  { href: "/kontakt", label: "Kontakt" }
];

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const isHome = pathname === "/";
  const headerBase = "absolute inset-x-0 z-30";
  const headerTop = "top-2.5";
  const headerBg = isHome ? "bg-transparent" : "bg-[#f4f0e6]/95";

  return (
    <header className={`${headerBase} ${headerTop} ${headerBg}`}>
      <div
        className={`mx-auto flex max-w-6xl items-center gap-10 px-4 py-4 sm:px-6 lg:px-8 ${
          isHome ? "text-white" : "text-neutral-900"
        }`}
      >
        <Link href="/" className="flex items-center gap-2">
          <span className="text-xl font-semibold tracking-[0.18em] uppercase">
            NA BLATNICI
          </span>
        </Link>

        <nav className="hidden flex-1 items-center gap-6 text-sm font-medium md:flex">
          {NAV_ITEMS.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={
                  isHome
                    ? active
                      ? "pb-1 text-white"
                      : "text-white/80 transition-colors hover:text-white"
                    : active
                    ? "pb-1 text-neutral-900"
                    : "text-neutral-900/70 transition-colors hover:text-neutral-900"
                }
              >
                {item.label}
              </Link>
            );
          })}
          <Link
            href="/vyber-bytu"
            className="ml-auto inline-flex items-center gap-3 rounded-full bg-white px-5 py-2 text-sm font-semibold text-neutral-900 shadow-md hover:bg-neutral-100"
          >
            <span>Volné byty</span>
            <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#12351c] text-white text-xs">
              ➜
            </span>
          </Link>
        </nav>

        <button
          className="inline-flex items-center justify-center rounded-full border border-white/40 p-2 text-white md:hidden"
          aria-label="Otevřít menu"
          onClick={() => setOpen((v) => !v)}
        >
          <span className="sr-only">Menu</span>
          <div className="flex flex-col gap-1.5">
            <span className="h-[2px] w-5 bg-neutral-900" />
            <span className="h-[2px] w-5 bg-neutral-900" />
          </div>
        </button>
      </div>
      {open && (
        <div className="bg-neutral-900/95 text-white md:hidden">
          <nav className="mx-auto flex max-w-6xl flex-col gap-1 px-4 py-3 text-sm font-medium sm:px-6">
            {NAV_ITEMS.map((item) => {
              const active = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={
                    active
                      ? "rounded-md bg-white/10 px-3 py-2"
                      : "rounded-md px-3 py-2 hover:bg-white/10"
                  }
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </Link>
              );
            })}
            <Link
              href="/vyber-bytu"
              className="mt-2 rounded-full bg-white px-4 py-2 text-center text-sm font-semibold text-neutral-900"
              onClick={() => setOpen(false)}
            >
              Volné byty
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}


