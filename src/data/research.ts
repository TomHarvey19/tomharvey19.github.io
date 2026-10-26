import type { Localized } from '../i18n';

export type ThemeId = 'crispr' | 'host-pathogen' | 'salmon' | 'microbial';

export interface ResearchTheme {
  id: ThemeId;
  title: Localized;
  /** One sentence for cards on the front page. */
  short: Localized;
  /** Longer plain-language description for the research page. */
  body: Localized[];
}

export const themes: ResearchTheme[] = [
  {
    id: 'crispr',
    title: {
      en: 'Genome-wide CRISPR screening in domesticated animals',
      no: 'CRISPR-screening i genomet til domestiserte dyr',
    },
    short: {
      en: 'Switching off every gene, one at a time, to find the ones that matter.',
      no: 'Vi slår av hvert enkelt gen, ett om gangen, for å finne dem som betyr noe.',
    },
    body: [
      {
        en: 'A CRISPR knockout screen disables thousands of genes in parallel in a population of cells and then asks which knockouts change how the cells behave – whether they survive, grow, or resist infection. The approach has transformed human and mouse biology, but has hardly been used in livestock and fish.',
        no: 'En CRISPR-knockout-screen slår ut tusenvis av gener parallelt i en populasjon av celler, og undersøker deretter hvilke knockouts som endrer cellenes egenskaper – om de overlever, vokser eller motstår infeksjon. Metoden har revolusjonert forskning på mennesker og mus, men er nesten ikke tatt i bruk for husdyr og fisk.',
      },
      {
        en: 'Our group has built genome-wide CRISPR screening platforms for pig and cattle cells, including one of the first maps of essential genes across a livestock genome. Together with methods for efficient gene delivery and editing in salmon cells, this work now underpins the PetriFish project, which brings genome-wide screening to Atlantic salmon.',
        no: 'Gruppen vår har bygget opp plattformer for genomvid CRISPR-screening i celler fra gris og storfe, blant annet en av de første oversiktene over essensielle gener i genomet til et husdyr. Sammen med metoder for effektiv genoverføring og genredigering i lakseceller danner dette arbeidet grunnlaget for prosjektet PetriFish, som tar genomvid screening i bruk på atlantisk laks.',
      },
    ],
  },
  {
    id: 'host-pathogen',
    title: {
      en: 'Host–pathogen interactions and disease resistance',
      no: 'Samspill mellom vert og patogen, og sykdomsresistens',
    },
    short: {
      en: 'Finding host genes that viruses and bacteria depend on.',
      no: 'Vi leter etter gener i verten som virus og bakterier er avhengige av.',
    },
    body: [
      {
        en: 'Infectious disease is one of the largest challenges for animal welfare and sustainability in aquaculture and livestock farming. Today, disease resistance in salmon breeding is largely measured by challenge testing – deliberately infecting fish. Cell-based screens could identify resistance genes faster and reduce the need for such tests.',
        no: 'Infeksjonssykdommer er blant de største utfordringene for dyrevelferd og bærekraft i havbruk og husdyrhold. I dag måles sykdomsresistens i lakseavl i stor grad gjennom smitteforsøk der fisk blir infisert med vilje. Cellebaserte screener kan finne resistensgener raskere og redusere behovet for slike forsøk.',
      },
      {
        en: 'Our group uses gene knockouts and transcriptomics to study how salmon cells respond to viruses such as ISAV and IPNV, how interferon signalling shapes antiviral defence, and how pig cells interact with bacterial toxins.',
        no: 'Gruppen vår bruker genknockouts og transkriptomikk for å undersøke hvordan lakseceller reagerer på virus som ILA-virus og IPN-virus, hvordan interferonsignalering former forsvaret mot virus, og hvordan griseceller samhandler med bakterietoksiner.',
      },
    ],
  },
  {
    id: 'salmon',
    title: {
      en: 'Metabolism and genome regulation in Atlantic salmon',
      no: 'Metabolisme og genregulering hos atlantisk laks',
    },
    short: {
      en: 'How diet, life stage and genetics shape fat metabolism in salmon.',
      no: 'Hvordan fôr, livsstadium og genetikk påvirker fettomsetningen hos laks.',
    },
    body: [
      {
        en: 'Salmon farming increasingly relies on plant-based feeds, which changes the supply of omega-3 fatty acids that make salmon a healthy food. My PhD and subsequent work combined transcriptomics, lipidomics and regulatory genomics to understand how salmon regulate lipid metabolism across life stages and diets.',
        no: 'Lakseoppdrett baserer seg i økende grad på plantebasert fôr, noe som endrer tilgangen på omega-3-fettsyrene som gjør laks til sunn mat. I doktorgraden og senere arbeid har jeg kombinert transkriptomikk, lipidomikk og regulatorisk genomikk for å forstå hvordan laksen regulerer fettmetabolismen gjennom ulike livsstadier og med ulikt fôr.',
      },
      {
        en: 'This included developing a liver slice culture system for studying metabolism outside the fish, mapping the regulatory landscape of the liver through smoltification, and linking genomic predictions of fillet fat to underlying changes in gene regulation.',
        no: 'Dette arbeidet omfattet å utvikle et system for dyrking av levervevssnitt for å studere metabolisme utenfor fisken, kartlegge det regulatoriske landskapet i leveren gjennom smoltifisering, og koble genomiske prediksjoner av fettinnhold i filet til underliggende endringer i genreguleringen.',
      },
    ],
  },
  {
    id: 'microbial',
    title: {
      en: 'Microbial genomics and metabolic engineering',
      no: 'Mikrobiell genomikk og metabolsk design',
    },
    short: {
      en: 'Engineering microorganisms to produce valuable fatty acids.',
      no: 'Vi designer mikroorganismer som produserer verdifulle fettsyrer.',
    },
    body: [
      {
        en: 'Before moving to academia, I spent four years in industry at DSM Nutritional Products studying how microalgae and fungi make polyunsaturated fatty acids such as omega-3 DHA and arachidonic acid, and designing strategies to increase their production.',
        no: 'Før jeg gikk over til akademia, arbeidet jeg fire år i industrien hos DSM Nutritional Products. Der studerte jeg hvordan mikroalger og sopp lager flerumettede fettsyrer som omega-3-fettsyren DHA og arakidonsyre, og utviklet strategier for å øke produksjonen.',
      },
      {
        en: 'I continue this line of work through a collaboration to sequence and annotate the unusually large genome of the dinoflagellate Crypthecodinium cohnii, an industrially important producer of DHA.',
        no: 'Jeg viderefører dette arbeidet gjennom et samarbeid om å sekvensere og annotere det uvanlig store genomet til dinoflagellaten Crypthecodinium cohnii, som er en industrielt viktig produsent av DHA.',
      },
    ],
  },
];
