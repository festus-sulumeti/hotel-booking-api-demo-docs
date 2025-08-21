import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
    exit: { opacity: 0, y: -10, transition: { duration: 0.2 } },
  };

  return (
    <nav className="fixed top-4 left-0 w-full z-50 flex justify-center">
      {/* Centered Container */}
      <div className="max-w-6xl w-[90%] bg-white/80 backdrop-blur-lg shadow-md rounded-2xl px-6 flex items-center justify-between h-14 relative">
        
        {/* Logo (Left) */}
        <Link to="/" className="text-green-500 text-xl font-bold">
          Hotel API
        </Link>

        {/* Desktop Menu (Centered Links) */}
        <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 gap-8 text-black font-medium">
          <Link to="/docs" className="hover:text-green-500 transition">
            Docs
          </Link>
          <Link to="/auth" className="hover:text-green-500 transition">
            Authentication
          </Link>
          <Link to="/contact" className="hover:text-green-500 transition">
            Contact
          </Link>
          <Link to="/get-started" className="hover:text-green-500 transition">
            Get Started
          </Link>
        </div>

        {/* Mobile Menu Button (Right) */}
        <button
          className="md:hidden text-black"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile Dropdown (Centered Links) */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            variants={menuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="absolute top-20 w-[85%] bg-white/90 backdrop-blur-lg rounded-xl shadow-lg py-6 space-y-4 text-center"
          >
            <Link
              to="/docs"
              className="block text-black text-lg hover:text-green-500 transition"
              onClick={() => setIsOpen(false)}
            >
              Docs
            </Link>
            <Link
              to="/auth"
              className="block text-black text-lg hover:text-green-500 transition"
              onClick={() => setIsOpen(false)}
            >
              Authentication
            </Link>
            <Link
              to="/contact"
              className="block text-black text-lg hover:text-green-500 transition"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>
            <Link
              to="/get-started"
              className="block text-black text-lg hover:text-green-500 transition"
              onClick={() => setIsOpen(false)}
            >
              Get Started
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
