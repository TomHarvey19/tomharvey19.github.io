import type { Localized } from '../i18n';

/** A dated CV entry. `end: null` means ongoing; omit `end` for a single year. */
export interface Entry {
  start: number;
  end?: number | null;
  title: Localized;
  org?: Localized;
  place?: Localized;
  details?: Localized[];
}

const nmbu: Localized = {
  en: 'Norwegian University of Life Sciences (NMBU)',
  no: 'Norges miljø- og biovitenskapelige universitet (NMBU)',
};
const umbc: Localized = {
  en: 'University of Maryland, Baltimore County (UMBC)',
  no: 'University of Maryland, Baltimore County (UMBC)',
};
const as: Localized = { en: 'Ås, Norway', no: 'Ås' };
const maryland = (city: string): Localized => ({ en: `${city}, MD, USA`, no: `${city}, Maryland, USA` });

export const summary: Localized[] = [
  {
    en: 'Molecular biologist with more than 16 years of combined industrial and academic research experience in functional genomics, genome-wide screening and genetic engineering.',
    no: 'Molekylærbiolog med mer enn 16 års samlet forskningserfaring fra industri og akademia innen funksjonell genomikk, genomvid screening og genteknologi.',
  },
  {
    en: 'At DSM Nutritional Products I investigated polyunsaturated fatty acid biosynthesis in oleaginous microorganisms and developed strain-engineering strategies to increase omega-3 and arachidonic acid production. At NMBU I have developed genome-wide CRISPR knockout screening platforms in pig and cattle cells – including one of the first maps of essential genes in a livestock genome – and I am now co-PI of the PetriFish project, which brings these approaches to Atlantic salmon.',
    no: 'Hos DSM Nutritional Products forsket jeg på biosyntese av flerumettede fettsyrer i oljeproduserende mikroorganismer og utviklet strategier for å øke produksjonen av omega-3 og arakidonsyre. Ved NMBU har jeg utviklet plattformer for genomvid CRISPR-knockout-screening i celler fra gris og storfe – blant annet en av de første oversiktene over essensielle gener i genomet til et husdyr – og jeg er nå medprosjektleder for PetriFish, som tar disse metodene i bruk på atlantisk laks.',
  },
  {
    en: 'A unifying theme of my work is developing molecular tools – from heterologous expression in single-celled organisms to CRISPR screens in animal cells – to understand and engineer complex biological systems.',
    no: 'En rød tråd i arbeidet mitt er utvikling av molekylære verktøy – fra heterolog genuttrykking i encellede organismer til CRISPR-screener i dyreceller – for å forstå og forbedre komplekse biologiske systemer.',
  },
];

