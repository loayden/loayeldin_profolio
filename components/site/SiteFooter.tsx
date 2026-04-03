import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import Link from 'next/link';
import {
  footerNavigation,
  siteConfig,
  socialLinks,
  stats,
} from '@/lib/portfolio-data';

export function SiteFooter() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 pb-10 pt-16">
      <div className="shell">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="space-y-6">
            <span className="eyebrow">Built to get noticed for the right reasons</span>
            <div className="space-y-4">
              <h2 className="max-w-3xl text-3xl leading-tight sm:text-4xl lg:text-5xl">
                A portfolio should feel like a hiring signal, not a template.
              </h2>
              <p className="max-w-2xl text-base leading-8 text-stone-300/78 sm:text-lg">
                {siteConfig.shortName} builds premium interfaces, intelligent
                systems, and educational experiences with a stronger standard of
                polish and clarity.
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-3">
              {stats.slice(0, 3).map((item) => (
                <div
                  key={item.label}
                  className="rounded-[1.5rem] border border-white/10 bg-white/[0.03] p-5"
                >
                  <div className="number text-3xl text-[#f2c27a]">{item.value}</div>
                  <div className="mt-2 text-sm uppercase tracking-[0.18em] text-stone-300/75">
                    {item.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="grid gap-10 sm:grid-cols-2">
            <div>
              <p className="caption">Navigation</p>
              <div className="mt-5 space-y-3">
                {footerNavigation.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="block text-sm uppercase tracking-[0.16em] text-stone-300/80 transition hover:text-white"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>

            <div>
              <p className="caption">Direct contact</p>
              <div className="mt-5 space-y-3 text-sm text-stone-300/80">
                <a href={`mailto:${siteConfig.email}`} className="block transition hover:text-white">
                  {siteConfig.email}
                </a>
                <a
                  href={`tel:${siteConfig.phone.replace(/\s+/g, '')}`}
                  className="block transition hover:text-white"
                >
                  {siteConfig.phone}
                </a>
                <p>{siteConfig.location}</p>
              </div>

              <div className="mt-6 flex flex-wrap gap-3">
                {socialLinks.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-full border border-white/10 bg-white/[0.035] px-4 py-2 text-xs uppercase tracking-[0.18em] text-stone-300/78 transition hover:border-white/20 hover:text-white"
                  >
                    {item.label}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="divider my-10" />

        <div className="flex flex-col gap-3 text-sm text-stone-500 lg:flex-row lg:items-center lg:justify-between">
          <p>© {currentYear} {siteConfig.fullName}. All rights reserved.</p>
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-6">
            <p>Designed to attract stronger roles, better projects, and clearer opportunities.</p>
            <a
              href={siteConfig.instagramHref}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 transition hover:text-white"
            >
              <FontAwesomeIcon icon={faInstagram} className="text-sm text-[#c084fc]" />
              <span>Powered by </span>
              <span className="font-semibold tracking-[0.14em] text-[#a855f7]">FR</span>
              <span className="font-semibold text-[#f2c27a]">ع</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
