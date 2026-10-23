import type { Localized } from '../i18n';
import raw from './screen.csv?raw';

/**
 * Front-page figure: gene-level results from a pooled CRISPR screen.
 *
 * Replace screen.csv with real results. Columns:
 *   gene   – gene name
 *   score  – gene-level effect, e.g. MAGeCK MLE beta or log2 fold change (negative = depleted)
 *   fdr    – optional; genes with fdr <= hitFdr are highlighted
 */
export const screen = {
  /** Set to true to show an "illustrative data" note (for placeholder data). */
  illustrative: false,
  title: {
    en: 'Genome-wide CRISPR knockout screen in pig cells',
    no: 'Genomvid CRISPR-knockout-screen i griseceller',
  } satisfies Localized,
  /** {genes} and {depleted} are filled in from the data. */
  caption: {
    en: 'Each dot is one of {genes} genes, ranked by how quickly its guide RNAs dropped out of a pooled population of PK-15 cells over time. The {depleted} genes highlighted on the left (FDR < 5%) are needed for the cells to grow.',
    no: 'Hvert punkt er ett av {genes} gener, rangert etter hvor raskt guide-RNA-ene forsvant fra en samlet populasjon av PK-15-celler over tid. De {depleted} genene som er uthevet til venstre (FDR < 5 %), trengs for at cellene skal vokse.',
  } satisfies Localized,
  scoreLabel: { en: 'β, change over time', no: 'β, endring over tid' } satisfies Localized,
  hitFdr: 0.05,
  /** Genes to name on the plot. */
  labels: ['BUB3', 'RACK1', 'RNGTT', 'RUVBL2', 'EEF2', 'CCT8', 'EXOSC2'] as string[],
  /** Where the data comes from; linked under the figure. */
  source: { label: 'Harvey et al. 2025, bioRxiv', doi: '10.1101/2025.02.28.640817' },
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
