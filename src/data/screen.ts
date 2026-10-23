import type { Localized } from '../i18n';
import raw from './screen.csv?raw';

/**
 * Front-page figure: gene-level results from a pooled CRISPR screen.
 *
 * Replace screen.csv with real results. Columns:
 *   gene   – gene name
 *   score  – gene-level effect, e.g. log2 fold change or MAGeCK beta (negative = depleted)
 *   fdr    – optional; genes with fdr <= hitFdr are highlighted
 */
export const screen = {
  /** Set to false once screen.csv holds real data. Shows an "illustrative data" note while true. */
  illustrative: true,
  title: {
    en: 'Genome-wide CRISPR knockout screen',
    no: 'Genomvid CRISPR-knockout-screen',
  } satisfies Localized,
  caption: {
    en: 'Each dot is a gene, ranked by how its guide RNAs change in abundance across the pooled screen. Genes whose loss kills the cells drop out on the left.',
    no: 'Hvert punkt er et gen, rangert etter hvor mye guide-RNA-ene endrer seg i den samlede screenen. Gener som cellene ikke kan klare seg uten, faller ut til venstre.',
  } satisfies Localized,
  scoreLabel: { en: 'log₂ fold change', no: 'log₂ endring' } satisfies Localized,
  hitFdr: 0.05,
  /** Genes to name on the plot (only shown when illustrative is false). */
  labels: [] as string[],
};

export interface ScreenGene {
  gene: string;
  score: number;
  fdr?: number;
}

export const screenGenes: ScreenGene[] = raw
  .trim()
  .split(/\r?\n/)
  .slice(1)
  .map((line) => {
    const [gene, score, fdr] = line.split(',');
    return { gene, score: Number(score), fdr: fdr === undefined || fdr === '' ? undefined : Number(fdr) };
  })
  .filter((g) => Number.isFinite(g.score));
