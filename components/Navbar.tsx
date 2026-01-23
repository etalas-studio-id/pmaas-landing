import React, { useState, useEffect, useMemo } from 'react';
import { Menu, X, Rocket } from 'lucide-react';
import { Button } from './Button';
import { NavLink } from '../types';
import { Switcher } from './Switcher';
import { useLanguage } from '../contexts/LanguageContext';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const [scrollProgress, setScrollProgress] = useState(0);
  const { t } = useLanguage();

  // FIX: Memoize links to prevent useEffect from re-running on every render
  const links: NavLink[] = useMemo(() => [
    { label: t.nav.about, href: '#what-is-pmaas' },
    { label: t.nav.useCases, href: '#use-cases' },
    { label: t.nav.services, href: '#services' },
    { label: t.nav.pricing, href: '#pricing' },
    { label: t.nav.faq, href: '#faq' },
  ], [t]);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      // FIX: Throttling scroll events using requestAnimationFrame for performance
      if (!ticking) {
        window.requestAnimationFrame(() => {
          // Handle Navbar transparency
          setIsScrolled(window.scrollY > 20);

          // Handle Scroll Progress Bar
          const totalScroll = document.documentElement.scrollTop;
          const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
          const scroll = windowHeight > 0 ? totalScroll / windowHeight : 0;
          setScrollProgress(Number(scroll));

          // Handle Active Section Logic (ScrollSpy)
          const sections = links.map(link => link.href.substring(1));
          let current = '';
          
          for (const section of sections) {
            const element = document.getElementById(section);
            if (element) {
              const rect = element.getBoundingClientRect();
              // Offset logic: if the section top is within the upper part of the viewport
              if (rect.top <= 150 && rect.bottom >= 150) {
                current = `#${section}`;
              }
            }
          }
          // Only update state if it changed
          setActiveSection(prev => (prev !== current ? current : prev));
          
          ticking = false;
        });
        
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    // Trigger once on mount to set initial state
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, [links]);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${
        isScrolled || isMobileMenuOpen
          ? 'bg-background/80 backdrop-blur-md border-border shadow-sm'
          : 'bg-transparent border-transparent'
      }`}
      aria-label="Main Navigation"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="#" className="flex items-center space-x-2 group" aria-label="PMaaS Home">
            <div className="w-8 h-8 rounded bg-primary text-background flex items-center justify-center transition-transform group-hover:rotate-3">
              <Rocket className="w-5 h-5 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform" />
            </div>
            <span className="text-xl font-display font-bold tracking-tight text-primary">
              PMaaS
            </span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-6">
            <div className="flex space-x-6">
              {links.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className={`relative text-sm font-medium transition-colors py-1 group ${
                    activeSection === link.href ? 'text-primary' : 'text-muted hover:text-primary'
                  }`}
                >
                  {link.label}
                  <span 
                    className={`absolute bottom-0 left-0 h-0.5 bg-accent transition-all duration-300 ${
                      activeSection === link.href ? 'w-full' : 'w-0 group-hover:w-full'
                    }`}
                  ></span>
                </a>
              ))}
            </div>
            <Switcher />
            <Button size="sm" variant="primary" href="#pricing">
              {t.nav.getStarted}
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-4">
            <Switcher />
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-muted hover:text-primary p-2"
              aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={isMobileMenuOpen}
            >
              {isMobileMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </div>

      {/* Scroll Progress Bar */}
      <div className="absolute bottom-0 left-0 h-[2px] bg-blue-600/30 w-full">
        <div 
          className="h-full bg-blue-600 shadow-[0_0_10px_rgba(37,99,235,0.5)] transition-all duration-150 ease-out" 
          style={{ width: `${scrollProgress * 100}%` }}
        />
      </div>

      {/* Mobile Menu - Fixed, Full Height with Scroll */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-background border-b border-border absolute w-full max-h-[calc(100vh-80px)] overflow-y-auto animate-fade-in shadow-2xl">
          <div className="px-4 pt-2 pb-6 space-y-2">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`block px-3 py-3 rounded-md text-base font-medium transition-colors ${
                  activeSection === link.href 
                  ? 'text-primary bg-surfaceHighlight/50' 
                  : 'text-muted hover:text-primary hover:bg-surface'
                }`}
              >
                {link.label}
              </a>
            ))}
            <div className="pt-4 border-t border-border mt-4">
              <Button fullWidth href="#pricing" onClick={() => setIsMobileMenuOpen(false)}>
                {t.nav.getStarted}
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};