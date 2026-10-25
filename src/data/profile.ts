import type { Localized } from '../i18n';

export const profile = {
  name: 'Thomas N. Harvey',
  fullName: 'Thomas Nelson Harvey',
  title: { en: 'Researcher', no: 'Forsker' } satisfies Localized,
  field: { en: 'Functional genomics', no: 'Funksjonell genomikk' } satisfies Localized,
  unit: {
    en: 'Centre for Integrative Genetics (CIGENE), Faculty of Biosciences',
    no: 'Senter for integrativ genetikk (CIGENE), Fakultet for biovitenskap',
  } satisfies Localized,
  institution: {
    en: 'Norwegian University of Life Sciences (NMBU)',
    no: 'Norges miljø- og biovitenskapelige universitet (NMBU)',
  } satisfies Localized,
  location: { en: 'Ås, Norway', no: 'Ås' } satisfies Localized,
  email: 'thomas.n.harvey@nmbu.no',
  links: {
    orcid: 'https://orcid.org/0000-0003-4882-2188',
    scholar: 'https://scholar.google.com/citations?user=2oEOt9sAAAAJ&hl=en',
    nmbu: {
      en: 'https://www.nmbu.no/en/about/employees/thomas-nelson-harvey',
      no: 'https://www.nmbu.no/om/ansatte/thomas-nelson-harvey',
    } satisfies Localized,
    cigene: 'https://cigene.no',
  },
  /** One-paragraph introduction used on the front page. */
  intro: {
    en: 'I study how genetic variation gives rise to observable traits, and how that knowledge can support sustainability, animal welfare and disease resistance. I develop high-throughput tools, including genome-wide pooled CRISPR screens and multi-omics approaches, to link genotype to phenotype in domesticated animals such as Atlantic salmon, pigs and cattle. I also work with microorganisms, from engineering microalgae and fungi to produce omega-3 and other valuable fatty acids, to sequencing the unusually large genome of the dinoflagellate Crypthecodinium cohnii.',
    no: 'Jeg forsker på hvordan genetisk variasjon gir opphav til egenskaper vi kan observere, og hvordan den kunnskapen kan bidra til bærekraft, bedre dyrevelferd og økt motstandskraft mot sykdom. Jeg utvikler metoder med høy gjennomstrømning, blant annet genomvide, samlede (pooled) CRISPR-screener og multiomikk, for å koble genotype til fenotype hos domestiserte dyr som atlantisk laks, gris og storfe. Jeg arbeider også med mikroorganismer, fra å utvikle mikroalger og sopp som produserer omega-3 og andre verdifulle fettsyrer, til å sekvensere det uvanlig store genomet til dinoflagellaten Crypthecodinium cohnii.',
  } satisfies Localized,
};
