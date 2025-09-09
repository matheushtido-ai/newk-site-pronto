import React from "react";
import { MapPin, Phone, Mail, Facebook, Instagram, Linkedin } from "lucide-react";
import { companyInfo } from "../data/mockData";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="mb-6">
              <h3 className="text-3xl font-bold text-white mb-2">NEWK LLC</h3>
              <p className="text-amber-400 font-medium mb-4">{companyInfo.tagline}</p>
              <p className="text-gray-300 leading-relaxed max-w-md">
                Expert finish carpentry and custom woodwork serving Naugatuck and surrounding 
                Connecticut areas. Transforming homes with precision, passion, and unmatched craftsmanship.
              </p>
            </div>

            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center">
                <MapPin className="h-5 w-5 text-amber-400 mr-3 flex-shrink-0" />
                <span className="text-gray-300">Serving {companyInfo.location} & surrounding areas</span>
              </div>
              <div className="flex items-center">
                <Phone className="h-5 w-5 text-amber-400 mr-3 flex-shrink-0" />
                <a 
                  href={`tel:${companyInfo.phone}`}
                  className="text-gray-300 hover:text-amber-400 transition-colors duration-200"
                >
                  {companyInfo.phone}
                </a>
              </div>
              <div className="flex items-center">
                <Mail className="h-5 w-5 text-amber-400 mr-3 flex-shrink-0" />
                <a 
                  href={`mailto:${companyInfo.email}`}
                  className="text-gray-300 hover:text-amber-400 transition-colors duration-200"
                >
                  {companyInfo.email}
                </a>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-xl font-bold text-white mb-6">Our Services</h4>
            <ul className="space-y-3">
              <li>
                <a href="#services" className="text-gray-300 hover:text-amber-400 transition-colors duration-200">
                  Door & Window Installation
                </a>
              </li>
              <li>
                <a href="#services" className="text-gray-300 hover:text-amber-400 transition-colors duration-200">
                  Custom Cabinetry
                </a>
              </li>
              <li>
                <a href="#services" className="text-gray-300 hover:text-amber-400 transition-colors duration-200">
                  Custom Staircases
                </a>
              </li>
              <li>
                <a href="#services" className="text-gray-300 hover:text-amber-400 transition-colors duration-200">
                  Deck & Outdoor Carpentry
                </a>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-bold text-white mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <a href="#home" className="text-gray-300 hover:text-amber-400 transition-colors duration-200">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="text-gray-300 hover:text-amber-400 transition-colors duration-200">
                  About Us
                </a>
              </li>
              <li>
                <a href="#services" className="text-gray-300 hover:text-amber-400 transition-colors duration-200">
                  Services
                </a>
              </li>
              <li>
                <a href="#portfolio" className="text-gray-300 hover:text-amber-400 transition-colors duration-200">
                  Portfolio
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-300 hover:text-amber-400 transition-colors duration-200">
                  Contact
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-300 hover:text-amber-400 transition-colors duration-200">
                  Free Consultation
                </a>
              </li>
            </ul>

            {/* Service Areas */}
            <div className="mt-8">
              <h5 className="text-lg font-semibold text-white mb-4">Service Areas</h5>
              <div className="grid grid-cols-2 gap-2 text-sm text-gray-300">
                <div>Naugatuck</div>
                <div>Waterbury</div>
                <div>Middlebury</div>
                <div>Southbury</div>
                <div>Watertown</div>
                <div>Woodbury</div>
              </div>
            </div>
          </div>
        </div>

        {/* Social Media & CTA */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <h4 className="text-xl font-bold text-white mb-4">Ready to Start Your Project?</h4>
              <a
                href="#contact"
                className="inline-flex items-center px-6 py-3 bg-amber-600 text-white font-semibold rounded-lg hover:bg-amber-700 transition-all duration-300 transform hover:scale-105"
              >
                Get Your Free Quote Today
              </a>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-800 p-3 rounded-lg hover:bg-amber-600 transition-colors duration-200"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-800 p-3 rounded-lg hover:bg-amber-600 transition-colors duration-200"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-800 p-3 rounded-lg hover:bg-amber-600 transition-colors duration-200"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-gray-950 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
            <div className="mb-4 md:mb-0">
              <p>&copy; {currentYear} NEWK LLC. All rights reserved.</p>
            </div>
            <div className="flex space-x-6">
              <span>Licensed & Insured</span>
              <span>•</span>
              <span>15+ Years Experience</span>
              <span>•</span>
              <span>Connecticut Carpentry Experts</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;