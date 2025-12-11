const Navbar = () => {
  return (
    <header className="fixed top-0 z-50 w-full bg-white/70 shadow-lg backdrop-blur-sm">
      <nav className="flex items-center justify-between p-4 px-16">
        <a href="#">Khanifolio</a>
        <div className="flex items-center gap-16">
          <ul className="flex items-center gap-6 [&>li>a]:font-semibold [&>li>a.normal-link]:inline-block [&>li>a.normal-link]:rounded-lg [&>li>a.normal-link]:p-3 [&>li>a.normal-link]:transition [&>li>a.normal-link]:duration-200 [&>li>a.normal-link]:hover:bg-gray-200">
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
                className="rounded-lg border bg-blue-600 p-3 text-white shadow-md transition duration-200 hover:opacity-90"
              >
                Contact
              </a>
            </li>
          </ul>
          {/* <button className="cursor-pointer rounded-full border border-gray-300 bg-gray-200 p-2 hover:bg-gray-300">
            <Sun />
          </button> */}
        </div>
      </nav>
    </header>
  );
};
export default Navbar;
