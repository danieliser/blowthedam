'use client';

import { useEffect } from 'react';

interface SourcesClientWrapperProps {
  children: React.ReactNode;
}

export function SourcesClientWrapper({ children }: SourcesClientWrapperProps) {
  useEffect(() => {
    const scrollToTarget = (hash: string) => {
      if (!hash) return;

      // Small delay to ensure page is rendered
      requestAnimationFrame(() => {
        const element = document.getElementById(hash);
        if (element) {
          // Smooth scroll to element
          element.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
            inline: 'nearest'
          });

          // Wait for scroll to complete (estimated), then highlight
          setTimeout(() => {
            element.classList.add('source-highlighted');

            // Remove highlight after animation completes
            setTimeout(() => {
              element.classList.remove('source-highlighted');
            }, 2000);
          }, 600);
        }
      });
    };

    // Handle initial load with hash
    if (window.location.hash) {
      const hash = window.location.hash.slice(1);
      scrollToTarget(hash);
    }

    // Listen for hash changes
    const handleHashChange = () => {
      const hash = window.location.hash.slice(1);
      scrollToTarget(hash);
    };

    window.addEventListener('hashchange', handleHashChange);

    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);

  return <>{children}</>;
}
