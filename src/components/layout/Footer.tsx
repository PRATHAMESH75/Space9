import { Link } from 'react-router-dom';
import { Instagram, Linkedin, Mail, MapPin, Phone } from 'lucide-react';
import Logo from '../ui/Logo';

const Footer = () => {
  return (
    <footer className="bg-neutral-100 pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <Link to="/" className="inline-block mb-6">
              <Logo className="text-navy-800" />
            </Link>
            <p className="text-neutral-600 mb-6 max-w-xs">
              Transforming spaces with timeless design, functionality, and structural excellence.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-neutral-600 hover:text-navy-700 transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-neutral-600 hover:text-navy-700 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-serif font-medium mb-6">Services</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/services#architecture" className="text-neutral-600 hover:text-navy-700 transition-colors">
                  Architecture
                </Link>
              </li>
              <li>
                <Link to="/services#interior-design" className="text-neutral-600 hover:text-navy-700 transition-colors">
                  Interior Design
                </Link>
              </li>
              <li>
                <Link to="/services#buildership" className="text-neutral-600 hover:text-navy-700 transition-colors">
                  Buildership
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-serif font-medium mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/about" className="text-neutral-600 hover:text-navy-700 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/projects" className="text-neutral-600 hover:text-navy-700 transition-colors">
                  Projects
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-neutral-600 hover:text-navy-700 transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-serif font-medium mb-6">Contact</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin size={18} className="mr-2 mt-1 text-navy-700 flex-shrink-0" />
                <span className="text-neutral-600">
                  123 Design Avenue, Creative District, CA 90210
                </span>
              </li>
              <li className="flex items-center">
                <Phone size={18} className="mr-2 text-navy-700 flex-shrink-0" />
                <a href="tel:+11234567890" className="text-neutral-600 hover:text-navy-700 transition-colors">
                  +1 (123) 456-7890
                </a>
              </li>
              <li className="flex items-center">
                <Mail size={18} className="mr-2 text-navy-700 flex-shrink-0" />
                <a href="mailto:info@space9.com" className="text-neutral-600 hover:text-navy-700 transition-colors">
                  info@space9.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-neutral-200 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-neutral-500 mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Space9. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <Link to="/privacy-policy" className="text-sm text-neutral-500 hover:text-navy-700 transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms-of-service" className="text-sm text-neutral-500 hover:text-navy-700 transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;