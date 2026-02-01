"use client";

import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

export default function ThemeToggle() {
  // 1. Use 'mounted' state to prevent Hydration Mismatch errors
  const [mounted, setMounted] = useState(false);
  const [isDark, setIsDark] = useState(false);

  // 2. Sync React state with the DOM only once after the client loads
  useEffect(() => {
    // We trust the blocking script in layout.tsx has already set the class
    const isDarkMode = document.documentElement.classList.contains("dark");
    setIsDark(isDarkMode);
    setMounted(true);
  }, []);

  // 3. Render a placeholder skeleton on the server to avoid layout shift
  if (!mounted) {
    return (
      <div
        className="border-border bg-surface size-10 animate-pulse rounded-full border p-2"
        aria-hidden="true"
      />
    );
  }

  const toggleTheme = () => {
    // 4. Update State and DOM immediately (Event-Driven vs Effect-Driven)
    const nextIsDark = !isDark;
    setIsDark(nextIsDark);

    const root = document.documentElement;
    if (nextIsDark) {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  };

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label="Toggle Theme"
      className="border-border bg-surface hover:bg-subtle size-10 cursor-pointer rounded-full border p-2 transition-colors"
    >
      {isDark ? <Sun /> : <Moon />}
    </button>
  );
}
