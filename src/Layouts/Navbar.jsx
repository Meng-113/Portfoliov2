import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

const defaultItems = [
  { href: '/#home', label: 'Home' },
  { href: '/#about', label: 'About' },
  { href: '/#skills', label: 'Skills' },
  { href: '/#projects', label: 'Projects' },
  { href: '/#design', label: 'Design' },
  { href: '/#contact', label: 'Contact' },
];

const Navbar = ({ navLinks }) => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const desktopLinkStyle = 'text-slate-700 transition hover:text-sky-600';
  const mobileLinkStyle =
    'block rounded-xl px-4 py-3 text-sm font-medium text-slate-700 transition hover:bg-sky-50 hover:text-sky-600';

  const navItems =
    Array.isArray(navLinks) && navLinks.length > 0 ? navLinks : defaultItems;

  const getNavHref = (href) => {
    if (!href) {
      return '#';
    }

    if (href.startsWith('#') && location.pathname !== '/') {
      return `/${href}`;
    }

    return href;
  };

  useEffect(() => {
    if (!isMenuOpen) {
      return undefined;
    }

    const handleEscape = (event) => {
      if (event.key === 'Escape') {
        setIsMenuOpen(false);
      }
    };

    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener('keydown', handleEscape);
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('keydown', handleEscape);
      window.removeEventListener('resize', handleResize);
    };
  }, [isMenuOpen]);

  return (
    <nav className="fixed inset-x-0 top-0 z-50 border-b border-slate-200/80 bg-white/86 backdrop-blur-md">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-10">
        <div className="flex items-center justify-end py-4 md:py-5">
          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-700 transition hover:border-sky-200 hover:text-sky-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-300 md:hidden"
            aria-controls="mobile-navigation"
            aria-expanded={isMenuOpen}
            aria-label={isMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            onClick={() => setIsMenuOpen((prev) => !prev)}
          >
            <span className="sr-only">
              {isMenuOpen ? 'Close menu' : 'Open menu'}
            </span>
            <svg
              viewBox="0 0 24 24"
              className="h-5 w-5"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              {isMenuOpen ? (
                <path d="M18 6L6 18M6 6l12 12" />
              ) : (
                <path d="M4 7h16M4 12h16M4 17h16" />
              )}
            </svg>
          </button>

          <ul className="hidden items-center justify-end gap-6 font-normal text-slate-700 md:flex md:gap-8 lg:gap-10">
            {navItems.map((item) => (
              <li key={`${item.label}-${item.href}`}>
                <a href={getNavHref(item.href)} className={desktopLinkStyle}>
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div
          id="mobile-navigation"
          className={`overflow-hidden transition-all duration-300 md:hidden ${
            isMenuOpen ? 'max-h-96 pb-4 opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <ul className="space-y-1 rounded-2xl border border-slate-200 bg-white/95 p-3 shadow-sm">
            {navItems.map((item) => (
              <li key={`mobile-${item.label}-${item.href}`}>
                <a
                  href={getNavHref(item.href)}
                  className={mobileLinkStyle}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
