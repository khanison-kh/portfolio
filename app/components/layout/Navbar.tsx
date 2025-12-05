import { Sun } from 'lucide-react';

const Navbar = () => {
  return (
    <header
      className="fixed w-full

     top-0 bg-white/70 backdrop-blur-sm z-50 shadow-lg"
    >
      <nav className="flex justify-between items-center p-4 px-16">
        <a href="#">Khanifolio</a>
        <div className="flex items-center gap-16">
          <ul className="flex items-center gap-6 [&>li>a]:font-semibold [&>li>a.normal-link]:inline-block [&>li>a.normal-link]:hover:bg-gray-200 [&>li>a.normal-link]:p-3 [&>li>a.normal-link]:rounded-lg [&>li>a.normal-link]:transition [&>li>a.normal-link]:duration-200">
            <li>
              <a className="normal-link" href="#about">
                À propos
              </a>
            </li>
            <li>
              <a className="normal-link" href="#projects">
                Projets
              </a>
            </li>
            <li>
              <a className="normal-link" href="#skills">
                Compétences
              </a>
            </li>
            <li>
              <a className="normal-link" href="#experience">
                Expériences
              </a>
            </li>
            <li>
              <a className="normal-link" href="#education">
                Formation
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="p-3 border text-white bg-blue-600 rounded-lg shadow-md
                 hover:opacity-90 transition duration-200"
              >
                Contact
              </a>
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
