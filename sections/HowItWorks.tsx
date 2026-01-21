import React from 'react';
import { Section } from '../components/Section';
import { RefreshCw, ArrowRight } from 'lucide-react';
import { FadeIn } from '../components/FadeIn';
import { useLanguage } from '../contexts/LanguageContext';

export const HowItWorks: React.FC = () => {
  const { t } = useLanguage();

  return (
    <Section id="how-it-works" className="border-t border-border bg-surface/20">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <FadeIn>
            <h2 className="text-3xl md:text-5xl font-display font-bold text-primary mb-6">
              {t.howItWorks.title}<br/> <span className="text-blue-600 dark:text-blue-500">{t.howItWorks.subtitle}</span>
            </h2>
            <p className="text-lg text-muted mb-12 max-w-lg leading-relaxed">
              {t.howItWorks.desc}
            </p>
          </FadeIn>
          
          <div className="space-y-0 relative">
            {/* Visual connector line */}
            <div className="absolute left-6 top-6 bottom-6 w-0.5 bg-gradient-to-b from-blue-500/20 via-purple-500/20 to-transparent hidden md:block border-l-2 border-dashed border-border/60" />

            <FadeIn delay={100} direction="left">
              <div className="flex gap-8 group relative pb-12">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-surface border-2 border-border flex items-center justify-center text-xl font-bold font-display group-hover:bg-blue-600 group-hover:text-white group-hover:border-blue-600 transition-all duration-300 text-primary relative z-10 shadow-sm">1</div>
                <div className="pt-1">
                  <h3 className="text-xl font-bold text-primary mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">{t.howItWorks.steps.one.title}</h3>
                  <p className="text-muted leading-relaxed">{t.howItWorks.steps.one.desc}</p>
                </div>
              </div>
            </FadeIn>
            
            <FadeIn delay={200} direction="left">
              <div className="flex gap-8 group relative pb-12">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-surface border-2 border-border flex items-center justify-center text-xl font-bold font-display group-hover:bg-purple-600 group-hover:text-white group-hover:border-purple-600 transition-all duration-300 text-primary relative z-10 shadow-sm">2</div>
                <div className="pt-1">
                  <h3 className="text-xl font-bold text-primary mb-2 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">{t.howItWorks.steps.two.title}</h3>
                  <p className="text-muted leading-relaxed">{t.howItWorks.steps.two.desc}</p>
                </div>
              </div>
            </FadeIn>
            
            <FadeIn delay={300} direction="left">
              <div className="flex gap-8 group relative">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-surface border-2 border-border flex items-center justify-center text-xl font-bold font-display group-hover:bg-green-600 group-hover:text-white group-hover:border-green-600 transition-all duration-300 text-primary relative z-10 shadow-sm">3</div>
                <div className="pt-1">
                  <h3 className="text-xl font-bold text-primary mb-2 group-hover:text-green-600 dark:group-hover:text-green-400 transition-colors">{t.howItWorks.steps.three.title}</h3>
                  <p className="text-muted leading-relaxed">{t.howItWorks.steps.three.desc}</p>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>

        <div className="relative">
          <FadeIn direction="right" delay={200} scale>
            <div className="absolute inset-0 bg-gradient-to-bl from-blue-500/10 via-purple-500/10 to-transparent blur-3xl rounded-full" />
            <div className="relative bg-background border border-border rounded-2xl p-8 shadow-2xl space-y-6 hover:scale-[1.01] transition-transform duration-500">
               {/* Mock Header */}
               <div className="flex items-center justify-between border-b border-border pb-4 mb-2">
                 <div className="flex space-x-1.5">
                   <div className="w-3 h-3 rounded-full bg-red-400/80"></div>
                   <div className="w-3 h-3 rounded-full bg-yellow-400/80"></div>
                   <div className="w-3 h-3 rounded-full bg-green-400/80"></div>
                 </div>
                 <div className="text-xs text-muted font-medium">LINEAR-120</div>
               </div>

               {/* Mock Chat/Request Interface */}
               <div className="flex items-start gap-4 animate-slide-up" style={{ animationDelay: '300ms' }}>
                  <div className="w-8 h-8 rounded-full bg-surfaceHighlight border border-border flex-shrink-0" />
                  <div className="bg-surface rounded-2xl rounded-tl-none p-5 text-sm text-muted w-full shadow-sm border border-border/60">
                     <p className="mb-2 font-bold text-primary text-xs uppercase tracking-wide opacity-70">Internal Request</p>
                     <p className="text-primary/90">{t.howItWorks.mock.reqBody}</p>
                  </div>
               </div>
               
               <div className="flex items-start gap-4 flex-row-reverse animate-slide-up" style={{ animationDelay: '800ms', opacity: 0, animationFillMode: 'forwards' }}>
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-600 to-indigo-600 flex-shrink-0 flex items-center justify-center text-[10px] font-bold text-white shadow-lg shadow-blue-500/30">PM</div>
                  <div className="bg-blue-50 dark:bg-blue-600/10 border border-blue-100 dark:border-blue-600/20 rounded-2xl rounded-tr-none p-5 text-sm w-full shadow-sm">
                     <div className="flex items-center justify-between mb-2">
                        <span className="font-bold text-blue-700 dark:text-blue-300 text-xs uppercase tracking-wide opacity-90">PM Response</span>
                        <span className="px-2 py-0.5 rounded-full bg-blue-200/50 dark:bg-blue-500/30 text-[10px] font-medium text-blue-800 dark:text-blue-200">{t.howItWorks.mock.status}</span>
                     </div>
                     <p className="text-blue-900/80 dark:text-blue-100/80 leading-relaxed">{t.howItWorks.mock.resBody}</p>
                  </div>
               </div>

               <div className="flex items-center justify-center pt-6 border-t border-border mt-4">
                  <div className="flex items-center space-x-2 text-xs text-muted uppercase tracking-widest font-medium animate-pulse">
                     <RefreshCw className="w-3 h-3 animate-spin" />
                     <span>{t.howItWorks.mock.sync}</span>
                  </div>
               </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </Section>
  );
};