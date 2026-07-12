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

/**
 * Sidans ordning är vald för hur folk faktiskt landar här:
 *
 *   Hero      — vem är ni, var finns ni
 *   Jour      — direkt. Den akuta besökaren ska inte behöva scrolla.
 *   Tjänster  — vad kan ni
 *   Varför    — kan jag lita på er
 *   Referenser— bevis
 *   Offert    — den som inte har bråttom
 *   Kontakt   — allt samlat
 */
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
