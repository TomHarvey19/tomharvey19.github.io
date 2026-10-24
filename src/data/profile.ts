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
  },
  /** One-paragraph introduction used on the front page. */
  intro: {
    en: 'I study how genetic variation gives rise to observable traits – and how that knowledge can make food production more sustainable, improve animal welfare and strengthen disease resistance. I develop high-throughput tools, including genome-wide pooled CRISPR screens and multi-omics approaches, to link genotype to phenotype in domesticated animals such as Atlantic salmon, pigs and cattle.',
    no: 'Jeg forsker på hvordan genetisk variasjon gir opphav til egenskaper vi kan observere – og hvordan den kunnskapen kan gjøre matproduksjonen mer bærekraftig, bedre dyrevelferden og styrke motstandskraften mot sykdom. Jeg utvikler metoder med høy gjennomstrømning, blant annet genomvide, samlede (pooled) CRISPR-screener og multiomikk, for å koble genotype til fenotype hos domestiserte dyr som atlantisk laks, gris og storfe.',
  } satisfies Localized,
};
