export const languages = { en: 'English', no: 'Norsk' } as const;
export type Lang = keyof typeof languages;
export const defaultLang: Lang = 'en';

/** Value for <html lang> and hreflang. Norwegian content is written in bokmål. */
export const htmlLang: Record<Lang, string> = { en: 'en', no: 'nb' };

/** Text that exists in both languages. */
export type Localized = Record<Lang, string>;

export function t(value: Localized | string, lang: Lang): string {
  return typeof value === 'string' ? value : value[lang];
}

/** Each page and its URL slug per language. Add new pages here. */
export const routes = {
  home: { en: '', no: '' },
  research: { en: 'research', no: 'forskning' },
  publications: { en: 'publications', no: 'publikasjoner' },
  teaching: { en: 'teaching', no: 'undervisning' },
  cv: { en: 'cv', no: 'cv' },
} as const satisfies Record<string, Localized>;
export type RouteKey = keyof typeof routes;

export const navOrder: RouteKey[] = ['research', 'publications', 'teaching', 'cv'];

const base = import.meta.env.BASE_URL.replace(/\/$/, '');

/** Prefix a site-relative path with the deploy base, if Astro's `base` is set. */
export function withBase(path: string): string {
  return `${base}/${path.replace(/^\//, '')}`;
}

export function pagePath(key: RouteKey, lang: Lang, hash = ''): string {
  const slug = routes[key][lang];
  const prefix = lang === defaultLang ? '' : `${lang}/`;
  return withBase(`${prefix}${slug}${slug ? '/' : ''}`) + hash;
}

