import Link from "next/link";
import { Link2, Globe2, Hash, Mail, Phone, MapPin } from "lucide-react";
import { footerColumns } from "@/data/nav";
import { SITE } from "@/data/site";

export default function Footer() {
  return (
    <footer className="bg-navy-950 text-white/80">
      <div className="container-page py-14 grid grid-cols-1 gap-10 lg:grid-cols-6">
        <div className="lg:col-span-2">
          <Link href="/" className="flex items-center gap-2">
            <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-gold-500 text-sm font-bold text-navy-950">
              CO
            </span>
            <span className="text-lg font-bold text-white">
              Cert<span className="text-gold-400">Ocean</span>
            </span>
          </Link>
          <p className="mt-4 text-sm leading-relaxed text-white/60">{SITE.description}</p>
          <div className="mt-5 space-y-2 text-sm text-white/70">
            <p className="flex items-center gap-2">
              <Phone className="h-4 w-4 text-gold-400" /> {SITE.phones[0].number}
            </p>
            <p className="flex items-center gap-2">
              <Mail className="h-4 w-4 text-gold-400" /> {SITE.email}
            </p>
            <p className="flex items-start gap-2">
              <MapPin className="h-4 w-4 text-gold-400 mt-0.5" /> {SITE.address}
            </p>
          </div>
          <div className="mt-5 flex items-center gap-3">
            <a href={SITE.social.linkedin} aria-label="LinkedIn" className="focus-ring rounded-full bg-white/10 p-2 hover:bg-gold-500 hover:text-navy-950">
              <Link2 className="h-4 w-4" />
            </a>
            <a href={SITE.social.facebook} aria-label="Facebook" className="focus-ring rounded-full bg-white/10 p-2 hover:bg-gold-500 hover:text-navy-950">
              <Globe2 className="h-4 w-4" />
            </a>
            <a href={SITE.social.x} aria-label="X" className="focus-ring rounded-full bg-white/10 p-2 hover:bg-gold-500 hover:text-navy-950">
              <Hash className="h-4 w-4" />
            </a>
          </div>
        </div>

        {footerColumns.map((col) => (
          <div key={col.title}>
            <h3 className="text-sm font-semibold uppercase tracking-wide text-white">{col.title}</h3>
            <ul className="mt-4 space-y-2.5">
              {col.links.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="focus-ring text-sm text-white/60 hover:text-gold-300 line-clamp-1">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="border-t border-white/10">
        <div className="container-page flex flex-col gap-3 py-6 text-xs text-white/50 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} {SITE.legalName}. All rights reserved.</p>
          <p>Rated {SITE.trust.ratingValue}/5 from {SITE.trust.ratingCount}+ learner reviews.</p>
        </div>
      </div>
    </footer>
  );
}
