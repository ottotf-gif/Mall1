import type { KundConfig } from './typer';

export const kund: KundConfig = {
  foretag: {
    namn: 'FIRMANAMN',
    slogan: 'VVS & Rör sedan ÅRTAL',
    initialer: 'F',
    orgnr: 'XXXXXX-XXXX',
    certifieringar: [
      'Godkänd för F-skatt',
      'Säker Vatten-auktoriserad',
      'Ansvarsförsäkring',
    ],
  },

  kontakt: {
    telefon: '070-XXX XX XX',
    epost: 'info@firmanamn.se',
    ort: '[ORT]',
    omrade: ['[GRANNORT]', '[GRANNORT]', '[GRANNORT]'],
    adress: '[GATUADRESS], [POSTNR] [ORT]',
    oppettider: 'Mån–Fre 07:00–17:00',
    jourtider: 'Dygnet runt, årets alla dagar',
  },

  tema: {
    accent: '#1B3A6B',
    jour: '#D01C0F',
  },

  hero: {
    etikett: 'VVS & Rör i [ORT]',
    rubrik: 'Din lokala *rörmokare* i [ORT]',
    ingress:
      'Vi utför alla typer av VVS-arbeten i [ORT] med omnejd. Fast pris innan vi börjar, garanti på allt vi gör.',
    bakgrundsbild:
      'https://images.pexels.com/photos/585419/pexels-photo-585419.jpeg?auto=compress&cs=tinysrgb&w=1920',
  },

  jour: {
    rubrik: 'Akut vattenläcka eller stopp?',
    text: 'Ring direkt. Vi svarar dygnet runt och rycker ut i hela [ORT] med omnejd.',
    loften: ['Svarar dygnet runt', 'Oftast på plats inom 60 min', 'Fast timpris'],
  },

  tjanster: {
    rubrik: 'Allt inom VVS & rör',
    ingress:
      'Från akuta utryckningar till planerade renoveringar. Ett företag för hela jobbet.',
    lista: [
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
    ],
  },

  varfor: {
    rubrik: 'Varför oss',
    lista: [
      {
        ikon: 'karta',
        titel: 'Lokalt företag',
        beskrivning:
          'Vi bor och jobbar i [ORT]. Du pratar med samma person hela vägen — ingen växel, ingen underleverantör.',
      },
      {
        ikon: 'blixt',
        titel: 'Snabbt på plats',
        beskrivning:
          'Jouruppdrag går före allt annat. Vi är oftast hemma hos dig inom en timme.',
      },
      {
        ikon: 'dokument',
        titel: 'Fast pris',
        beskrivning:
          'Du får en kostnadsfri offert med fast pris innan vi lyfter ett verktyg. Inga överraskningar på fakturan.',
      },
    ],
  },

  referenser: {
    rubrik: 'Utförda jobb',
    ingress: 'Ett urval av vad vi gjort den senaste tiden.',
    lista: [
      {
        bild: 'https://images.pexels.com/photos/6419128/pexels-photo-6419128.jpeg?auto=compress&cs=tinysrgb&w=800',
        titel: 'Badrumsrenovering',
        ort: '[STADSDEL]',
        detalj: 'Villa · 3 veckor',
      },
      {
        bild: 'https://images.pexels.com/photos/6444268/pexels-photo-6444268.jpeg?auto=compress&cs=tinysrgb&w=800',
        titel: 'Stambyte',
        ort: '[STADSDEL]',
        detalj: 'Bostadsrätt · 12 lägenheter',
      },
      {
        bild: 'https://images.pexels.com/photos/5691622/pexels-photo-5691622.jpeg?auto=compress&cs=tinysrgb&w=800',
        titel: 'Värmepumpsinstallation',
        ort: '[STADSDEL]',
        detalj: 'Luft/vatten · 1 dag',
      },
      {
        bild: 'https://images.pexels.com/photos/6444107/pexels-photo-6444107.jpeg?auto=compress&cs=tinysrgb&w=800',
        titel: 'Nytt badrum',
        ort: '[STADSDEL]',
        detalj: 'Radhus · 2 veckor',
      },
      {
        bild: 'https://images.pexels.com/photos/5691617/pexels-photo-5691617.jpeg?auto=compress&cs=tinysrgb&w=800',
        titel: 'Golvvärme',
        ort: '[STADSDEL]',
        detalj: 'Nybygge · 180 kvm',
      },
      {
        bild: 'https://images.pexels.com/photos/6419022/pexels-photo-6419022.jpeg?auto=compress&cs=tinysrgb&w=800',
        titel: 'Köksstam',
        ort: '[STADSDEL]',
        detalj: 'Villa · 4 dagar',
      },
    ],
  },

  offert: {
    rubrik: 'Begär offert',
    ingress:
      'Beskriv kort vad du behöver hjälp med, så hör vi av oss inom ett dygn. Har du bråttom — ring istället.',
  },
};
