export type IkonNamn =
  | 'droppe'
  | 'badkar'
  | 'varme'
  | 'avlopp'
  | 'skiftnyckel'
  | 'skold'
  | 'hammare'
  | 'sag'
  | 'tegel'
  | 'ritning'
  | 'malarrulle'
  | 'tak'
  | 'karta'
  | 'blixt'
  | 'dokument'
  | 'stjarna'
  | 'klocka';

export type Tjanst = {
  ikon: IkonNamn;
  titel: string;
  beskrivning: string;
  akut?: boolean;
};

export type Referens = {
  bild: string;
  titel: string;
  ort: string;
  detalj?: string;
};

export type Fordel = {
  ikon: IkonNamn;
  titel: string;
  beskrivning: string;
};

export type KundConfig = {
  foretag: {
    namn: string;
    slogan: string;
    initialer: string;
    orgnr: string;
    certifieringar: string[];
  };

  kontakt: {
    telefon: string;
    epost: string;
    ort: string;
    omrade: string[];
    adress?: string;
    oppettider: string;
    jourtider: string;
  };

  tema: {
    accent: string;
    jour: string;
  };

  hero: {
    etikett: string;
    rubrik: string;
    ingress: string;
    bakgrundsbild: string;
  };

  jour: {
    rubrik: string;
    text: string;
    loften: string[];
  };

  tjanster: {
    rubrik: string;
    ingress: string;
    lista: Tjanst[];
  };

  varfor: {
    rubrik: string;
    lista: Fordel[];
  };

  referenser: {
    rubrik: string;
    ingress: string;
    lista: Referens[];
  };

  offert: {
    rubrik: string;
    ingress: string;
  };
};