export const positions: Entry[] = [
  {
    start: 2022,
    end: null,
    title: { en: 'Researcher', no: 'Forsker' },
    org: nmbu,
    place: as,
    details: [
      {
        en: 'Developing genome-wide screening methods in Atlantic salmon, pig and cattle',
        no: 'Utvikler metoder for genomvid screening i atlantisk laks, gris og storfe',
      },
      {
        en: 'Co-PI of PetriFish, developing genome-wide CRISPR screens in Atlantic salmon',
        no: 'Medprosjektleder for PetriFish, som utvikler genomvide CRISPR-screener i atlantisk laks',
      },
      {
        en: 'Course responsible for BIO200, BIO302 and co-course responsible for BIO322',
        no: 'Emneansvarlig for BIO200 og BIO302, og medemneansvarlig for BIO322',
      },
    ],
  },
  {
    start: 2019,
    end: 2022,
    title: { en: 'Postdoctoral researcher', no: 'Postdoktor' },
    org: nmbu,
    place: as,
    details: [
      {
        en: 'Developed CRISPR-based genome-wide screening in pig and cattle cells',
        no: 'Utviklet CRISPR-basert genomvid screening i celler fra gris og storfe',
      },
      {
        en: 'Studied interactions between pig cells and α-hemolysin toxin from enterotoxigenic E. coli',
        no: 'Studerte samspillet mellom griseceller og α-hemolysin-toksin fra enterotoksigen E. coli',
      },
      {
        en: 'Developed transfection methods for Atlantic salmon primary hepatocytes',
        no: 'Utviklet transfeksjonsmetoder for primære hepatocytter fra atlantisk laks',
      },
    ],
  },
  {
    start: 2015,
    end: 2019,
    title: { en: 'PhD candidate', no: 'Doktorgradsstipendiat' },
    org: nmbu,
    place: as,
    details: [
      {
        en: 'Studied lipid metabolism in Atlantic salmon fed vegetable oil-based diets',
        no: 'Studerte fettmetabolisme hos atlantisk laks som fikk fôr basert på vegetabilske oljer',
      },
      {
        en: 'Developed an ex vivo liver slice culture system to study hepatic metabolism',
        no: 'Utviklet et ex vivo-system med levervevssnitt for å studere metabolisme i leveren',
      },
      {
        en: 'Analysed large transcriptomic and metabolomic datasets on the effects of diet and life stage',
        no: 'Analyserte store transkriptomiske og metabolomiske datasett om effekten av fôr og livsstadium',
      },
    ],
  },
  {
    start: 2012,
    end: 2015,
    title: { en: 'Scientist, Strain Engineering', no: 'Forsker, stammeutvikling' },
    org: { en: 'DSM Nutritional Products', no: 'DSM Nutritional Products' },
    place: maryland('Columbia'),
    details: [
      {
        en: 'Studied the molecular mechanisms of polyunsaturated fatty acid (PUFA) production in heterotrophic microalgae',
        no: 'Studerte de molekylære mekanismene bak produksjon av flerumettede fettsyrer (PUFA) i heterotrofe mikroalger',
      },
      {
        en: 'Developed engineering strategies to increase arachidonic acid levels in the fungus Mortierella alpina',
        no: 'Utviklet strategier for å øke innholdet av arakidonsyre i soppen Mortierella alpina',
      },
      {
        en: 'Designed heterologous expression systems to dissect PUFA synthesis pathways',
        no: 'Designet heterologe uttrykkssystemer for å kartlegge synteseveiene for PUFA',
      },
      {
        en: 'Managed international and domestic technology transfer',
        no: 'Ledet nasjonal og internasjonal teknologioverføring',
      },
    ],
  },
  {
    start: 2011,
    end: 2012,
    title: { en: 'Research Associate', no: 'Forskningsassistent' },
    org: { en: 'Novavax', no: 'Novavax' },
    place: maryland('Rockville'),
    details: [
      {
        en: 'Improved methods for producing baculovirus and virus-like particles (VLPs) for vaccine development',
        no: 'Forbedret metoder for produksjon av bakulovirus og viruslignende partikler (VLP) til vaksineutvikling',
      },
    ],
  },
  {
    start: 2010,
    end: 2011,
    title: { en: 'Graduate Researcher', no: 'Masterstudent og forsker' },
    org: umbc,
    place: maryland('Baltimore'),
    details: [
      {
        en: 'Studied the methane metabolism pathway of the bacterium Planctomyces limnophilus',
        no: 'Studerte metanmetabolismen i bakterien Planctomyces limnophilus',
      },
    ],
  },
  {
    start: 2010,
    title: { en: 'Molecular Biology Intern', no: 'Praktikant i molekylærbiologi' },
    org: { en: 'Viracine Therapeutics', no: 'Viracine Therapeutics' },
    place: maryland('Columbia'),
  },
];

export const education: Entry[] = [
  {
    start: 2015,
    end: 2019,
    title: { en: 'PhD, Molecular Genetics', no: 'Ph.d., molekylær genetikk' },
    org: nmbu,
    place: as,
  },
  {
    start: 2010,
    end: 2011,
    title: { en: 'MSc, Applied Molecular Biology', no: 'Master, anvendt molekylærbiologi' },
    org: umbc,
    place: maryland('Baltimore'),
  },
  {
    start: 2008,
    end: 2010,
    title: { en: 'BSc, Biology', no: 'Bachelor, biologi' },
    org: umbc,
    place: maryland('Baltimore'),
  },
];

export interface Project extends Entry {
  name: string;
  role: Localized;
  funder: Localized;
  amount?: string;
  url?: string;
}

