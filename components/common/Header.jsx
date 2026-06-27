'use client';

import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';


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
    <div className="absolute top-full left-0 mt-0 bg-[#1a1a1a] border border-zinc-800 min-w-[200px] z-50 py-2">
      {items.map((item, index) => (
        <div key={item.name}>
          {index > 0 && <div className="border-t border-zinc-700 mx-3" />}
          <Link
            href={item.href}
            className="block px-5 py-2.5 text-sm text-zinc-300 hover:text-white hover:bg-zinc-800 transition-colors font-light tracking-wide"
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
      if (ref.current && !ref.current.contains(e.target )) {
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
        className="text-xs font-medium tracking-[0.12em] text-zinc-300 hover:text-white transition-colors whitespace-nowrap"
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
          open ? 'text-[#C5162E]' : 'text-zinc-300 hover:text-white'
        }`}
      >
        {link.name}
        {/* Dropdown arrow */}
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

  return (
    <nav className="bg-[#111111] text-white border-b border-zinc-800 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-[72px]">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group shrink-0">
            <div className="bg-[#C5162E] w-10 h-10 flex items-center justify-center font-serif text-xl font-bold transition-transform group-hover:scale-105">
              P
            </div>
            <div className="flex flex-col leading-none">
              <span className="font-bold tracking-[0.2em] text-sm text-white">PIFT</span>
              <span className="text-[9px] text-zinc-400 tracking-[0.25em] font-medium uppercase mt-0.5">
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

          {/* Apply Now Button */}
          <div className="hidden lg:flex items-center shrink-0">
            <Link
              href="/apply"
              className="bg-[#C5162E] hover:bg-[#a31225] text-white font-bold tracking-[0.15em] text-xs px-7 py-3 transition-colors uppercase"
            >
              Apply Now
            </Link>
          </div>

          {/* Mobile Hamburger */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="p-2 text-zinc-400 hover:text-white"
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
        <div className="lg:hidden bg-[#1a1a1a] border-t border-zinc-800">
          <div className="px-4 pt-4 pb-6 space-y-1">
            {navLinks.map((link) => (
              <div key={link.name}>
                {link.dropdown ? (
                  <>
                    <button
                      onClick={() =>
                        setMobileExpanded(mobileExpanded === link.name ? null : link.name)
                      }
                      className="flex items-center justify-between w-full py-3 text-sm font-medium tracking-widest text-zinc-300 hover:text-white"
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
                            className="block py-2 text-sm text-zinc-400 hover:text-white tracking-wide"
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
                    className="block py-3 text-sm font-medium tracking-widest text-zinc-300 hover:text-white"
                  >
                    {link.name}
                  </Link>
                )}
                <div className="border-t border-zinc-800" />
              </div>
            ))}
            <div className="pt-4">
              <Link
                href="/apply"
                onClick={() => setMobileOpen(false)}
                className="block text-center bg-[#C5162E] hover:bg-[#a31225] text-white font-bold tracking-widest text-sm py-3 transition-colors uppercase"
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