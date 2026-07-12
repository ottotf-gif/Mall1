import type { Tjanst } from './typer';

/* ══════════════════════════════════════════════════════════════════
 *
 *   BRANSCHMALLAR
 *
 *   Färdiga tjänstelistor att kopiera in i kund.ts.
 *   Sparar dig från att skriva sex beskrivningar från scratch.
 *
 *   Så här använder du dem:
 *
 *     import { bygg } from './branscher';
 *     ...
 *     tjanster: {
 *       rubrik: 'Vi bygger och renoverar',
 *       ingress: '...',
 *       lista: bygg,          <-- istället för handskrivna tjänster
 *     },
 *
 *   Justera sedan enskilda rader direkt i kund.ts om kunden
 *   har något eget de vill lyfta fram.
 *
 * ══════════════════════════════════════════════════════════════════ */

export const vvs: Tjanst[] = [
  {
    ikon: 'droppe',
    titel: 'Rörinstallation',
    beskrivning:
      'Nyinstallation och omläggning av vatten- och avloppsrör. Alla material och dimensioner.',
  },
  {
    ikon: 'badkar',
    titel: 'Badrumsrenovering',
    beskrivning:
      'Komplett renovering från golv till tak. Vi sköter VVS:en och samordnar övriga hantverkare.',
  },
  {
    ikon: 'varme',
    titel: 'Värme & värmepump',
    beskrivning:
      'Installation och service av värmepumpar, golvvärme och radiatorer. Energismarta lösningar.',
  },
  {
    ikon: 'avlopp',
    titel: 'Avloppsrensning',
    beskrivning:
      'Stopp i avloppet? Vi spolar rent och kamerainspekterar ledningarna så det inte händer igen.',
    akut: true,
  },
  {
    ikon: 'skiftnyckel',
    titel: 'Vattenläckor',
    beskrivning:
      'Akut utryckning. Vi hittar läckan, stoppar den och förebygger följdskador.',
    akut: true,
  },
  {
    ikon: 'skold',
    titel: 'Service & underhåll',
    beskrivning:
      'Regelbunden service av VVS-system, pannor och beredare. Billigare än att laga i efterhand.',
  },
];

export const bygg: Tjanst[] = [
  {
    ikon: 'tegel',
    titel: 'Om- & tillbyggnad',
    beskrivning:
      'Från uterum till hela våningsplan. Vi tar helhetsansvar och sköter kontakten med kommunen.',
  },
  {
    ikon: 'ritning',
    titel: 'Totalrenovering',
    beskrivning:
      'Hela huset eller lägenheten. En kontaktperson, en tidplan, ett pris.',
  },
  {
    ikon: 'tak',
    titel: 'Tak & fasad',
    beskrivning:
      'Omläggning av tak, byte av fasad och panel. Vi tätar innan hösten kommer.',
    akut: true,
  },
  {
    ikon: 'hammare',
    titel: 'Grund & platta',
    beskrivning:
      'Gjutning, dränering och grundförstärkning. Rätt gjort från början håller i femtio år.',
  },
  {
    ikon: 'malarrulle',
    titel: 'Ytskikt & måleri',
    beskrivning:
      'Spackling, målning, tapetsering och golvläggning. Sista tio procenten som syns mest.',
  },
  {
    ikon: 'skold',
    titel: 'Fukt- & vattenskador',
    beskrivning:
      'Akut hjälp vid läckage och fuktskador. Vi torkar ut, sanerar och bygger upp igen.',
    akut: true,
  },
];

export const snickeri: Tjanst[] = [
  {
    ikon: 'sag',
    titel: 'Platsbyggd inredning',
    beskrivning:
      'Garderober, bokhyllor och förvaring byggd på plats — måttanpassad efter ditt hem.',
  },
  {
    ikon: 'hammare',
    titel: 'Kök & snickerier',
    beskrivning:
      'Nya köksluckor, bänkskivor och specialsnickerier. Massivt trä, inte spånskiva.',
  },
  {
    ikon: 'tak',
    titel: 'Altan & trädäck',
    beskrivning:
      'Altaner, trappor och räcken som klarar västkustvädret. Rätt virke och rätt infästning.',
  },
  {
    ikon: 'ritning',
    titel: 'Fönster & dörrar',
    beskrivning:
      'Byte och renovering av fönster och dörrar. Vi lagar hellre gamla än byter mot nya.',
  },
  {
    ikon: 'tegel',
    titel: 'Lister & foder',
    beskrivning:
      'Golvsocklar, foder och taklister. Detaljerna som gör att renoveringen ser färdig ut.',
  },
  {
    ikon: 'skold',
    titel: 'Reparation & underhåll',
    beskrivning:
      'Ruttet virke, sneda dörrar, knarrande golv. Småjobb som andra tackar nej till.',
  },
];
