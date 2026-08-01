import { useEffect, useState, useCallback } from 'react';

export type Route =
  | { name: 'home' }
  | { name: 'about' }
  | { name: 'products' }
  | { name: 'contact' };

function parseHash(): Route {
  const hash = window.location.hash.replace(/^#\/?/, '').split('?')[0];
  switch (hash) {
    case 'about':
      return { name: 'about' };
    case 'products':
      return { name: 'products' };
    case 'contact':
      return { name: 'contact' };
    default:
      return { name: 'home' };
  }
}

export function useRouter() {
  const [route, setRoute] = useState<Route>(() =>
    typeof window !== 'undefined' ? parseHash() : { name: 'home' }
  );

  useEffect(() => {
    const onChange = () => {
      setRoute(parseHash());
      window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior });
    };
    window.addEventListener('hashchange', onChange);
    return () => window.removeEventListener('hashchange', onChange);
  }, []);

  const navigate = useCallback((path: string) => {
    window.location.hash = path;
  }, []);

  return { route, navigate };
}

export function href(path: string) {
  return `#${path}`;
}
