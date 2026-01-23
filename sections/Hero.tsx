import React from 'react';
import { Button } from '../components/Button';
import { CheckCircle2, PlayCircle, Sparkles, TrendingUp, Calendar, ArrowUpRight } from 'lucide-react';
import { Section } from '../components/Section';
import { FadeIn } from '../components/FadeIn';
import { useLanguage } from '../contexts/LanguageContext';

export const Hero: React.FC = () => {
  const { t } = useLanguage();

  const titleLine1Words = t.hero.titleLine1.split(' ');
  const titleLine2Words = t.hero.titleLine2.split(' ');

  return (
    <Section className="pt-32 md:pt-48 pb-16 md:pb-24 overflow-visible">
      {/* Background Ambience - GPU Accelerated */}
      <div className="absolute top-[-20%] left-1/2 -translate-x-1/2 w-[1200px] h-[600px] bg-gradient-to-br from-blue-600/10 via-purple-600/10 to-transparent blur-[100px] rounded-full pointer-events-none -z-10 animate-float transform-gpu will-change-transform"></div>

      <div className="grid lg:grid-cols-2 gap-16 items-center">
        <div className="max-w-2xl relative z-10">
          <FadeIn delay={0} direction="down">
            <div className="inline-flex items-center space-x-2.5 bg-surface/50 border border-border/60 rounded-full px-4 py-1.5 mb-8 backdrop-blur-md shadow-sm hover:border-blue-500/30 transition-all cursor-default">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
              </span>
              <span className="text-sm font-medium text-primary/80 tracking-wide">{t.hero.badge}</span>
              <Sparkles className="w-3.5 h-3.5 text-yellow-500 animate-sparkle ml-1" />
            </div>
          </FadeIn>
          
          {/* LCP Optimization: Reduced delays for title animation & added will-change */}
          <h1 className="text-5xl md:text-7xl font-display font-bold text-primary tracking-tight leading-[1.1] mb-6 flex flex-wrap gap-x-3 gap-y-1">
            <span className="flex flex-wrap gap-x-3">
              {titleLine1Words.map((word, i) => (
                <span 
                  key={`l1-${i}`} 
                  className="inline-block opacity-0 animate-word-bounce will-change-[transform,opacity]" 
                  style={{ animationDelay: `${50 + i * 50}ms` }}
                >
                  {word}
                </span>
              ))}
            </span>
            <span className="flex flex-wrap gap-x-3">
              {titleLine2Words.map((word, i) => (
                <span 
                  key={`l2-${i}`} 
                  className="inline-block opacity-0 animate-word-bounce text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 dark:from-blue-400 dark:via-purple-400 dark:to-indigo-400 will-change-[transform,opacity]"
                  style={{ animationDelay: `${50 + (titleLine1Words.length * 50) + (i * 50)}ms` }}
                >
                  {word}
                </span>
              ))}
            </span>
          </h1>
          
          <FadeIn delay={400}>
            <p className="text-lg md:text-xl text-muted mb-10 leading-relaxed max-w-lg font-light">
              {t.hero.description}
            </p>
          </FadeIn>
          
          <FadeIn delay={500}>
            <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-4 sm:space-y-0 sm:space-x-4 mb-12">
              <Button size="lg" withArrow href="#pricing" className="shadow-lg shadow-blue-600/10" aria-label="View pricing plans">
                {t.hero.viewPlans}
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                href="#how-it-works"
                className="group border-border hover:border-blue-500/50 hover:bg-blue-500/5"
                aria-label="Learn how it works"
              >
                <PlayCircle className="mr-2 h-5 w-5 group-hover:text-blue-500 transition-colors" />
                {t.hero.howItWorks}
              </Button>
            </div>
          </FadeIn>

          <FadeIn delay={600}>
            <div className="flex flex-wrap gap-6 text-sm font-medium text-muted">
              <div className="flex items-center group cursor-default">
                <div className="mr-2 rounded-full bg-green-500/10 p-1 group-hover:bg-green-500/20 transition-colors">
                  <CheckCircle2 className="w-3.5 h-3.5 text-green-600 dark:text-green-400" />
                </div>
                <span className="group-hover:text-primary transition-colors">{t.hero.noHiring}</span>
              </div>
              <div className="flex items-center group cursor-default">
                <div className="mr-2 rounded-full bg-green-500/10 p-1 group-hover:bg-green-500/20 transition-colors">
                  <CheckCircle2 className="w-3.5 h-3.5 text-green-600 dark:text-green-400" />
                </div>
                <span className="group-hover:text-primary transition-colors">{t.hero.start48h}</span>
              </div>
            </div>
          </FadeIn>
        </div>

        {/* Enhanced Visual Element - Infographic Style */}
        <div className="relative hidden lg:block perspective-1000">
           <FadeIn delay={700} direction="left" scale>
             {/* Abstract glow */}
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-tr from-blue-500/10 via-purple-500/10 to-transparent blur-3xl rounded-full animate-pulse-slow pointer-events-none will-change-[opacity]" />
             
             {/* Main Card */}
             <div className="relative bg-surface/60 backdrop-blur-xl border border-primary/5 rounded-2xl p-8 shadow-2xl transition-transform hover:scale-[1.02] duration-700 animate-float shadow-blue-900/10 transform-gpu will-change-transform">
                
                {/* Card Header */}
                <div className="flex items-center justify-between mb-8 border-b border-border/50 pb-6">
                   <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 rounded-lg bg-blue-100 dark:bg-blue-500/20 flex items-center justify-center text-blue-600 dark:text-blue-400">
                        <TrendingUp className="w-5 h-5" />
                      </div>
                      <div>
                        <div className="text-sm font-bold text-primary">Q3 Roadmap</div>
                        <div className="text-xs text-muted flex items-center">
                          <span className="w-1.5 h-1.5 rounded-full bg-green-500 mr-1.5"></span>
                          On Track
                        </div>
                      </div>
                   </div>
                   <div className="text-xs font-mono px-2 py-1 rounded bg-surface border border-border text-muted">v2.4.0</div>
                </div>
                
                {/* Progress Bars */}
                <div className="space-y-6">
                   {[
                     { label: "User Authentication", progress: "100%", color: "bg-green-500", status: "Done" },
                     { label: "Dashboard Analytics", progress: "72%", color: "bg-blue-500", status: "In Progress" },
                     { label: "Payment Integration", progress: "35%", color: "bg-purple-500", status: "Planning" }
                   ].map((item, i) => (
                      <div key={i} className="group">
                         <div className="flex justify-between items-center mb-2">
                           <span className="text-sm font-medium text-primary/80 group-hover:text-primary transition-colors">{item.label}</span>
                           <span className="text-xs text-muted">{item.status}</span>
                         </div>
                         <div className="h-2.5 bg-surfaceHighlight rounded-full w-full overflow-hidden">
                            <div 
                              className={`h-full rounded-full animate-progress-fill ${item.color} shadow-[0_0_10px_rgba(0,0,0,0.1)] relative overflow-hidden`} 
                              style={{ 
                                '--target-width': item.progress, 
                                animationDelay: `${800 + i * 200}ms` 
                              } as React.CSSProperties}
                            >
                              <div className="absolute inset-0 bg-white/20 animate-shimmer" />
                            </div>
                         </div>
                      </div>
                   ))}
                   
                   {/* Floating Stats Card */}
                   <div className="absolute -right-8 -bottom-6 p-5 bg-background border border-border/60 rounded-xl shadow-xl flex items-center space-x-4 animate-pop-in backdrop-blur-md" style={{ animationDelay: '1.2s' }}>
                      <div className="w-10 h-10 rounded-full bg-green-500/10 flex items-center justify-center">
                         <ArrowUpRight className="w-5 h-5 text-green-600 dark:text-green-400" />
                      </div>
                      <div>
                         <div className="text-xs text-muted font-medium uppercase tracking-wider mb-0.5">Velocity</div>
                         <div className="text-lg font-bold text-primary flex items-baseline">
                           +24%
                           <span className="text-xs font-normal text-green-600 ml-1">vs last sprint</span>
                         </div>
                      </div>
                   </div>
                </div>
             </div>
           </FadeIn>
        </div>
      </div>
    </Section>
  );
};