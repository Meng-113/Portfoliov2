import React from 'react';
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
  const navbarStyle =
    'text-slate-700 transition hover:text-sky-600';

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

  return (
    <nav className="fixed top-0 z-50 flex w-full items-center border-b border-slate-200/80 bg-white/86 px-6 py-5 backdrop-blur-md">
      <ul className="mx-auto flex w-[80%] flex-wrap items-center justify-end gap-5 font-normal text-slate-700 sm:gap-10">
        {navItems.map((item) => (
          <li key={`${item.label}-${item.href}`}>
            <a href={getNavHref(item.href)} className={navbarStyle}>
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
