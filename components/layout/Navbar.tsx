import { sections } from "@/data/sections";
import { cn } from "@/lib/utils";
import { Sun } from "lucide-react";

const Navbar = () => {
  const baseLinkClasses =
    "font-semibold rounded-lg p-3 transition duration-200";
  const normalLinkClasses = " hover:bg-gray-200";
  const contactLinkClasses =
    "bg-blue-600 p-3 text-white shadow-md hover:opacity-90";

  return (
    <header className="fixed top-0 z-50 w-full bg-white shadow-lg">
      <nav className="flex items-center justify-between px-16 py-4">
        <a href="#">Khanifolio</a>
        <div className="flex items-center gap-16">
          <ul className="flex items-center gap-6">
            {sections.map((s) => (
              <li key={s.id} className="">
                <a
                  href={`#${s.id}`}
                  className={cn(
                    baseLinkClasses,
                    s.id === "contact" ? contactLinkClasses : normalLinkClasses,
                  )}
                >
                  {s.label}
                </a>
              </li>
            ))}
          </ul>
          <button className="cursor-pointer rounded-full border border-gray-300 bg-gray-200 p-2 hover:bg-gray-300">
            <Sun />
          </button>
        </div>
      </nav>
    </header>
  );
};
export default Navbar;
