import { useState } from 'react';
import { Button } from "./ui/button";
import { Menu, X } from "lucide-react";
import logoImage from 'figma:asset/5f3293e26c3a72313df94192d5ddb9c2167dd755.png';

interface NavigationProps {
  currentPage: string;
  onPageChange: (page: string) => void;
}

export function Navigation({ currentPage, onPageChange }: NavigationProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'menu', label: 'Menu' },
    { id: 'about', label: 'About Us' },
    { id: 'franchise', label: 'Franchise' },
    { id: 'contact', label: 'Contact Us' }
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-pink-100 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div 
            onClick={() => onPageChange('home')}
            className="cursor-pointer flex items-center gap-3 hover:scale-105 transition-transform duration-300"
          >
            {/* Seoul Cha Logo Image */}
            <div className="relative">
              <img 
                src={logoImage} 
                alt="Seoul Cha Logo" 
                className="w-12 h-12 object-contain rounded-full shadow-lg"
              />
              {/* Floating decoration */}
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-gradient-to-r from-pink-300 to-purple-300 rounded-full floating-shape opacity-80"></div>
            </div>
            
            {/* Brand Text */}
            <div className="flex flex-col">
              <span className="korean-handwritten text-2xl bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent leading-none font-bold">
                Seoul Cha
              </span>
              <span className="text-xs text-gray-500 leading-none tracking-wide">Korean Bubble Tea</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => onPageChange(item.id)}
                className={`px-3 py-2 rounded-full transition-all duration-300 ${
                  currentPage === item.id
                    ? 'bg-gradient-to-r from-pink-200 to-purple-200 text-purple-800 shadow-sm'
                    : 'text-gray-700 hover:text-purple-600 hover:bg-pink-50'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="hover:bg-pink-50"
            >
              {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-16 left-0 right-0 bg-white/95 backdrop-blur-md border-b border-pink-100 shadow-lg">
            <div className="px-4 py-6 space-y-4">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => {
                    onPageChange(item.id);
                    setIsMenuOpen(false);
                  }}
                  className={`block w-full text-left px-4 py-3 rounded-lg transition-all duration-300 ${
                    currentPage === item.id
                      ? 'bg-gradient-to-r from-pink-200 to-purple-200 text-purple-800'
                      : 'text-gray-700 hover:text-purple-600 hover:bg-pink-50'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}