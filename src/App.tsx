import Header from './components/Header';
import Hero from './components/Hero';
import Emergency from './components/Emergency';
import Services from './components/Services';
import References from './components/References';
import WhyUs from './components/WhyUs';
import QuoteForm from './components/QuoteForm';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-brand-dark">
      <Header />
      <Hero />
      <Emergency />
      <Services />
      <WhyUs />
      <References />
      <QuoteForm />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
