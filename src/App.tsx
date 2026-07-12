import Header from './components/Header';
import Hero from './components/Hero';
import Jour from './components/Jour';
import Tjanster from './components/Tjanster';
import Varfor from './components/Varfor';
import Referenser from './components/Referenser';
import Offert from './components/Offert';
import Kontakt from './components/Kontakt';
import Footer from './components/Footer';
import RingKnapp from './components/RingKnapp';

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Jour />
        <Tjanster />
        <Varfor />
        <Referenser />
        <Offert />
        <Kontakt />
      </main>
      <Footer />
      <RingKnapp />
    </>
  );
}
