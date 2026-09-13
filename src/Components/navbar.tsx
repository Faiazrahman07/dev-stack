
import Logo from "../assets/logo-text.png";

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 border-b border-base-300 bg-base-100">
      <div className="container mx-auto flex items-center justify-between px-4 py-4 md:px-6">

        <button className="btn btn-ghost btn-circle md:hidden" aria-label="Open menu">
          ☰
        </button>


        <div className="flex items-center">
          <img
            src={Logo}
            alt="Dev Stack"
            className="h-9 w-auto"
          />
        </div>

        
        <ul className="hidden items-center gap-8 md:flex">
          <li>
            <a href="#" className="transition-colors hover:text-pink-500">
              Home
            </a>
          </li>
          <li>
            <a href="#technologies" className="transition-colors hover:text-pink-500">
              Technologies
            </a>
          </li>
          <li>
            <a href="#projects" className="transition-colors hover:text-pink-500">
              Projects
            </a>
          </li>
          <li>
            <a href="#about" className="transition-colors hover:text-pink-500">
              About
            </a>
          </li>
          <li>
            <a href="#contact" className="transition-colors hover:text-pink-500">
              Contact
            </a>
          </li>
        </ul>

      
        <div className="flex items-center gap-2">
          <button className="hidden px-3 py-2 transition-colors hover:text-pink-500 sm:block">
            Sign In
          </button>

          <button className="rounded-full bg-linear-to-r from-orange-500 via-pink-500 to-violet-600 px-4 py-2 text-sm font-medium text-white transition-transform hover:scale-105 sm:px-5">
            Sign Up
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
