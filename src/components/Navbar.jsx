import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { NAV_LINKS } from '../utils/constants';
import { FaFacebookF, FaInstagram } from 'react-icons/fa';
import Logo from '../assets/Logo.png';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  // ✅ Reusable style for all nav links
  const linkStyle = (path) =>
    `transition-colors duration-200 font-medium ${
      location.pathname === path
        ? 'text-blue-400 border-b-2 border-blue-400'
        : 'text-blue-400 hover:text-blue-500'
    }`;

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center" onClick={closeMenu}>
            <img
              src={Logo}
              alt="Edunite Logo"
              className="h-12 w-auto object-contain"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {NAV_LINKS.map((link) => (
              <Link key={link.name} to={link.path} className={linkStyle(link.path)}>
                {link.name}
              </Link>
            ))}
            {/* Social Icons */}
            <a
              href="https://www.facebook.com/profile.php?id=61580258943611"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-4 text-blue-400 hover:text-blue-600 text-xl transition-colors flex items-center"
              aria-label="Facebook"
            >
              <img
                src="https://cdn-icons-png.flaticon.com/128/5968/5968764.png"
                alt="Facebook"
                className="w-6 h-6"
              />
            </a>
            <a
              href="https://www.instagram.com/edunite._/?hl=en"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-2 text-pink-500 hover:text-pink-700 text-xl transition-colors flex items-center"
              aria-label="Instagram"
            >
              <img
                src="https://cdn-icons-png.flaticon.com/128/15713/15713420.png"
                alt="Instagram"
                className="w-6 h-6"
              />
            </a>
          </div>

          {/* Mobile Menu Button */}
<div className="md:hidden">
  <button
    onClick={toggleMenu}
    className="bg-white p-2 rounded-md shadow focus:outline-none"
  >
    {isMenuOpen ? (
      <X className="h-6 w-6 text-white" />
    ) : (
      <Menu className="h-6 w-6 text-white" />
    )}
  </button>
</div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t border-gray-200">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`block px-3 py-2 rounded-md ${linkStyle(link.path)}`}
                  onClick={closeMenu}
                >
                  {link.name}
                </Link>
        
              ))}
              {/* Social Icons for Mobile */}
              <div className="flex items-center mt-2 space-x-4 px-3">
                <a
                  href="https://www.facebook.com/profile.php?id=61580258943611"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-blue-600 text-xl transition-colors flex items-center"
                  aria-label="Facebook"
                >
                  <img
                    src="https://cdn-icons-png.flaticon.com/128/5968/5968764.png"
                    alt="Facebook"
                    className="w-6 h-6"
                  />
                </a>
                <a
                  href="https://www.instagram.com/edunite._/?hl=en"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-pink-500 hover:text-pink-700 text-xl transition-colors flex items-center"
                  aria-label="Instagram"
                >
                  <img
                    src="https://cdn-icons-png.flaticon.com/128/15713/15713420.png"
                    alt="Instagram"
                    className="w-6 h-6"
                  />
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