export const projects: Project[] = [
  {
    start: 2024,
    end: null,
    name: 'PetriFish',
    title: {
      en: 'CRISPR screening to reduce challenge testing in aquaculture',
      no: 'CRISPR-screening for å redusere smitteforsøk i havbruk',
    },
    role: { en: 'Co-PI', no: 'Medprosjektleder' },
    funder: {
      en: 'Norwegian Seafood Research Fund (FHF)',
      no: 'Fiskeri- og havbruksnæringens forskningsfinansiering (FHF)',
    },
    amount: 'NOK 7.2 million',
    details: [
      {
        en: 'Developing genome-wide CRISPR screening in Atlantic salmon cells to identify genes that affect disease resistance.',
        no: 'Utvikler genomvid CRISPR-screening i lakseceller for å finne gener som påvirker sykdomsresistens.',
      },
    ],
  },
  {
    start: 2025,
    end: null,
    name: 'Secrets of Giant Microalgal Genomes',
    title: {
      en: 'Sequencing and annotating the genome of Crypthecodinium cohnii',
      no: 'Sekvensering og annotering av genomet til Crypthecodinium cohnii',
    },
    role: { en: 'Co-PI', no: 'Medprosjektleder' },
    funder: {
      en: 'Peder Sather Center for Advanced Study, UC Berkeley',
      no: 'Peder Sather Center for Advanced Study, UC Berkeley',
    },
    amount: 'USD 20,000',
    details: [
      {
        en: 'Sequencing and annotating the genome of the industrially important dinoflagellate Crypthecodinium cohnii.',
        no: 'Sekvenserer og annoterer genomet til den industrielt viktige dinoflagellaten Crypthecodinium cohnii.',
      },
    ],
  },
];

export const awards: Entry[] = [
  {
    start: 2026,
    title: {
      en: 'Selected for the Career Development Programme for early-career researchers',
      no: 'Tatt opp i karriereutviklingsprogrammet for forskere tidlig i karrieren',
    },
    org: nmbu,
    details: [
      {
        en: 'A competitive two-year programme for promising researchers from across the university.',
        no: 'Et konkurranseutsatt toårig program for lovende forskere fra hele universitetet.',
      },
    ],
  },
  {
    start: 2019,
    title: { en: 'Best poster prize', no: 'Pris for beste poster' },
    org: {
      en: 'International Conference on Integrative Salmonid Biology, Edinburgh, UK',
      no: 'International Conference on Integrative Salmonid Biology, Edinburgh, Storbritannia',
    },
    details: [
      {
        en: '“Liver slice culture as a model for lipid metabolism in fish” (one of ~50 posters)',
        no: '«Liver slice culture as a model for lipid metabolism in fish» (av ca. 50 postere)',
      },
    ],
  },
  {
    start: 2017,
    title: { en: 'Best poster prize', no: 'Pris for beste poster' },
    org: {
      en: 'Euro Fed Lipid Congress, Uppsala, Sweden',
      no: 'Euro Fed Lipid Congress, Uppsala, Sverige',
    },
    details: [
      {
        en: '“Precision cut liver slice culture as a platform for studying lipid metabolism in Atlantic salmon” (one of ~200 posters)',
        no: '«Precision cut liver slice culture as a platform for studying lipid metabolism in Atlantic salmon» (av ca. 200 postere)',
      },
    ],
  },
];

export interface Course {
  code: string;
  name: Localized;
  role: Localized;
  start: number;
  end?: number | null;
  students?: number;
}

export const courses: Course[] = [
  {
    code: 'BIO200',
    name: { en: 'Molecular genetics in eukaryotes', no: 'Molekylær genetikk i eukaryoter' },
    role: { en: 'Course responsible', no: 'Emneansvarlig' },
    start: 2023,
    end: null,
    students: 75,
  },
  {
    code: 'BIO302',
    name: { en: 'Introduction course for master’s students', no: 'Introduksjonsemne for masterstudenter' },
    role: { en: 'Course responsible', no: 'Emneansvarlig' },
    start: 2026,
    end: null,
    students: 50,
  },
  {
    code: 'BIO322',
    name: { en: 'Advanced topics in genomics', no: 'Videregående emner i genomikk' },
    role: { en: 'Co-course responsible (lecturer 2022–2024)', no: 'Medemneansvarlig (foreleser 2022–2024)' },
    start: 2022,
    end: null,
    students: 50,
  },
  {
    code: 'BIO325',
    name: { en: 'CRISPR genome editing', no: 'CRISPR-genredigering' },
    role: { en: 'Lecturer', no: 'Foreleser' },
    start: 2023,
    end: null,
    students: 30,
  },
];

