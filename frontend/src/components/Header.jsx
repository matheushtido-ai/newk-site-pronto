import React, { useState } from "react";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <img 
              src="https://customer-assets.emergentagent.com/job_naugatuck-woodwork/artifacts/dam0sqae_Logotipo%20Para%20Podcast%20Minimalista%20Roxo%20E%20Preto%20-%201.png"
              alt="NEWK LLC Logo"
              className="h-12 w-auto"
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <a href="#home" className="text-gray-700 hover:text-amber-600 transition-colors duration-200 font-medium">
              Home
            </a>
            <a href="#about" className="text-gray-700 hover:text-amber-600 transition-colors duration-200 font-medium">
              About
            </a>
            <a href="#services" className="text-gray-700 hover:text-amber-600 transition-colors duration-200 font-medium">
              Services
            </a>
            <a href="#portfolio" className="text-gray-700 hover:text-amber-600 transition-colors duration-200 font-medium">
              Portfolio
            </a>
            <a href="#contact" className="text-gray-700 hover:text-amber-600 transition-colors duration-200 font-medium">
              Contact
            </a>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <a
              href="#contact"
              className="bg-amber-600 text-white px-6 py-2 rounded-md hover:bg-amber-700 transition-colors duration-200 font-medium"
            >
              Get Quote
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-amber-600 transition-colors duration-200"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 border-t border-gray-100">
              <a href="#home" className="block px-3 py-2 text-gray-700 hover:text-amber-600 transition-colors duration-200">
                Home
              </a>
              <a href="#about" className="block px-3 py-2 text-gray-700 hover:text-amber-600 transition-colors duration-200">
                About
              </a>
              <a href="#services" className="block px-3 py-2 text-gray-700 hover:text-amber-600 transition-colors duration-200">
                Services
              </a>
              <a href="#portfolio" className="block px-3 py-2 text-gray-700 hover:text-amber-600 transition-colors duration-200">
                Portfolio
              </a>
              <a href="#contact" className="block px-3 py-2 text-gray-700 hover:text-amber-600 transition-colors duration-200">
                Contact
              </a>
              <a
                href="#contact"
                className="block mx-3 mt-4 bg-amber-600 text-white px-6 py-2 rounded-md hover:bg-amber-700 transition-colors duration-200 text-center"
              >
                Get Quote
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;