export const ui = {
  en: {
    'site.description':
      'Thomas N. Harvey – researcher in functional genomics at the Norwegian University of Life Sciences (NMBU). CRISPR screening, genome editing and multi-omics in domesticated animals.',
    'nav.home': 'Home',
    'nav.research': 'Research',
    'nav.publications': 'Publications',
    'nav.teaching': 'Teaching',
    'nav.cv': 'CV',
    'nav.menu': 'Menu',
    'skip': 'Skip to content',
    'theme.toggle': 'Switch between light and dark theme',
    'lang.other': 'Norsk',
    'lang.otherLabel': 'Les denne siden på norsk',
    'footer.updated': 'Built with care in Ås, Norway.',
    'home.eyebrow': 'Functional genomics · CRISPR screening · Genome editing',
    'home.contact': 'Get in touch',
    'home.viewCv': 'View CV',
    'home.focus': 'Research focus',
    'home.allResearch': 'More about my research',
    'home.selected': 'Selected publications',
    'home.allPubs': 'All publications',
    'home.projects': 'Current projects',
    'home.students': 'Interested in a master’s or PhD project?',
    'home.studentsText':
      'I supervise master’s and PhD students in functional genomics, CRISPR and genome editing. Get in touch if you would like to talk about a project.',
    'pubs.intro':
      'Peer-reviewed articles and preprints. My name is shown in bold; * marks shared first authorship.',
    'pubs.preprints': 'Preprints',
    'pubs.articles': 'Journal articles',
    'pubs.profiles': 'Also on',
    'pubs.and': 'and',
    'pubs.others': 'others',
    'pubs.coFirst': 'Shared first authorship',
    'research.related': 'Related publications',
    'research.projects': 'Projects',
    'cv.download': 'Print / save as PDF',
    'cv.summary': 'Profile',
    'cv.positions': 'Positions',
    'cv.education': 'Education',
    'cv.projects': 'Research projects and funding',
    'cv.awards': 'Awards and recognition',
    'cv.teaching': 'Teaching',
    'cv.supervision': 'Supervision',
    'cv.service': 'Service and academic duties',
    'cv.reviewing': 'Peer review',
    'cv.reviewer': 'Reviewer for',
    'cv.training': 'Professional development',
    'cv.languages': 'Languages',
    'cv.publications': 'Publications',
    'cv.metrics': 'Google Scholar (July 2026): {citations} citations, h-index {h}.',
    'cv.fullList': 'See the full publication list',
    'cv.present': 'present',
    'teaching.courses': 'Courses',
    'teaching.supervision': 'Student supervision',
    'teaching.prospective': 'Prospective students',
    'teaching.prospectiveText':
      'I supervise master’s and PhD students working with functional genomics, CRISPR screening, genome editing and cell-based models of domesticated animals. Projects usually combine wet-lab work with bioinformatic analysis of sequencing data. If this sounds interesting, send me an email with a short description of your background and interests and we can discuss potential opportunities.',
    'teaching.students': 'students per semester',
    'teaching.phd': 'PhD students',
    'teaching.msc': 'Master’s students',
    'teaching.statusCurrent': 'Current',
    'teaching.statusDone': 'Completed',
    'teaching.ongoing': 'ongoing',
    'teaching.totals': 'In total',
    'notfound.title': 'Page not found',
    'notfound.text': 'The page you were looking for does not exist or has moved.',
    'notfound.home': 'Go to the front page',
  },
  no: {
    'site.description':
      'Thomas N. Harvey – forsker i funksjonell genomikk ved Norges miljø- og biovitenskapelige universitet (NMBU). CRISPR-screening, genredigering og multiomikk i domestiserte dyr.',
    'nav.home': 'Hjem',
    'nav.research': 'Forskning',
    'nav.publications': 'Publikasjoner',
    'nav.teaching': 'Undervisning',
    'nav.cv': 'CV',
    'nav.menu': 'Meny',
    'skip': 'Hopp til innhold',
    'theme.toggle': 'Bytt mellom lyst og mørkt tema',
    'lang.other': 'English',
    'lang.otherLabel': 'Read this page in English',
    'footer.updated': 'Laget med omhu i Ås.',
    'home.eyebrow': 'Funksjonell genomikk · CRISPR-screening · Genredigering',
    'home.contact': 'Ta kontakt',
    'home.viewCv': 'Se CV',
    'home.focus': 'Forskningsområder',
    'home.allResearch': 'Mer om forskningen min',
    'home.selected': 'Utvalgte publikasjoner',
    'home.allPubs': 'Alle publikasjoner',
    'home.projects': 'Pågående prosjekter',
    'home.students': 'Interessert i en master- eller doktorgradsoppgave?',
    'home.studentsText':
      'Jeg veileder master- og doktorgradsstudenter innen funksjonell genomikk, CRISPR og genredigering. Ta gjerne kontakt hvis du vil snakke om et prosjekt.',
    'pubs.intro':
      'Fagfellevurderte artikler og preprints. Mitt navn er uthevet; * markerer delt førsteforfatterskap.',
    'pubs.preprints': 'Preprints',
    'pubs.articles': 'Tidsskriftartikler',
    'pubs.profiles': 'Finnes også på',
    'pubs.and': 'og',
    'pubs.others': 'andre',
    'pubs.coFirst': 'Delt førsteforfatterskap',
    'research.related': 'Relaterte publikasjoner',
    'research.projects': 'Prosjekter',
    'cv.download': 'Skriv ut / lagre som PDF',
    'cv.summary': 'Profil',
    'cv.positions': 'Stillinger',
    'cv.education': 'Utdanning',
    'cv.projects': 'Forskningsprosjekter og finansiering',
    'cv.awards': 'Priser og utmerkelser',
    'cv.teaching': 'Undervisning',
    'cv.supervision': 'Veiledning',
    'cv.service': 'Verv og faglige oppgaver',
    'cv.reviewing': 'Fagfellevurdering',
    'cv.reviewer': 'Fagfelle for',
    'cv.training': 'Kompetanseutvikling',
    'cv.languages': 'Språk',
    'cv.publications': 'Publikasjoner',
    'cv.metrics': 'Google Scholar (juli 2026): {citations} siteringer, h-indeks {h}.',
    'cv.fullList': 'Se hele publikasjonslisten',
    'cv.present': 'nå',
    'teaching.courses': 'Emner',
    'teaching.supervision': 'Veiledning av studenter',
    'teaching.prospective': 'For nye studenter',
    'teaching.prospectiveText':
      'Jeg veileder master- og doktorgradsstudenter som arbeider med funksjonell genomikk, CRISPR-screening, genredigering og cellemodeller for domestiserte dyr. Prosjektene kombinerer vanligvis laboratoriearbeid med bioinformatisk analyse av sekvensdata. Høres dette spennende ut, send meg en e-post med en kort beskrivelse av bakgrunnen og interessene dine, så kan vi snakke om mulige prosjekter.',
    'teaching.students': 'studenter per semester',
    'teaching.phd': 'Ph.d.-kandidater',
    'teaching.msc': 'Masterstudenter',
    'teaching.statusCurrent': 'Pågående',
    'teaching.statusDone': 'Fullført',
    'teaching.ongoing': 'pågående',
    'teaching.totals': 'Totalt',
    'notfound.title': 'Fant ikke siden',
    'notfound.text': 'Siden du lette etter finnes ikke, eller den er flyttet.',
    'notfound.home': 'Gå til forsiden',
  },
} as const satisfies Record<Lang, Record<string, string>>;

export type UiKey = keyof (typeof ui)['en'];

export function useTranslations(lang: Lang) {
  return (key: UiKey, vars: Record<string, string | number> = {}) =>
    ui[lang][key].replace(/\{(\w+)\}/g, (_, name) => String(vars[name] ?? ''));
}
