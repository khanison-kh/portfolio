import { sections } from "@/data/sections";
import { cn } from "@/lib/utils";
import ThemeSwitcher from "../ui/ThemeToggle";

const Navbar = () => {
  const baseClasses =
    "font-semibold rounded-lg px-3 py-2 transition duration-200";
  const normalLinkClasses = "hover:bg-subtle";
  const contactLinkClasses =
    "bg-accent-solid text-accent-fg shadow-md hover:bg-opacity-40";

  return (
    <header className="bg-surface fixed top-0 z-50 w-full shadow-lg">
      <nav className="flex items-center justify-between px-16 py-4">
        <a href="#">Khanifolio</a>
        <div className="flex items-center gap-16">
          <ul className="flex items-center gap-6">
            {sections.map((s) => (
              <li key={s.id} className="">
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
      </nav>
    </header>
  );
};
export default Navbar;
