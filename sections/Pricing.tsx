import React from 'react';
import { Section } from '../components/Section';
import { Button } from '../components/Button';
import { Check, Info } from 'lucide-react';
import { PricingPlan } from '../types';
import { FadeIn } from '../components/FadeIn';
import { useLanguage } from '../contexts/LanguageContext';
import { Tooltip } from '../components/Tooltip';
import { TOOLTIP_DATA } from '../utils/tooltipData';

const whatsappNumber = "628567234922";
const createWhatsappLink = (text: string) => `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(text)}`;

export const Pricing: React.FC = () => {
  const { t } = useLanguage();

  const plans: PricingPlan[] = [
    {
      name: t.pricing.plans.standard.name,
      price: 'Rp 15 Mio',
      period: '/mo (or $1,000)',
      description: t.pricing.plans.standard.desc,
      buttonText: t.pricing.plans.standard.btn,
      buttonLink: createWhatsappLink(`Hi, I'm interested in the ${t.pricing.plans.standard.name} PMaaS plan.`),
      features: t.pricing.plans.standard.features.map(f => ({ text: f, included: true }))
    },
    {
      name: t.pricing.plans.pro.name,
      price: 'Rp 45 Mio',
      period: '/mo (or $3,000)',
      description: t.pricing.plans.pro.desc,
      popular: true,
      buttonText: t.pricing.plans.pro.btn,
      buttonLink: createWhatsappLink(`Hi, I'm interested in the ${t.pricing.plans.pro.name} PMaaS plan.`),
      features: t.pricing.plans.pro.features.map(f => ({ text: f, included: true }))
    },
    {
      name: t.pricing.plans.enterprise.name,
      price: 'Custom',
      period: '',
      description: t.pricing.plans.enterprise.desc,
      buttonText: t.pricing.plans.enterprise.btn,
      buttonLink: createWhatsappLink("Hi, I'm interested in a Custom Enterprise PMaaS solution."),
      features: t.pricing.plans.enterprise.features.map(f => ({ text: f, included: true }))
    }
  ];

  return (
    <Section id="pricing" className="bg-surface/80 border-t border-border">
      <div className="text-center max-w-2xl mx-auto mb-16">
        <FadeIn>
          <h2 className="text-3xl md:text-5xl font-display font-bold text-primary mb-6">
            {t.pricing.title}
          </h2>
          <p className="text-lg text-muted">
            {t.pricing.desc}
          </p>
        </FadeIn>
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        {plans.map((plan, index) => (
          <FadeIn key={index} delay={index * 150} className="flex flex-col h-full">
            <div 
              className={`relative flex flex-col h-full p-8 rounded-2xl border transition-all duration-300 will-change-transform transform-gpu ${
                plan.popular 
                  ? 'bg-blue-50 dark:bg-blue-900/10 border-blue-200 dark:border-blue-500/50 shadow-[0_0_40px_-10px_rgba(59,130,246,0.2)] hover:border-blue-300 dark:hover:border-blue-400/80 hover:shadow-[0_0_60px_-10px_rgba(59,130,246,0.3)]' 
                  : 'bg-background border-border hover:border-muted/50 hover:shadow-xl'
              } hover:-translate-y-1 hover:scale-[1.02]`}
            >
              {plan.popular && (
                 <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-lg shadow-blue-900/50">
                    {t.pricing.mostPopular}
                 </div>
              )}

              <div className="mb-8">
                <h3 className={`text-xl font-bold mb-2 ${plan.popular ? 'text-blue-700 dark:text-blue-400' : 'text-primary'}`}>{plan.name}</h3>
                <p className="text-sm text-muted h-10">{plan.description}</p>
              </div>

              <div className="mb-8">
                <span className="text-3xl lg:text-4xl font-bold text-primary tracking-tight">{plan.price}</span>
                <span className="text-sm font-medium text-muted block mt-1">{plan.period}</span>
              </div>

              <Button 
                variant={plan.popular ? 'accent' : 'secondary'} 
                fullWidth 
                className="mb-8"
                href={plan.buttonLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                {plan.buttonText}
              </Button>

              <div className="space-y-4 flex-1">
                {plan.features.map((feature, idx) => (
                  <div key={idx} className="flex items-start">
                    <div className={`mr-3 rounded-full p-0.5 mt-0.5 ${plan.popular ? 'bg-blue-100 dark:bg-blue-500/20 text-blue-600 dark:text-blue-400' : 'bg-surfaceHighlight text-muted'}`}>
                      <Check className="w-3 h-3" />
                    </div>
                    <Tooltip content={TOOLTIP_DATA[feature.text] || ""}>
                      <span className={`text-sm text-muted border-b border-dashed border-transparent hover:border-muted/50 cursor-help transition-colors`}>
                        {feature.text}
                      </span>
                    </Tooltip>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
      
      <div className="mt-16 text-center">
         <FadeIn delay={400}>
           <div className="inline-flex items-center justify-center p-4 rounded-lg bg-surface/50 border border-border gap-8 backdrop-blur-sm hover:bg-surface transition-colors">
              <div className="text-left">
                 <div className="text-xs text-muted uppercase tracking-widest font-bold mb-1">{t.pricing.bookCall}</div>
                 <div className="text-primary font-medium">{t.pricing.notSure}</div>
              </div>
              <Button 
                variant="outline" 
                size="sm" 
                className="hover:border-muted"
                href={createWhatsappLink("Hi, I'd like to schedule a 15-minute call to discuss PMaaS.")}
                target="_blank"
                rel="noopener noreferrer"
              >
                {t.pricing.schedule}
              </Button>
           </div>
         </FadeIn>
      </div>
    </Section>
  );
};