import { useRouter } from '@/router';
import { Nav } from '@/components/Nav';
import { Footer } from '@/components/Footer';
import { HomePage } from '@/pages/HomePage';
import { AboutPage } from '@/pages/AboutPage';
import { ProductsPage } from '@/pages/ProductsPage';
import { ContactPage } from '@/pages/ContactPage';

function App() {
  const { route } = useRouter();

  return (
    <div className="flex min-h-screen flex-col bg-[var(--bg)]">
      <Nav current={route.name} />
      <main className="flex-1">
        {route.name === 'home' && <HomePage />}
        {route.name === 'about' && <AboutPage />}
        {route.name === 'products' && <ProductsPage />}
        {route.name === 'contact' && <ContactPage />}
      </main>
      <Footer />
    </div>
  );
}

export default App;
