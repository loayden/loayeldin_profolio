'use client';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faArrowUpRightFromSquare,
  faBars,
  faXmark,
} from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { navigation, siteConfig } from '@/lib/portfolio-data';

export function SiteHeader() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 24);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <motion.header
      className="fixed inset-x-0 top-0 z-50"
      initial={{ opacity: 0, y: -16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="shell py-4">
        <div
          className={`rounded-full border px-4 py-3 transition duration-300 sm:px-5 ${
            isScrolled
              ? 'border-white/10 bg-black/45 backdrop-blur-2xl'
              : 'border-transparent bg-transparent'
          }`}
        >
          <div className="flex items-center justify-between gap-6">
            <Link href="/" className="group min-w-0">
              <div className="flex items-center gap-4">
                <div className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-lg text-[#f2c27a]">
                  L
                </div>
                <div className="hidden sm:block">
                  <div className="font-medium text-stone-100">{siteConfig.shortName}</div>
                  <div className="text-xs uppercase tracking-[0.2em] text-stone-500">
                    Premium portfolio
                  </div>
                </div>
              </div>
            </Link>

            <nav className="hidden items-center gap-6 xl:flex">
              {navigation.map((item) => {
                const isActive = pathname === item.href;

                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`text-sm uppercase tracking-[0.16em] transition ${
                      isActive ? 'text-[#f2c27a]' : 'text-stone-300/80 hover:text-white'
                    }`}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </nav>

            <div className="hidden items-center gap-3 xl:flex">
              <Link href="/contact?topic=Full-time%20role" className="button-primary">
                Hire me
                <FontAwesomeIcon icon={faArrowUpRightFromSquare} className="text-base" />
              </Link>
            </div>

            <button
              type="button"
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-stone-100 xl:hidden"
              onClick={() => setIsOpen((current) => !current)}
              aria-label={isOpen ? 'Close menu' : 'Open menu'}
            >
              <FontAwesomeIcon icon={isOpen ? faXmark : faBars} className="text-xl" />
            </button>
          </div>
        </div>

        <AnimatePresence>
          {isOpen ? (
            <motion.div
              className="surface mt-3 overflow-hidden xl:hidden"
              initial={{ opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.22 }}
            >
              <div className="space-y-1 p-3">
                {navigation.map((item) => {
                  const isActive = pathname === item.href;

                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      className={`block rounded-2xl px-4 py-3 text-sm uppercase tracking-[0.16em] transition ${
                        isActive
                          ? 'bg-white/[0.06] text-[#f2c27a]'
                          : 'text-stone-300/80 hover:bg-white/[0.04] hover:text-white'
                      }`}
                    >
                      {item.label}
                    </Link>
                  );
                })}
                <Link
                  href="/contact?topic=Full-time%20role"
                  className="button-primary mt-3 w-full"
                >
                  Hire me
                  <FontAwesomeIcon icon={faArrowUpRightFromSquare} className="text-base" />
                </Link>
              </div>
            </motion.div>
          ) : null}
        </AnimatePresence>
      </div>
    </motion.header>
  );
}
