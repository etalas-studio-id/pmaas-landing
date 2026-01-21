import React from 'react';
import { Section } from '../components/Section';
import { ArrowRight, Box, Building2, ShoppingBag } from 'lucide-react';
import { FadeIn } from '../components/FadeIn';
import { useLanguage } from '../contexts/LanguageContext';

export const UseCases: React.FC = () => {
  const { t } = useLanguage();

  const cases = [
    { ...t.useCases.items.startup, tags: ["0 to 1", "Mobile App", "Fundraising"] },
    { ...t.useCases.items.enterprise, tags: ["B2B SaaS", "Portfolio", "Retention"] },
    { ...t.useCases.items.ecommerce, tags: ["Marketplace", "Digital Transformation", "Growth"] }
  ];

  const icons = [Box, Building2, ShoppingBag];
  const accentColors = ["text-pink-500", "text-blue-500", "text-orange-500"];
  const bgAccents = ["group-hover:bg-pink-500/5 group-hover:border-pink-500/20", "group-hover:bg-blue-500/5 group-hover:border-blue-500/20", "group-hover:bg-orange-500/5 group-hover:border-orange-500/20"];

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    e.currentTarget.style.setProperty('--mouse-x', `${x}px`);
    e.currentTarget.style.setProperty('--mouse-y', `${y}px`);
  };

  return (
    <Section id="use-cases" className="bg-surface/50 border-t border-border">
      <div className="mb-16">
        <FadeIn>
          <h2 className="text-3xl md:text-5xl font-display font-bold text-primary mb-6">
            {t.useCases.title} <span className="text-muted">{t.useCases.subtitle}</span>
          </h2>
          <p className="text-lg text-muted max-w-2xl">
            {t.useCases.desc}
          </p>
        </FadeIn>
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        {cases.map((useCase, index) => {
          const Icon = icons[index];
          const accentClass = accentColors[index];
          const bgHoverClass = bgAccents[index];

          return (
            <FadeIn key={index} delay={index * 150} className="h-full" scale>
              <div 
                onMouseMove={handleMouseMove}
                className={`relative group h-full overflow-hidden rounded-2xl bg-surface border border-border p-8 transition-all duration-300 ${bgHoverClass} hover:-translate-y-1 hover:scale-[1.01] hover:shadow-2xl hover:shadow-primary/5`}
              >
                 {/* Spotlight Effect */}
                 <div 
                  className="pointer-events-none absolute -inset-px opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-0 mix-blend-soft-light"
                  style={{
                    background: `radial-gradient(600px circle at var(--mouse-x) var(--mouse-y), rgba(var(--primary), 0.08), transparent 40%)`
                  }}
                />

                <div className={`absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity transform group-hover:scale-110 duration-500 ${accentClass}`}>
                  <Icon className="w-24 h-24 rotate-12" />
                </div>
                
                <div className="relative z-10 flex flex-col h-full">
                  <div className={`w-12 h-12 rounded-full bg-background border border-border flex items-center justify-center mb-6 text-primary group-hover:bg-primary group-hover:text-background group-hover:border-primary/10 transition-colors group-hover:scale-110 duration-300 shadow-sm`}>
                    <Icon className={`w-5 h-5 ${accentClass} group-hover:text-background`} />
                  </div>
                  
                  <h3 className="text-xl font-bold text-primary mb-4">{useCase.title}</h3>
                  
                  <div className="space-y-5 mb-8 flex-grow">
                    <div>
                      <span className="text-xs font-bold text-muted uppercase tracking-wider">{t.useCases.labels.scenario}</span>
                      <p className="text-sm text-muted mt-1 leading-relaxed">{useCase.scenario}</p>
                    </div>
                    <div>
                      <span className="text-xs font-bold text-blue-500 uppercase tracking-wider">{t.useCases.labels.solution}</span>
                      <p className="text-sm text-primary/80 mt-1 leading-relaxed">{useCase.solution}</p>
                    </div>
                    <div>
                      <span className="text-xs font-bold text-green-500 uppercase tracking-wider">{t.useCases.labels.outcome}</span>
                      <p className="text-sm text-primary mt-1 font-medium">{useCase.outcome}</p>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 pt-4 border-t border-border/50 mt-auto">
                    {useCase.tags.map(tag => (
                      <span key={tag} className="text-[10px] font-medium px-2 py-1 rounded-full bg-background text-muted border border-border group-hover:border-primary/20 group-hover:text-primary transition-colors">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </FadeIn>
          );
        })}
      </div>
    </Section>
  );
};