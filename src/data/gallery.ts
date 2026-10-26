import type { Localized } from '../i18n';

/**
 * Slides in the front-page gallery, shown in this order.
 *
 * To add a photo: put web-sized copies in public/images/ named
 * `<name>-800.webp` and `<name>-1600.webp`, then add an `image` entry below.
 */
export type Slide =
  | { type: 'screen' }
  | {
      type: 'image';
      /** Path in public/ without the width suffix, e.g. 'images/ccohnii-sem'. */
      src: string;
      /** Pixel size of the 1600-wide image, so the page can reserve space for it. */
      width: number;
      height: number;
      /** Short heading above the image. May contain <i> for species names. */
      title: Localized;
      /** Describes the image for screen readers. */
      alt: Localized;
      /** Shown under the image. May contain <i> for species names. */
      caption: Localized;
      /** Who took the image; shown after the caption. */
      credit?: string;
    };

export const gallery: Slide[] = [
  { type: 'screen' },
  {
    type: 'image',
    src: 'images/ccohnii-sem',
    width: 1600,
    height: 1156,
    title: {
      en: '<i>Crypthecodinium cohnii</i>, scanning electron micrograph',
      no: '<i>Crypthecodinium cohnii</i>, skanningelektronmikroskopi',
    },
    alt: {
      en: 'Scanning electron micrograph of a single Crypthecodinium cohnii cell with a long, coiled flagellum, on a grey background.',
      no: 'Skanningelektronmikroskopibilde av én Crypthecodinium cohnii-celle med en lang, kveilet flagell, på grå bakgrunn.',
    },
    caption: {
      en: 'The dinoflagellate <i>Crypthecodinium cohnii</i>, an industrial producer of the omega-3 fatty acid DHA, with its long flagellum. We are sequencing its unusually large genome. Scale bar: 2 µm.',
      no: 'Dinoflagellaten <i>Crypthecodinium cohnii</i>, en industriell produsent av omega-3-fettsyren DHA, med den lange flagellen. Vi sekvenserer det uvanlig store genomet. Målestokk: 2 µm.',
    },
    credit: 'Thomas N. Harvey',
  },
];
