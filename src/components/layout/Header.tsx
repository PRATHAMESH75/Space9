import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import Logo from '../ui/Logo';

interface HeaderProps {
  isScrolled: boolean;
}

const Header = ({ isScrolled }: HeaderProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const navLinkClasses = ({ isActive }: { isActive: boolean }) =>
    `text-sm font-medium transition-colors duration-300 hover:text-navy-600 px-4 py-2 ${
      isActive ? 'text-navy-800' : 'text-neutral-600'
    }`;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white shadow-md py-3'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <Link to="/" className="flex items-center" onClick={closeMenu}>
          <Logo className={isScrolled ? 'text-navy-800' : 'text-navy-800'} />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-1">
          <NavLink to="/" className={navLinkClasses} end>
            Home
          </NavLink>
          <NavLink to="/about" className={navLinkClasses}>
            About
          </NavLink>
          <NavLink to="/services" className={navLinkClasses}>
            Services
          </NavLink>
          <NavLink to="/projects" className={navLinkClasses}>
            Projects
          </NavLink>
          <NavLink to="/contact" className={navLinkClasses}>
            Contact
          </NavLink>
        </nav>

        {/* Contact button */}
        <Link
          to="/contact"
          className="hidden md:block px-6 py-2 bg-navy-800 hover:bg-navy-700 text-white text-sm font-medium transition-colors duration-300 rounded"
        >
          Get in Touch
        </Link>

        {/* Mobile menu button */}
        <button
          className="md:hidden text-neutral-800"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-3">
            <NavLink
              to="/"
              className={navLinkClasses}
              onClick={closeMenu}
              end
            >
              Home
            </NavLink>
            <NavLink
              to="/about"
              className={navLinkClasses}
              onClick={closeMenu}
            >
              About
            </NavLink>
            <NavLink
              to="/services"
              className={navLinkClasses}
              onClick={closeMenu}
            >
              Services
            </NavLink>
            <NavLink
              to="/projects"
              className={navLinkClasses}
              onClick={closeMenu}
            >
              Projects
            </NavLink>
            <NavLink
              to="/contact"
              className={navLinkClasses}
              onClick={closeMenu}
            >
              Contact
            </NavLink>
            <Link
              to="/contact"
              className="px-6 py-2 bg-navy-800 hover:bg-navy-700 text-white text-sm font-medium transition-colors duration-300 rounded text-center"
              onClick={closeMenu}
            >
              Get in Touch
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;