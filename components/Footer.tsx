import React from 'react';
import { Rocket, Twitter, Linkedin, Github } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export const Footer: React.FC = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-background border-t border-border py-12 md:py-16 transition-colors duration-300">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-1">
            <a href="#" className="flex items-center space-x-2 mb-6 group" aria-label="PMaaS Home">
              <div className="w-8 h-8 rounded bg-primary text-background flex items-center justify-center group-hover:rotate-3 transition-transform">
                <Rocket className="w-5 h-5" />
              </div>
              <span className="text-xl font-display font-bold text-primary">
                PMaaS
              </span>
            </a>
            <p className="text-muted text-sm leading-relaxed">
              {t.footer.desc}
            </p>
          </div>

          <div>
            <h4 className="text-primary font-bold mb-6">{t.footer.sitemap}</h4>
            <ul className="space-y-4 text-sm text-muted">
              <li><a href="#how-it-works" className="hover:text-primary transition-colors">{t.hero.howItWorks}</a></li>
              <li><a href="#services" className="hover:text-primary transition-colors">{t.nav.services}</a></li>
              <li><a href="#pricing" className="hover:text-primary transition-colors">{t.nav.pricing}</a></li>
              <li><a href="#faq" className="hover:text-primary transition-colors">{t.nav.faq}</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-primary font-bold mb-6">{t.footer.legal}</h4>
            <ul className="space-y-4 text-sm text-muted">
              <li><a href="#" className="hover:text-primary transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Terms of Service</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Cookie Policy</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-primary font-bold mb-6">{t.footer.connect}</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-muted hover:text-blue-400 hover:scale-105 transition-all duration-300" aria-label="Twitter"><Twitter className="w-5 h-5" /></a>
              <a href="#" className="text-muted hover:text-blue-600 hover:scale-105 transition-all duration-300" aria-label="LinkedIn"><Linkedin className="w-5 h-5" /></a>
              <a href="#" className="text-muted hover:text-primary hover:scale-105 transition-all duration-300" aria-label="GitHub"><Github className="w-5 h-5" /></a>
            </div>
          </div>
        </div>

        <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-muted text-sm">
            © {new Date().getFullYear()} {t.footer.rights}
          </p>
          <div className="mt-4 md:mt-0">
             <span className="flex items-center space-x-2 text-sm text-muted">
                <span className="w-2 h-2 rounded-full bg-green-500"></span>
                <span>{t.footer.operational}</span>
             </span>
          </div>
        </div>
      </div>
    </footer>
  );
};