export interface Student {
  name: string;
  level: 'phd' | 'msc';
  /** My role: main supervisor or co-supervisor. */
  role: 'main' | 'co';
  start?: number;
  /** Year the degree was completed; null while ongoing. */
  end: number | null;
  /** Thesis title, in the language it was written in. */
  title?: string;
  /** Link to the thesis, e.g. in NMBU Brage. */
  url?: string;
}

export const roleLabel: Record<Student['role'], Localized> = {
  main: { en: 'Main supervisor', no: 'Hovedveileder' },
  co: { en: 'Co-supervisor', no: 'Medveileder' },
};

// Shown on the Teaching page; current students first, then most recently finished.
export const students: Student[] = [
  { name: 'Sigrid Hoven', level: 'phd', role: 'co', start: 2026, end: null },
  { name: 'Luana Hernández Wolters', level: 'phd', role: 'co', start: 2026, end: null },
  {
    name: 'Martin Henriksen',
    level: 'msc',
    role: 'main',
    start: 2026,
    end: null,
    title: 'Development of a Cas9 expression systems in Atlantic salmon cells',
  },
  {
    name: 'Anne Marie Pettersen',
    level: 'msc',
    role: 'co',
    start: 2026,
    end: null,
    title: 'Hidden logic behind dinoflagellate genomes',
  },
  {
    name: 'Oda Andreassen',
    level: 'msc',
    role: 'main',
    start: 2025,
    end: 2026,
    title: 'Evaluation of Genome Editing Strategies in Atlantic Salmon Skin Fibroblast Cells',
    url: 'https://nva.sikt.no/registration/01a03cdf97d4-56b87cb0-7343-48f8-9b80-8f114d160288',
  },
  {
    name: 'Krista Quorning',
    level: 'msc',
    role: 'co',
    start: 2025,
    end: 2026,
    title: 'Scalable in-house Capture-Probe Production for DNA target enrichment',
    url: 'https://nva.sikt.no/registration/019fdc026695-2b4ec644-990a-48f8-8fc2-66a605d61810',
  },
  {
    name: 'Anette Tømterud',
    level: 'msc',
    role: 'co',
    start: 2025,
    end: 2026,
    title: 'Streamlining Guide Production for Array-Based CRISPR Screening in Atlantic Salmon Cells',
    url: 'https://nva.sikt.no/registration/019fdc027b50-c4a58d7e-2e6c-4da3-acd7-6e6bf0e5748c',
  },
  {
    name: 'Regine Jåsund',
    level: 'msc',
    role: 'main',
    start: 2024,
    end: 2025,
    title:
      'Development of a FACS-based CRISPR screening approach to identify bovine host factors necessary for adhesion of Pasteurella multocida',
    url: 'https://nva.sikt.no/registration/019a0be1f173-60e84f72-6c5d-4b2b-ac82-5779979fc58e',
  },
  {
    name: 'Henriette Sofie Ross Pedersen',
    level: 'msc',
    role: 'main',
    start: 2024,
    end: 2025,
    title: 'Discovery of host factors for PCV2 infection in porcine cells using genome-wide CRISPR screening',
    url: 'https://nva.sikt.no/registration/019a0be1a799-5904e3cc-fb02-4e3e-8e19-5dde833480d7',
  },
  {
    name: 'Andrine Martinsen',
    level: 'msc',
    role: 'main',
    start: 2022,
    end: 2023,
    title:
      'Development of CRISPR screenable phenotypes for PCV2 in pig cells and detection of latent BVDV contamination in commercial FBS',
    url: 'https://nva.sikt.no/registration/01990ac915c8-62ad9676-0e28-4adb-8fb1-adb5538e7e32',
  },
  {
    name: 'Thea Marie Låstad',
    level: 'msc',
    role: 'main',
    // NVA registers 2023; the thesis itself is dated 2022.
    start: 2021,
    end: 2022,
    title:
      'Pseudotyping lentiviral vectors for transduction of Salmo salar cells using glycoprotein from infectious salmon anaemia virus',
    url: 'https://nva.sikt.no/registration/01990ac5723f-bdde4af1-85a7-4635-8449-16e47069c77d',
  },
  {
    name: 'Avon Augustin Nalpadan',
    level: 'msc',
    role: 'main',
    start: 2021,
    end: 2022,
    title: 'Developing Cas9 expressing MDBK cell lines for GeCKO screening against bovine diseases',
    url: 'https://nva.sikt.no/registration/01990ac84868-1798ebcc-de49-4e32-a224-92a5196b0f7f',
  },
  {
    name: 'Sara Stenmark Andreassen',
    level: 'msc',
    role: 'main',
    start: 2021,
    end: 2022,
    title: 'Development of lentiviral technology for use in Atlantic salmon',
    url: 'https://nva.sikt.no/registration/01990ac9e6ff-62b2e5c5-601f-4a6a-b366-d39e5f6ae531',
  },
  {
    name: 'Shawline Ema',
    level: 'msc',
    role: 'co',
    start: 2021,
    end: 2022,
    title: 'Functional interrogation of the elovl5 gene regulation in Atlantic salmon',
    url: 'https://nva.sikt.no/registration/01990ac71355-7f5ff92b-2677-4b4a-8bcf-06d19b7c68c6',
  },
  {
    name: 'Jostein Arntsen',
    level: 'msc',
    role: 'main',
    start: 2020,
    end: 2021,
    title: 'Cloning and characterization of Cas9 in IPEC-J2 cells for CRISPR screens against porcine E. coli pathogen',
    url: 'https://nva.sikt.no/registration/01990ace838c-49116424-32e0-4367-854d-998dc4c5fb6b',
  },
  {
    name: 'Ragnhild Wilberg',
    level: 'msc',
    role: 'co',
    start: 2019,
    end: 2020,
    title: 'Optimization of transfection of primary hepatocytes from Atlantic salmon for functional studies',
    url: 'https://nva.sikt.no/registration/019909ad9a7f-fb50b973-03cc-4544-b5bc-22a1a88f9e72',
  },
  {
    name: 'Mohammad Ali Noman Reza',
    level: 'phd',
    role: 'co',
    start: 2021,
    end: 2025,
    title: 'Understanding viral resistance in Atlantic salmon cells through transcriptomics and genome editing',
    url: 'https://nva.sikt.no/registration/01990acb1a4b-480ba3d0-3733-4b71-90de-d813922494ce',
  },
];

