"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X, Search, ChevronDown, Phone } from "lucide-react";
import { mainNav } from "@/data/nav";
import { SITE } from "@/data/site";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState<string | null>(null);

  return (
    <header className="sticky top-0 z-50 border-b border-navy-100 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/80">
      <div className="hidden items-center justify-end gap-6 bg-navy-950 px-5 py-1.5 text-xs text-white/70 lg:flex">
        <span className="flex items-center gap-1.5">
          <Phone className="h-3 w-3" /> {SITE.phones[0].number}
        </span>
        <span>{SITE.email}</span>
        <Link href="/corporate-training" className="hover:text-gold-300">
          Corporate Training
        </Link>
      </div>

      <div className="container-page flex h-16 lg:h-20 items-center justify-between gap-4">
        <Link href="/" className="flex items-center gap-2 shrink-0">
          <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-navy-900 text-sm font-bold text-gold-300">
            CO
          </span>
          <span className="text-lg font-bold text-navy-900">
            Cert<span className="text-gold-600">Ocean</span>
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-1" onMouseLeave={() => setOpenMenu(null)}>
          {mainNav.map((item) => (
            <div key={item.label} className="relative" onMouseEnter={() => setOpenMenu(item.children ? item.label : null)}>
              <Link
                href={item.href}
                className="focus-ring flex items-center gap-1 rounded-full px-4 py-2 text-sm font-medium text-navy-700 hover:bg-navy-50 hover:text-navy-900"
              >
                {item.label}
                {item.children && <ChevronDown className="h-3.5 w-3.5" />}
              </Link>

              {item.children && openMenu === item.label && (
                <div className="absolute left-0 top-full w-[480px] pt-3">
                  <div className="grid grid-cols-2 gap-1 rounded-2xl border border-navy-100 bg-white p-4 soft-shadow">
                    {item.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className="focus-ring rounded-xl px-3 py-2.5 hover:bg-navy-50"
                      >
                        <span className="block text-sm font-semibold text-navy-900">{child.label}</span>
                        {child.description && (
                          <span className="mt-0.5 block text-xs text-navy-500 line-clamp-1">{child.description}</span>
                        )}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-3">
          <Link href="/search" aria-label="Search" className="focus-ring rounded-full p-2 text-navy-600 hover:bg-navy-50">
            <Search className="h-5 w-5" />
          </Link>
          <Button href="/courses" variant="ghost" size="md">
            Explore Courses
          </Button>
          <Button href="/advisor" variant="primary" size="md">
            Talk to Advisor
          </Button>
        </div>

        <button
          className="focus-ring rounded-lg p-2 text-navy-900 lg:hidden"
          aria-label="Toggle menu"
          onClick={() => setMobileOpen((v) => !v)}
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      <div className={cn("lg:hidden border-t border-navy-100 bg-white", mobileOpen ? "block" : "hidden")}>
        <div className="container-page py-4 space-y-1">
          {mainNav.map((item) => (
            <details key={item.label} className="group">
              <summary className="focus-ring flex cursor-pointer list-none items-center justify-between rounded-lg px-3 py-3 text-sm font-semibold text-navy-900">
                <Link href={item.href} onClick={() => setMobileOpen(false)}>
                  {item.label}
                </Link>
                {item.children && <ChevronDown className="h-4 w-4 group-open:rotate-180 transition-transform" />}
              </summary>
              {item.children && (
                <div className="pl-3 pb-2 space-y-1">
                  {item.children.map((child) => (
                    <Link
                      key={child.href}
                      href={child.href}
                      onClick={() => setMobileOpen(false)}
                      className="focus-ring block rounded-lg px-3 py-2 text-sm text-navy-600 hover:bg-navy-50"
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              )}
            </details>
          ))}
          <div className="flex gap-3 px-3 pt-3">
            <Button href="/courses" variant="secondary" size="md" className="flex-1" onClick={() => setMobileOpen(false)}>
              Explore Courses
            </Button>
          </div>
          <div className="flex gap-3 px-3 pt-2">
            <Button href="/advisor" variant="primary" size="md" className="flex-1" onClick={() => setMobileOpen(false)}>
              Talk to Advisor
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
