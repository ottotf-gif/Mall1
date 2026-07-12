import {
  Droplets,
  Bath,
  Flame,
  CircleDot,
  Wrench,
  ShieldCheck,
  Hammer,
  Ruler,
  Blocks,
  PencilRuler,
  PaintRoller,
  Home,
  MapPin,
  Zap,
  FileCheck,
  Star,
  Clock,
  type LucideIcon,
} from 'lucide-react';
import type { IkonNamn } from '../config/typer';

/**
 * Kopplar ikonnamnen i configen till faktiska ikoner.
 *
 * Vill du ha en ny ikon:
 *   1. Leta upp den på lucide.dev
 *   2. Importera den här ovanför
 *   3. Lägg till raden nedan
 *   4. Lägg till namnet i IkonNamn i config/typer.ts
 */
export const ikoner: Record<IkonNamn, LucideIcon> = {
  droppe: Droplets,
  badkar: Bath,
  varme: Flame,
  avlopp: CircleDot,
  skiftnyckel: Wrench,
  skold: ShieldCheck,
  hammare: Hammer,
  sag: Ruler,
  tegel: Blocks,
  ritning: PencilRuler,
  malarrulle: PaintRoller,
  tak: Home,
  karta: MapPin,
  blixt: Zap,
  dokument: FileCheck,
  stjarna: Star,
  klocka: Clock,
};