export const supervision = {
  phd: students
    .filter((s) => s.level === 'phd' && s.start !== undefined)
    .map((s) => ({ name: s.name, start: s.start!, end: s.end, role: roleLabel[s.role] })),
  msc: [
    {
      text: {
        en: '10 master’s students as main supervisor (2021–present)',
        no: '10 masterstudenter som hovedveileder (2021–nå)',
      },
    },
    {
      text: {
        en: '6 master’s students as co-supervisor (2017–present)',
        no: '6 masterstudenter som medveileder (2017–nå)',
      },
    },
  ],
};

export const service: Entry[] = [
  {
    start: 2023,
    end: 2025,
    title: { en: 'Member, Research Committee', no: 'Medlem, forskningsutvalget' },
    org: { en: 'Faculty of Biosciences, NMBU', no: 'Fakultet for biovitenskap, NMBU' },
  },
];

export const reviewerFor = [
  'Communications Biology',
  'BMC Genomics',
  'Journal of Comparative Physiology B',
  'Scientific Reports',
  'Frontiers in Marine Science',
  'Comparative Biochemistry and Physiology Part D',
  'Journal of Endocrinology',
];

export const training: Entry[] = [
  {
    start: 2024,
    title: { en: 'PhD supervision course', no: 'Kurs i veiledning av ph.d.-kandidater' },
    org: nmbu,
  },
];

export const languagesSpoken: { name: Localized; level: Localized }[] = [
  { name: { en: 'English', no: 'Engelsk' }, level: { en: 'native', no: 'morsmål' } },
  { name: { en: 'Norwegian (bokmål)', no: 'Norsk (bokmål)' }, level: { en: 'B1, intermediate (CEFR)', no: 'B1, mellomnivå (CEFR)' } },
];

export const metrics = { citations: 261, hIndex: 10 };
