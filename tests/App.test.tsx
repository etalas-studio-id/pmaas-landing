import React from 'react';
import { render, screen, fireEvent, within, act } from '@testing-library/react';
import App from '../App';
import { Button } from '../components/Button';
import { Faq } from '../sections/Faq';
import { translations } from '../utils/translations';
import { ThemeProvider } from '../contexts/ThemeContext';
import { LanguageProvider } from '../contexts/LanguageContext';

// Declare Jest globals
declare const jest: any;
declare const describe: any;
declare const test: any;
declare const expect: any;
declare const beforeEach: any;

// Mock IntersectionObserver
const mockIntersectionObserver = jest.fn();
mockIntersectionObserver.mockReturnValue({
  observe: () => null,
  unobserve: () => null,
  disconnect: () => null
});
window.IntersectionObserver = mockIntersectionObserver;

// Mock requestAnimationFrame for components using it
window.requestAnimationFrame = (callback: FrameRequestCallback) => {
  return setTimeout(callback, 0);
};
window.cancelAnimationFrame = (id: number) => {
  clearTimeout(id);
};

// Wrapper for context providers
const renderWithProviders = (ui: React.ReactElement) => {
  return render(
    <ThemeProvider>
      <LanguageProvider>
        {ui}
      </LanguageProvider>
    </ThemeProvider>
  );
};

describe('Deep Test Suite', () => {

  describe('Accessibility & Semantics', () => {
    test('All buttons and links should have accessible names', () => {
      // We render the full app to catch buttons in all sections
      // Note: In a real test env with lazy loading, we'd need to await Suspense
      // Here we test reusable components in isolation or mocked data
      const { container } = renderWithProviders(<App />);
      
      const buttons = container.querySelectorAll('button');
      const links = container.querySelectorAll('a');

      buttons.forEach(btn => {
        const text = btn.textContent;
        const label = btn.getAttribute('aria-label');
        // A button must have either text content OR an aria-label
        const hasAccessibleName = (text && text.trim().length > 0) || (label && label.trim().length > 0);
        
        if (!hasAccessibleName) {
           console.error('Inaccessible Button Found:', btn.outerHTML);
        }
        expect(hasAccessibleName).toBe(true);
      });

      links.forEach(link => {
        const text = link.textContent;
        const label = link.getAttribute('aria-label');
        const href = link.getAttribute('href');
        
        const hasAccessibleName = (text && text.trim().length > 0) || (label && label.trim().length > 0);
        
        if (!hasAccessibleName) {
            console.error('Inaccessible Link Found:', link.outerHTML);
        }

        expect(hasAccessibleName).toBe(true);
        expect(href).toBeDefined();
        expect(href).not.toBe("");
      });
    });
  });

  describe('Functional Logic: FAQ', () => {
    test('Accordion toggles content visibility', () => {
      renderWithProviders(<Faq />);
      
      // Find the first question
      const question = translations.en.faq.items[0].q;
      const button = screen.getByText(question).closest('button');
      
      expect(button).toHaveAttribute('aria-expanded', 'false');
      
      // Click to expand
      fireEvent.click(button!);
      expect(button).toHaveAttribute('aria-expanded', 'true');
      
      // Click to collapse
      fireEvent.click(button!);
      expect(button).toHaveAttribute('aria-expanded', 'false');
    });
  });

  describe('Component Logic: Button', () => {
    test('Renders as anchor when href is provided', () => {
      render(<Button href="#pricing">Get Started</Button>);
      const link = screen.getByRole('link', { name: /Get Started/i });
      expect(link).toHaveAttribute('href', '#pricing');
    });

    test('Renders as button when no href', () => {
      const handleClick = jest.fn();
      render(<Button onClick={handleClick}>Action</Button>);
      const btn = screen.getByRole('button', { name: /Action/i });
      fireEvent.click(btn);
      expect(handleClick).toHaveBeenCalledTimes(1);
    });
  });

  describe('Translation Integrity', () => {
    test('All translation keys exist in both languages', () => {
      const traverse = (obj1: any, obj2: any, path = '') => {
        for (const key in obj1) {
          const newPath = path ? `${path}.${key}` : key;
          expect(obj2).toHaveProperty(key);
          
          if (typeof obj1[key] === 'object' && obj1[key] !== null) {
            traverse(obj1[key], obj2[key], newPath);
          }
        }
      };
      
      traverse(translations.en, translations.id);
      // Reverse check to ensure ID doesn't have orphans
      traverse(translations.id, translations.en);
    });
  });
});