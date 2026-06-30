'use client';

import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { useTheme } from 'next-themes'; // 👈 Import the global state manager hook

const navLinks = [
  {
    name: 'ABOUT',
    href: '/about',
    dropdown: [
      { name: 'About PIFT', href: '/about/pift' },
      { name: 'Advisory Board', href: '/about/advisory-board' },
    ],
  },
  {
    name: 'COURSES',
    href: '/courses',
    dropdown: [
      { name: 'Fashion Design', href: '/courses/fashion-design' },
      { name: 'Interior Design', href: '/courses/interior-design' },
      { name: 'Textile Design', href: '/courses/textile-design' },
      { name: 'Knitwear Design', href: '/courses/knitwear-design' },
      { name: 'Fashion Entrepreneurship', href: '/courses/fashion-entrepreneurship' },
      { name: 'Apparel Merchandising', href: '/courses/apparel-merchandising' },
      { name: 'Short term courses', href: '/courses/short-term-courses' },
    ],
  },
  {
    name: 'ADMISSION',
    href: '/admission',
    dropdown: [
      { name: 'Admission', href: '/admission/apply' },
      { name: 'Results', href: '/admission/results' },
      { name: 'Fees / Payments', href: '/admission/fees' },
    ],
  },
  { name: 'EVENTS', href: '/events' },
  { name: 'MEDIA', href: '/media' },
  { name: 'TESTIMONIALS', href: '/testimonials' },
];

function DropdownMenu({ items }) {
  return (
    <div className="absolute top-full left-0 mt-0 bg-dropdown border border-brandBorder min-w-[200px] z-50 py-2 shadow-xl">
      {items.map((item, index) => (
        <div key={item.name}>
          {index > 0 && <div className="border-t border-brandBorder/50 mx-3" />}
          <Link
            href={item.href}
            className="block px-5 py-2.5 text-sm text-textMuted hover:text-textMain hover:bg-brandBorder/40 transition-colors font-light tracking-wide"
          >
            {item.name}
          </Link>
        </div>
      ))}
    </div>
  );
}

function NavItem({ link }) {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    function handleClickOutside(e) {
      if (ref.current && !ref.current.contains(e.target)) {
        setOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  if (!link.dropdown) {
    return (
      <Link
        href={link.href}
        className="text-xs font-medium tracking-[0.12em] text-textMuted hover:text-textMain transition-colors whitespace-nowrap"
      >
        {link.name}
      </Link>
    );
  }

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setOpen(!open)}
        className={`flex items-center gap-1.5 text-xs font-medium tracking-[0.12em] transition-colors whitespace-nowrap ${
          open ? 'text-accent' : 'text-textMuted hover:text-textMain'
        }`}
      >
        {link.name}
        <svg
          className={`w-3 h-3 transition-transform ${open ? 'rotate-180' : ''}`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path
            fillRule="evenodd"
            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
            clipRule="evenodd"
          />
        </svg>
      </button>
      {open && <DropdownMenu items={link.dropdown} />}
    </div>
  );
}

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileExpanded, setMobileExpanded] = useState(null);
  
  // 👈 Connect cleanly to next-themes context variables
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Prevent hydration layout shift matching errors
  useEffect(() => {
    setMounted(true);
  }, []);
  const toggleTheme = () => {
    setTheme(resolvedTheme === 'dark' ? 'light' : 'dark');
  };

  // Do not render visual toggle elements safely until mounted on client window runtime
  const isDark = mounted && resolvedTheme === 'dark';

  return (
    <nav className="bg-nav text-textMain border-b border-brandBorder sticky top-0 z-50 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-[72px]">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group shrink-0">
            <div className="bg-accent text-white w-10 h-10 flex items-center justify-center font-serif text-xl font-bold transition-all group-hover:scale-105">
              P
            </div>
            <div className="flex flex-col leading-none">
              <span className="font-bold tracking-[0.2em] text-sm text-textMain">PIFT</span>
              <span className="text-[9px] text-textMuted tracking-[0.25em] font-medium uppercase mt-0.5">
                Pinnacle Institute
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-7 xl:gap-9">
            {navLinks.map((link) => (
              <NavItem key={link.name} link={link} />
            ))}
          </div>

          {/* Call to Actions (Apply Button + Theme Toggle) */}
          <div className="hidden lg:flex items-center gap-4 shrink-0">
            {/* Theme Toggle Button */}
            <button
              onClick={toggleTheme}
              aria-label="Toggle Theme"
              className="p-2.5 text-textMuted hover:text-textMain border border-brandBorder hover:bg-brandBorder/40 transition-colors"
            >
              {isDark ? (
                // Sun Icon for switching to light
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707m12.728 0l-.707-.707M6.343 6.343l-.707-.707M14 12a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              ) : (
                // Moon Icon for switching to dark
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                </svg>
              )}
            </button>

            <Link
              href="/apply"
              className="bg-accent hover:bg-accentHover text-white font-bold tracking-[0.15em] text-xs px-7 py-3 transition-colors uppercase"
            >
              Apply Now
            </Link>
          </div>

          {/* Mobile Interactive Elements */}
          <div className="lg:hidden flex items-center gap-2">
            {/* Mobile Theme Toggle */}
            <button
              onClick={toggleTheme}
              aria-label="Toggle Theme"
              className="p-2 text-textMuted hover:text-textMain transition-colors"
            >
              {isDark ? (
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707m12.728 0l-.707-.707M6.343 6.343l-.707-.707M14 12a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
              ) : (
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" /></svg>
              )}
            </button>

            {/* Mobile Hamburger */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="p-2 text-textMuted hover:text-textMain"
              aria-label="Toggle menu"
            >
              {mobileOpen ? (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-dropdown border-t border-brandBorder">
          <div className="px-4 pt-4 pb-6 space-y-1">
            {navLinks.map((link) => (
              <div key={link.name}>
                {link.dropdown ? (
                  <>
                    <button
                      onClick={() =>
                        setMobileExpanded(mobileExpanded === link.name ? null : link.name)
                      }
                      className="flex items-center justify-between w-full py-3 text-sm font-medium tracking-widest text-textMuted hover:text-textMain"
                    >
                      {link.name}
                      <svg
                        className={`w-4 h-4 transition-transform ${mobileExpanded === link.name ? 'rotate-180' : ''}`}
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </button>
                    {mobileExpanded === link.name && (
                      <div className="pl-4 pb-2 space-y-1">
                        {link.dropdown.map((item) => (
                          <Link
                            key={item.name}
                            href={item.href}
                            onClick={() => setMobileOpen(false)}
                            className="block py-2 text-sm text-textMuted/80 hover:text-textMain tracking-wide"
                          >
                            {item.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <Link
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="block py-3 text-sm font-medium tracking-widest text-textMuted hover:text-textMain"
                  >
                    {link.name}
                  </Link>
                )}
                <div className="border-t border-brandBorder" />
              </div>
            ))}
            <div className="pt-4">
              <Link
                href="/apply"
                onClick={() => setMobileOpen(false)}
                className="block text-center bg-accent hover:bg-accentHover text-white font-bold tracking-widest text-sm py-3 transition-colors uppercase"
              >
                Apply Now
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}