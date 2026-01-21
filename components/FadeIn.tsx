import React, { useEffect, useRef, useState } from 'react';

interface FadeInProps {
  children: React.ReactNode;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right' | 'none';
  scale?: boolean;
  className?: string;
  fullWidth?: boolean;
}

export const FadeIn: React.FC<FadeInProps> = ({ 
  children, 
  delay = 0, 
  direction = 'up',
  scale = false,
  className = '',
  fullWidth = false
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const domRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (domRef.current) observer.unobserve(domRef.current);
        }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

    const currentElement = domRef.current;
    if (currentElement) observer.observe(currentElement);

    return () => {
      if (currentElement) observer.unobserve(currentElement);
    };
  }, []);

  const getTransform = () => {
    let transform = '';
    switch (direction) {
      case 'up': transform = 'translate-y-8'; break;
      case 'down': transform = '-translate-y-8'; break;
      case 'left': transform = 'translate-x-8'; break;
      case 'right': transform = '-translate-x-8'; break;
      default: transform = '';
    }
    
    if (scale) {
      transform += ' scale-95';
    }
    
    return transform;
  };

  return (
    <div
      ref={domRef}
      className={`transition-all duration-700 cubic-bezier(0.16, 1, 0.3, 1) ${fullWidth ? 'w-full' : ''} ${className} ${
        isVisible ? 'opacity-100 transform-none' : `opacity-0 ${getTransform()}`
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};