"use client";

import { sections } from "@/data/sections";
import { useEscapeKey } from "@/hooks/useEscapeKey";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import ThemeSwitcher from "../ui/ThemeToggle";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement | null>(null);
  const menuButtonRef = useRef<HTMLButtonElement | null>(null);

  const baseClasses =
    "font-semibold rounded-lg px-2 py-2 transition duration-200 text-nowrap";
  const normalLinkClasses = "hover:bg-subtle";
  const contactLinkClasses =
    "bg-accent-solid text-accent-fg shadow-md hover:bg-accent-solid/80";

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  useEscapeKey(() => {
    if (isOpen) setIsOpen(false);
  });

  useEffect(() => {
    if (!isOpen) return;

    const handlePointerDown = (event: MouseEvent) => {
      const target = event.target as Node;
      if (menuRef.current?.contains(target)) return;
      if (menuButtonRef.current?.contains(target)) return;
      setIsOpen(false);
    };

    document.addEventListener("mousedown", handlePointerDown);
    return () => document.removeEventListener("mousedown", handlePointerDown);
  }, [isOpen]);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const mediaQuery = window.matchMedia("(min-width: 1024px)");
    const handleChange = (event: MediaQueryListEvent) => {
      if (event.matches) setIsOpen(false);
    };

    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  return (
    <header className="bg-surface fixed top-0 z-50 w-full shadow-lg">
      <nav className="flex items-center justify-between px-8 py-4">
        {/* Logo */}
        <a
          href="#hero"
          className="text-accent-solid text-2xl font-bold transition-transform duration-300 hover:scale-110"
        >
          Khanifolio
        </a>

        {/* Desktop Navigation */}
        <div className="hidden items-center lg:flex lg:gap-8">
          <ul className="flex items-center gap-6">
            {sections.map((s) => (
              <li key={s.id}>
                <a
                  href={`#${s.id}`}
                  className={cn(
                    baseClasses,
                    s.id === "contact" ? contactLinkClasses : normalLinkClasses,
                  )}
                >
                  {s.label}
                </a>
              </li>
            ))}
          </ul>
          <ThemeSwitcher />
        </div>

        {/* Mobile Menu Button + Theme Switcher */}
        <div className="flex items-center gap-4 lg:hidden">
          <ThemeSwitcher />
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="hover:bg-subtle cursor-pointer rounded-lg p-2 transition"
            aria-label="Toggle menu"
            ref={menuButtonRef}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <>
          <div
            className="fixed inset-x-0 top-18 bottom-0 z-40 bg-black/20 lg:hidden"
            onClick={() => setIsOpen(false)}
            aria-hidden="true"
          />
          <div
            ref={menuRef}
            className="border-border bg-surface absolute right-0 z-50 w-64 border-t px-4 py-4 shadow-2xl lg:hidden"
          >
            <ul className="flex flex-col gap-2">
              {sections.map((s) => (
                <li key={s.id}>
                  <a
                    href={`#${s.id}`}
                    onClick={handleLinkClick}
                    className={cn(
                      baseClasses,
                      "block w-full text-center",
                      s.id === "contact"
                        ? contactLinkClasses
                        : normalLinkClasses,
                    )}
                  >
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </>
      )}
    </header>
  );
};

export default Navbar;
