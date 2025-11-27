import { Sun } from 'lucide-react';
import Link from 'next/link';

const Navbar = () => {
  return (
    <header>
      <nav className="flex justify-between items-center p-4 px-16 shadow-lg">
        <Link href="/">Khanifolio</Link>
        <div className="flex items-center gap-16">
          <ul className="flex items-center gap-6 [&>li>a]:font-semibold [&>li>a.normal-link]:inline-block [&>li>a.normal-link]:hover:bg-gray-200 [&>li>a.normal-link]:p-3 [&>li>a.normal-link]:rounded-lg [&>li>a.normal-link]:transition [&>li>a.normal-link]:duration-200">
            <li>
              <Link className="normal-link" href="#about">
                À propos
              </Link>
            </li>
            <li>
              <Link className="normal-link" href="#projects">
                Projets
              </Link>
            </li>
            <li>
              <Link className="normal-link" href="#skills">
                Compétences
              </Link>
            </li>
            <li>
              <Link className="normal-link" href="#education">
                Formation
              </Link>
            </li>
            <li>
              <Link
                href="#contact"
                className="p-3 border text-white bg-black rounded-lg hover:opacity-80 transition duration-200"
              >
                Contact
              </Link>
            </li>
          </ul>
          <button className="border border-gray-300 bg-gray-200 cursor-pointer hover:bg-gray-300 rounded-full p-2">
            <Sun />
          </button>
        </div>
      </nav>
    </header>
  );
};
export default Navbar;
