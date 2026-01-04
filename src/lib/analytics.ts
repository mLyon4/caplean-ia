// Google Analytics 4 Event Tracking

declare global {
  interface Window {
    gtag: (...args: any[]) => void;
  }
}

export const trackEvent = (
  eventName: string,
  parameters?: Record<string, string | number | boolean>
) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', eventName, parameters);
  }
};

// CTA Click Events
export const trackCTAClick = (
  ctaName: string,
  location: string,
  destination?: string
) => {
  trackEvent('cta_click', {
    cta_name: ctaName,
    cta_location: location,
    cta_destination: destination || 'unknown',
  });
};

// Navigation Events
export const trackNavigation = (pageName: string) => {
  trackEvent('page_navigation', {
    page_name: pageName,
  });
};

// Contact Method Events
export const trackContactMethod = (method: string) => {
  trackEvent('contact_method_click', {
    contact_method: method,
  });
};
