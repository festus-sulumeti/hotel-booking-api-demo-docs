import { useState } from "react";
import { Link } from "react-router-dom";
import { HiMenu, HiX } from "react-icons/hi";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white text-black shadow-md fixed w-full z-50">
      <div className="max-w-6xl mx-auto px-6 sm:px-12 flex justify-between items-center h-16">
        {/* Logo */}
        <Link to="/" className="text-green-500 font-bold text-xl sm:text-2xl">
          Hotel API
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 text-black font-semibold">
          <li>
            <Link to="/docs" className="hover:text-green-500 transition">
              Docs
            </Link>
          </li>
          <li>
            <Link to="/auth" className="hover:text-green-500 transition">
              Authentication
            </Link>
          </li>
          <li>
            <Link to="/contact" className="hover:text-green-500 transition">
              Contact
            </Link>
          </li>
          <li>
            <Link
              to="/get-started"
              className="bg-green-500 text-black px-4 py-2 rounded-full hover:bg-green-600 transition"
            >
              Get Started
            </Link>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <HiX size={28} /> : <HiMenu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-md border-t border-gray-200">
          <ul className="flex flex-col space-y-4 p-6 text-black font-semibold">
            <li>
              <Link
                to="/docs"
                className="hover:text-green-500 transition"
                onClick={() => setIsOpen(false)}
              >
                Docs
              </Link>
            </li>
            <li>
              <Link
                to="/auth"
                className="hover:text-green-500 transition"
                onClick={() => setIsOpen(false)}
              >
                Authentication
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="hover:text-green-500 transition"
                onClick={() => setIsOpen(false)}
              >
                Contact
              </Link>
            </li>
            <li>
              <Link
                to="/get-started"
                className="bg-green-500 text-black px-4 py-2 rounded-full hover:bg-green-600 transition block text-center"
                onClick={() => setIsOpen(false)}
              >
                Get Started
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
