import { useEffect } from 'react';

export function useScrollManagementRefresh(): void {
  useEffect(() => {
    // Disable smooth scrolling
    document.documentElement.style.scrollBehavior = 'auto';

    // Save scroll position continuously
    const saveScroll = (): void => {
      sessionStorage.setItem('scrollPosition', window.scrollY.toString());
    };

    // Force scroll restoration after mount
    const scrollPos: string | null = sessionStorage.getItem('scrollPosition');
    if (scrollPos) {
      requestAnimationFrame((): void => {
        window.scrollTo(0, parseInt(scrollPos, 10));
      });
    }

    window.addEventListener('scroll', saveScroll);
    window.addEventListener('beforeunload', saveScroll);

    // Re-enable smooth scrolling after a short delay
    const timeoutId: ReturnType<typeof setTimeout> = setTimeout(() => {
      document.documentElement.style.scrollBehavior = '';
    }, 50);

    return (): void => {
      window.removeEventListener('scroll', saveScroll);
      window.removeEventListener('beforeunload', saveScroll);
      clearTimeout(timeoutId);
    };
  }, []);

  useEffect(() => {
    if ('scrollRestoration' in history) {
      history.scrollRestoration = 'manual';
    }
  }, []);
}