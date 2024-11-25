// Google Analytics 4 Setup
export const initGA = () => {
  const script = document.createElement('script');
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${import.meta.env.VITE_GA_ID}`;
  document.head.appendChild(script);

  window.dataLayer = window.dataLayer || [];
  function gtag(...args: any[]) {
    window.dataLayer.push(args);
  }
  gtag('js', new Date());
  gtag('config', import.meta.env.VITE_GA_ID);
};

// Page View Tracking
export const trackPageView = (url: string) => {
  if (!window.gtag) return;
  window.gtag('config', import.meta.env.VITE_GA_ID, {
    page_path: url,
  });
};