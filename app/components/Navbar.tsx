'use client'

import Image from "next/image";
import d4logo from "../assets/images/d4logo-dark.png";
import d4logoDark from "../assets/images/d4logo.png"; 
import Link from "next/link";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sun, Moon } from "lucide-react"; // Using Lucide for theme icons
import { useTheme } from "next-themes";

export default function Navbar() {
  const [isBurgerMenuOpen, setIsBurgerMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const NavLinks = [
    { url: "/", title: "Home" },
    { url: "/team", title: "Team" },
    { url: "/about", title: "About" },
    { url: "/events", title: "Events" }
  ];

  const navVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.3 } }
  };

  const mobileMenuVariants = {
    hidden: { opacity: 0, height: 0 },
    visible: { 
      opacity: 1, 
      height: "auto",
      transition: { 
        duration: 0.3,
        staggerChildren: 0.1,
        when: "beforeChildren"
      }
    },
    exit: { opacity: 0, height: 0 }
  };

  const linkVariants = {
    hidden: { opacity: 0, x: 20 },
    visible: { opacity: 1, x: 0 }
  };

  if (!mounted) return null;

  return (
    <motion.nav 
      initial="hidden"
      animate="visible"
      className={`fixed top-0 z-50 w-full backdrop-blur-md transition-all duration-300 ${
        isScrolled ? "bg-background/90 shadow-lg" : "bg-background/80"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <motion.div 
            className="flex items-center"
            variants={navVariants}
          >
            <Link href="/" className="flex items-center">
              <Image
                className="w-16 sm:w-20 transition-transform hover:scale-105"
                src={theme === 'dark' ? d4logoDark : d4logo}
                alt="D4 Community Logo"
                priority
              />
              <span className="ml-2 text-xl font-bold bg-gradient-to-r from-[#EC5735] to-[#A46FF2] bg-clip-text text-transparent hidden sm:block">
                D4 Community
              </span>
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <motion.div 
            className="hidden lg:flex items-center space-x-8"
            variants={navVariants}
          >
            {NavLinks.map((link, index) => (
              <Link
                key={index}
                href={link.url}
                className="relative text-foreground/90 hover:text-foreground text-lg font-medium transition-colors group"
              >
                {link.title}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-[#EC5735] to-[#A46FF2] transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ))}
          </motion.div>

          {/* Desktop Right Side */}
          <motion.div 
            className="hidden lg:flex items-center gap-4"
            variants={navVariants}
          >
            <button
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className="p-2 rounded-full hover:bg-accent transition-colors"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? (
                <Sun className="h-5 w-5 text-foreground" />
              ) : (
                <Moon className="h-5 w-5 text-foreground" />
              )}
            </button>
            
            <Link
              href="/join"
              className="relative px-6 py-2 rounded-lg bg-gradient-to-r from-[#EC5735] to-[#A46FF2] text-white font-medium hover:shadow-lg hover:shadow-[#EC5735]/30 transition-all duration-300 overflow-hidden group"
            >
              <span className="relative z-10">Join Now</span>
              <span className="absolute inset-0 bg-gradient-to-r from-[#A46FF2] to-[#EC5735] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
            </Link>
          </motion.div>

          {/* Mobile Right Side */}
          <div className="lg:hidden flex items-center gap-3">
            <button
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className="p-2 rounded-full hover:bg-accent transition-colors"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? (
                <Sun className="h-5 w-5 text-foreground" />
              ) : (
                <Moon className="h-5 w-5 text-foreground" />
              )}
            </button>
            
            <Link
              href="/join"
              className="px-4 py-1.5 rounded-lg bg-gradient-to-r from-[#EC5735] to-[#A46FF2] text-white text-sm font-medium hover:shadow-lg hover:shadow-[#EC5735]/30 transition-all"
            >
              Join
            </Link>

            <button
              onClick={() => setIsBurgerMenuOpen(!isBurgerMenuOpen)}
              className="p-2 text-foreground hover:text-[#EC5735] focus:outline-none transition-colors"
              aria-label="Toggle menu"
            >
              <div className="w-6 flex flex-col items-center">
                <span className={`block h-0.5 w-6 bg-current transform transition duration-300 ease-in-out ${isBurgerMenuOpen ? 'rotate-45 translate-y-1.5' : '-translate-y-0.5'}`}></span>
                <span className={`block h-0.5 w-6 bg-current transition-all duration-300 ease-in-out my-1 ${isBurgerMenuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
                <span className={`block h-0.5 w-6 bg-current transform transition duration-300 ease-in-out ${isBurgerMenuOpen ? '-rotate-45 -translate-y-1.5' : 'translate-y-0.5'}`}></span>
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isBurgerMenuOpen && (
            <motion.div
              initial="hidden"
              animate="visible"
              exit="exit"
              variants={mobileMenuVariants}
              className="lg:hidden overflow-hidden"
            >
              <div className="px-4 pb-4 pt-2 space-y-4 border-t border-[#EC5735]/30">
                {NavLinks.map((link, index) => (
                  <motion.div
                    key={index}
                    variants={linkVariants}
                    transition={{ duration: 0.2 }}
                  >
                    <Link
                      href={link.url}
                      onClick={() => setIsBurgerMenuOpen(false)}
                      className="block py-3 px-4 text-foreground hover:bg-accent rounded-lg transition-colors text-lg font-medium"
                    >
                      {link.title}
                    </Link>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
}