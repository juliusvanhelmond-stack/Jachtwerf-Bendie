// All copy and facts for the demo live here. Every fact carries the source it was checked against
// (see DEMO_NOTES.md). Nothing in this file is invented: where a fact is missing, the page says so
// or leaves the slot out.

export const site = {
  name: "Jachtwerf Bendie",
  legalName: "Jachtwerf Bendie B.V.",
  url: "https://www.bendie.nl",
  email: "info@bendie.nl",
  street: "Havenlaan 18",
  postalCode: "5433 NL",
  city: "Katwijk",
  region: "Noord-Brabant",
  cityLine: "5433 NL Katwijk (N-Br.)",
  since: 1977,
  mapsUrl: "https://www.google.com/maps/dir/?api=1&destination=Jachtwerf+Bendie,+Havenlaan+18,+5433+NL+Katwijk",
  description:
    "Jachtwerf Bendie in Katwijk aan de Maas, bij Cuijk: sinds 1977 een werf voor het bouwen, afbouwen, onderhouden en repareren van motorjachten, met winterstalling binnen en buiten.",
};

export const nav = [
  { href: "/de-werf/", label: "De werf" },
  { href: "/diensten/", label: "Diensten" },
  { href: "/jachten/", label: "Jachten" },
  { href: "/winterstalling/", label: "Winterstalling" },
];

export type Img = {
  src: string; // path without extension; files are /media/<name>.webp and /media/<name>-<w>.webp
  alt: string;
  w: number;
  h: number;
  widths: number[]; // available widths, largest first (largest has no suffix)
  credit?: string;
  mood?: boolean; // a found picture of the world around the werf, never presented as Bendie's own
};

// widths produced by scripts/process_media.py
const WIDTHS: Record<string, number[]> = {
  "hero-impressive-2200": [2400, 1400, 800],
  "maas-cuijk-kade": [1920, 1200, 700],
  "maas-cuijk-oever": [1920, 1200, 700],
  "i2200-maas": [1400, 800],
  "i2200-kombuis": [1400, 800],
  "i2200-kikkers": [1400, 800],
  "archief-helling": [1400, 800],
  "archief-laswerk": [1400, 800],
  "i2200-hut": [1200, 700],
  "i2200-scheepsbel": [1000, 600],
  "i2200-romp": [1000, 600],
  "i2200-salon": [1000, 600],
  "t53-plan": [900],
};

const m = (name: string, alt: string, w: number, h: number, extra: Partial<Img> = {}): Img => ({
  src: `/media/${name}`,
  alt,
  w,
  h,
  widths: WIDTHS[name] ?? [900, 500],
  ...extra,
});

export const media = {
  hero: m("hero-impressive-2200", "De Bendie Impressive 2200 ‘Temporalis’ vaart op de Maas", 2400, 1747),
  i2200Maas: m("i2200-maas", "De Impressive 2200 op de Maas, van voren gezien", 1400, 1050),
  i2200Kombuis: m("i2200-kombuis", "Kombuis van de Impressive 2200 in kersenhout met graniet werkblad", 1400, 1050),
  i2200Kikkers: m("i2200-kikkers", "Gepolijste RVS-kikkers en bolders op het dek van de Impressive 2200", 1400, 1050),
  i2200Bel: m("i2200-scheepsbel", "Verchroomde scheepsbel boven het teakdek van de Impressive 2200", 1000, 861),
  i2200Romp: m("i2200-romp", "Witgelakte opbouw en rechtopstaande ramen van de Impressive 2200", 1000, 792),
  i2200Hut: m("i2200-hut", "Eigenaarshut met tweepersoonsbed en kersenhouten betimmering", 1200, 900),
  i2200Salon: m("i2200-salon", "Salon van de Impressive 2200 met kersenhout en mat RVS", 1000, 788),
  i2200Trap: m("i2200-trap", "Kast en trapdetail in kersenhout aan boord van de Impressive 2200", 900, 741),
  i2200Bad: m("i2200-badkamer", "Toiletruimte met kersenhouten kast en zwart werkblad", 900, 765),
  i1800Varend: m("i1800-varend", "De Bendie Impressive 1800 op het water, met de Nederlandse vlag", 900, 676),
  i1800Zijkant: m("i1800-zijkant", "Zijaanzicht van de Impressive 1800 op de rivier", 900, 674),
  i1800Boeg: m("i1800-boeg", "De Impressive 1800 vaart voorbij met haar waaiersteven", 900, 676),
  i1800Salon: m("i1800-salon", "Salon annex stuurhut van de Impressive 1800 in notenhout", 900, 676),
  i1800Stuur: m("i1800-stuurstand", "Stuurstand van de Impressive 1800 met houten stuurwiel", 900, 676),
  i1800Kombuis: m("i1800-kombuis", "Kombuis van de Impressive 1800 met rechtopstaande ramen", 900, 676),
  i1800Dinette: m("i1800-dinette", "Dinette met notenhouten tafel aan boord van de Impressive 1800", 900, 676),
  i1800Hut: m("i1800-hut", "Eigenaarshut van de Impressive 1800", 900, 676),
  i1800Machine: m("i1800-machinekamer", "Machinekamer van de Impressive 1800 met installaties", 900, 676),
  i1800Motoren: m("i1800-motoren", "Twee motoren in de machinekamer van de Impressive 1800", 900, 676),
  t1800Varend: m("t1800-varend", "De Bendie Trawler 1800 ‘Mazzel’ met donkerblauwe romp op de rivier", 900, 676),
  t1800Boeg: m("t1800-boeg", "De Trawler 1800 met flying bridge in de bocht", 900, 676),
  t1800Salon: m("t1800-salon", "Salon van de Trawler 1800 met grote bank en houten interieur", 900, 676),
  t1800Stuur: m("t1800-stuurstand", "Stuurstand van de Trawler 1800 met navigatieset en houten stuurwiel", 900, 676),
  t1800Kombuis: m("t1800-kombuis", "Kombuis van de Trawler 1800", 900, 676),
  t1800Dinette: m("t1800-dinette", "Dinette van de Trawler 1800 bij de ramen", 900, 676),
  t53Varend: m("t53-varend", "De aluminium Bendie Trawler 53 vaart op de rivier", 900, 674),
  t53Ochtend: m("t53-ochtend", "De Trawler 53 in ochtendlicht op kalm water", 900, 676),
  t53Kade: m("t53-kade", "De Trawler 53 vertrekt van de kade", 900, 674),
  t53Salon: m("t53-salon", "Teakhouten salon en stuurstand van de Trawler 53", 900, 676),
  t53Kombuis: m("t53-kombuis", "U-vormige kombuis van de Trawler 53 in teak", 900, 676),
  t53Office: m("t53-office", "Het ‘ships office’ met bureau aan boord van de Trawler 53", 900, 676),
  t53Machine: m("t53-machinekamer", "Machinekamer van de Trawler 53 met twee Perkins-motoren", 900, 676),
  t53Buiten: m("t53-buitenstuur", "Buitenstuurstand van de Trawler 53", 900, 674),
  t53Plan: m("t53-plan", "Indelingstekening van de Trawler 53", 900, 676),
  onderhoud: m("onderhoud-machinekamer", "Machinekamer na onderhoud, met motor en leidingwerk", 900, 674),
  installatie: m("onderhoud-installatie", "Verwarming, hydrauliek en leidingwerk in een machinekamer", 900, 674),
  stallingHal: m("winterberging-hal", "Jachten staan droog in de overdekte stallingshal van Jachtwerf Bendie", 900, 674),
  kade: m("maas-cuijk-kade", "De Maas bij Cuijk, gezien vanaf een betonnen kade, met een vrachtschip", 1920, 1280, {
    mood: true,
    credit: "Sfeerbeeld: de Maas bij Cuijk. Foto Hermann Luyken, CC0, Wikimedia Commons",
  }),
  oever: m("maas-cuijk-oever", "De overkant van de Maas bij Cuijk met bomen en een boerderij", 1920, 1280, {
    mood: true,
    credit: "Sfeerbeeld: de Maas bij Cuijk. Foto Hermann Luyken, CC0, Wikimedia Commons",
  }),
  archiefHelling: m("archief-helling", "Archieffoto: een jacht wordt met een botenwagen over een helling binnengereden", 1400, 1012, {
    mood: true,
    credit: "Archiefbeeld, niet Bendie: een Haarlemse jachtwerf, 1994. Foto Rob Hendriks, Noord-Hollands Archief, CC0",
  }),
  archiefLas: m("archief-laswerk", "Archieffoto: lasser aan het werk op een stalen scheepsdek", 1400, 989, {
    mood: true,
    credit: "Archiefbeeld, niet Bendie: lasser op de werf van Bartram & Sons, Sunderland, 1956. Tyne & Wear Archives & Museums, geen bekende auteursrechten",
  }),
};

export const video = {
  maas: {
    mp4: "/media/maas-loop.mp4",
    mp4Small: "/media/maas-loop-720.mp4",
    webm: "/media/maas-loop.webm",
    poster: "/media/maas-loop-poster.jpg",
    credit: "Sfeerfilm: de Maas in de winter. ‘River Maas 0036’ door Quahadi Añtó, CC BY-SA 4.0, Wikimedia Commons (ingekort en vertraagd)",
  },
};

export type Spec = { label: string; value: string };
export type Yacht = {
  slug: string;
  name: string;
  tagline: string;
  intro: string;
  body: string[];
  designer?: string;
  premiere?: string;
  lengthM: number;
  beamM: number;
  draftM: number;
  airDraftM: number;
  material: string;
  hull: "rond" | "knik";
  specs: Spec[];
  cover: Img;
  gallery: Img[];
};

export const yachts: Yacht[] = [
  {
    slug: "impressive-2200",
    name: "Impressive 2200",
    tagline: "Een kleine superjacht, in staal",
    intro:
      "Samen met ontwerper Han van Vossen bracht Bendie een luxe, robuust jacht met de uitstraling van een superjacht op de markt. Wereldprimeur op de Hiswa te water in IJmuiden, 2011.",
    body: [
      "Een stalen rondspant motorjacht met waaiersteven, hoog boeisel en overdekte gangboorden en achterdek. In de ronde spiegel zit een hydraulische klep naar de storage, waar de bijboot staat die via die klep te water gaat.",
      "Het interieur wordt geheel custom-built gebouwd; ook de indeling bepaalt de eigenaar. Dit exemplaar is uitgevoerd in kersen met genoest esdoorn op de liggende delen en mat RVS.",
      "Achter de openslaande deuren ligt één grote leefruimte met salon, dinette, kombuis en stuurstand. De eigenaarshut ligt onder het niveau van de salon.",
    ],
    designer: "Han van Vossen",
    premiere: "Hiswa te water, IJmuiden 2011",
    lengthM: 21.8,
    beamM: 5.7,
    draftM: 1.4,
    airDraftM: 4.3,
    material: "Staal",
    hull: "rond",
    specs: [
      { label: "Lengte", value: "21,80 m" },
      { label: "Breedte", value: "5,70 m" },
      { label: "Diepgang", value: "1,40 m" },
      { label: "Doorvaarthoogte", value: "4,30 m" },
      { label: "Waterverplaatsing", value: "60 ton" },
      { label: "Romp en opbouw", value: "Staal" },
      { label: "Rompvorm", value: "Rondspant" },
      { label: "Dieseltank", value: "6.500 l" },
      { label: "Watertank", value: "1.800 l" },
      { label: "Vuilwatertank", value: "450 l" },
      { label: "Motoren", value: "2× John Deere, 526 pk" },
      { label: "CE-categorie", value: "A" },
    ],
    cover: media.hero,
    gallery: [media.i2200Maas, media.i2200Kombuis, media.i2200Hut, media.i2200Salon, media.i2200Kikkers, media.i2200Bel, media.i2200Romp, media.i2200Trap, media.i2200Bad],
  },
  {
    slug: "impressive-1800",
    name: "Impressive 1800",
    tagline: "Waar de Impressive-lijn begon",
    intro:
      "Met de Impressive 1800 introduceerde Bendie in 2008 de modellenlijn ‘Impressive’, verkrijgbaar van 15 tot 22 meter. Wereldprimeur op de Hiswa te water in IJmuiden.",
    body: [
      "Een stalen rondspant motorjacht met waaiersteven, hoog boeisel en overdekte gangboorden en achterdek. Een hydraulische trap in de spiegel geeft toegang tot de machinekamer, handig om er bijvoorbeeld de fietsen op te bergen.",
      "Het interieur is modern en strak, uitgevoerd in notenhout met mat RVS. De salon annex stuurhut heeft een groot elektrisch schuifluik; de stuurstand een complete navigatieset van Simrad.",
      "In de machinekamer is plaats voor een generator van 14 kVA en de hydraulische installatie voor boeg- en hekschroef.",
    ],
    designer: "Han van Vossen",
    premiere: "Hiswa te water, IJmuiden 2008",
    lengthM: 18.6,
    beamM: 5.2,
    draftM: 1.4,
    airDraftM: 4.5,
    material: "Staal",
    hull: "rond",
    specs: [
      { label: "Lengte", value: "18,60 m" },
      { label: "Breedte", value: "5,20 m" },
      { label: "Diepgang", value: "1,40 m" },
      { label: "Doorvaarthoogte", value: "4,50 m" },
      { label: "Waterverplaatsing", value: "48 ton" },
      { label: "Romp en opbouw", value: "Staal" },
      { label: "Rompvorm", value: "Rondspant" },
      { label: "Dieseltank", value: "5.000 l" },
      { label: "Watertank", value: "1.500 l" },
      { label: "Vuilwatertank", value: "450 l" },
      { label: "Motoren", value: "2× Vetus Deutz DT66, 170 pk" },
      { label: "CE-categorie", value: "A" },
    ],
    cover: media.i1800Varend,
    gallery: [media.i1800Boeg, media.i1800Zijkant, media.i1800Salon, media.i1800Stuur, media.i1800Kombuis, media.i1800Dinette, media.i1800Hut, media.i1800Machine, media.i1800Motoren],
  },
  {
    slug: "trawler-1800",
    name: "Trawler 1800",
    tagline: "Laag genoeg voor de Franse kanalen",
    intro:
      "Een fraai gelijnd stalen multiknikspant motorjacht met flying bridge. Met een kruiphoogte van 3,45 meter is het jacht uitermate geschikt voor een tocht door de Franse kanalen.",
    body: [
      "Waaiersteven, hoog boeisel en overdekte gangboorden. Achter de openslaande deuren liggen de salon, in het midden de kombuis met dinette en voorin de stuurstand, met aan beide zijden een deur naar het gangboord.",
      "Hydraulische stabilisatoren houden het jacht ook bij zwaar weer en op zee stabiel. De machinekamer is ruim, goed bereikbaar en zeer goed geïsoleerd, wat bijdraagt aan de rust tijdens het varen.",
    ],
    lengthM: 18.0,
    beamM: 4.85,
    draftM: 1.4,
    airDraftM: 3.45,
    material: "Staal",
    hull: "knik",
    specs: [
      { label: "Lengte", value: "18,00 m" },
      { label: "Breedte", value: "4,85 m" },
      { label: "Diepgang", value: "1,40 m" },
      { label: "Doorvaarthoogte", value: "3,45 m" },
      { label: "Waterverplaatsing", value: "42 ton" },
      { label: "Romp en opbouw", value: "Staal" },
      { label: "Rompvorm", value: "Multiknik" },
      { label: "Dieseltank", value: "2.000 l" },
      { label: "Watertank", value: "1.000 l" },
      { label: "Vuilwatertank", value: "400 l" },
      { label: "Motor", value: "Vetus Deutz DT67, 286 pk" },
      { label: "CE-categorie", value: "A" },
    ],
    cover: media.t1800Varend,
    gallery: [media.t1800Boeg, media.t1800Salon, media.t1800Stuur, media.t1800Kombuis, media.t1800Dinette],
  },
  {
    slug: "trawler-53",
    name: "Trawler 53",
    tagline: "Aluminium, voor kanaal en oceaan",
    intro:
      "Getekend door de Amerikaanse ontwerper C.W. Paine en door Bendie gebouwd in aluminium. Geringe diepgang en doorvaarthoogte voor de Franse kanalen, en sterk genoeg voor een oversteek.",
    body: [
      "Met 5.260 liter diesel en een koerssnelheid van 8,5 knopen is een afstand van 2.000 mijl mogelijk. De romp heeft een diepe, gebogen V-vorm.",
      "Het interieur is custom-built in teak met wit gespoten vlakken. Tussen gastenhut en machinekamer ligt een ‘ships office’ met bureau voor kaartlezen of schrijven.",
    ],
    designer: "C.W. Paine",
    lengthM: 16.0,
    beamM: 4.87,
    draftM: 1.35,
    airDraftM: 3.45,
    material: "Aluminium",
    hull: "knik",
    specs: [
      { label: "Lengte", value: "16,00 m" },
      { label: "Breedte", value: "4,87 m" },
      { label: "Diepgang", value: "1,35 m" },
      { label: "Doorvaarthoogte", value: "3,45 m" },
      { label: "Waterverplaatsing", value: "28 ton" },
      { label: "Romp en opbouw", value: "Aluminium" },
      { label: "Rompvorm", value: "Multiknik" },
      { label: "Dieseltank", value: "5.260 l" },
      { label: "Watertank", value: "1.400 l" },
      { label: "Vuilwatertank", value: "2× 400 l" },
      { label: "Motoren", value: "2× Perkins Sabre M135" },
      { label: "CE-categorie", value: "A" },
    ],
    cover: media.t53Varend,
    gallery: [media.t53Ochtend, media.t53Kade, media.t53Salon, media.t53Kombuis, media.t53Office, media.t53Buiten, media.t53Machine, media.t53Plan],
  },
];

export type Service = {
  id: string;
  name: string;
  short: string;
  text: string;
  items?: string[];
  image: Img;
};

export const services: Service[] = [
  {
    id: "nieuwbouw",
    name: "Nieuwbouw en afbouw",
    short: "Van eigen Bendie-model tot uw casco",
    text:
      "Naast de eigen Bendie-kruisers bouwde de werf modellen van ontwerpers als Vripack, Martin Bekebrede, Barkas en Van Vossen. Heeft u al een casco dat nog afgebouwd moet worden, of ergens een mooi model gezien? Bespreek het met de werf.",
    items: ["Eigen modellen, zoals de Impressive-lijn", "Afbouw van een bestaand casco", "Interieur geheel custom-built"],
    image: media.i2200Maas,
  },
  {
    id: "onderhoud",
    name: "Onderhoud en reparatie",
    short: "Van motoronderhoud tot complete refit",
    text:
      "Voor alle soorten onderhouds- en reparatiewerk aan uw jacht: van levering en installatie van apparatuur tot een refit van exterieur én interieur.",
    items: ["Winterklaar maken", "Motorolie verversen", "Olie- en brandstoffilters vervangen", "V-snaar en impeller vervangen", "Refit van exterieur en interieur"],
    image: media.onderhoud,
  },
  {
    id: "betimmering",
    name: "Jachtbetimmering",
    short: "Teakdek en interieur",
    text:
      "Onderhoud aan uw teakdek of een nieuw teakdek, reparaties aan het interieur of een compleet nieuw interieur.",
    items: ["Teakdek onderhouden of vernieuwen", "Reparatie van interieur", "Compleet nieuw interieur"],
    image: media.i2200Kombuis,
  },
  {
    id: "installatie",
    name: "Installatie, hydrauliek en elektra",
    short: "Alles wat aan boord moet werken",
    text:
      "Onderhoud aan hydraulische systemen en de aanleg van nieuwe. Levering en installatie van navigatie, stuurautomaten, communicatie en complete elektrische installaties, en ook het vuilwatersysteem.",
    items: ["Generatorsets", "Boeg- en hekschroeven", "Verwarming (Kabola, Webasto)", "Acculaders en omvormers", "Verlichting en navigatie", "Vuilwatersysteem"],
    image: media.installatie,
  },
  {
    id: "schilderwerk",
    name: "Schilderwerk",
    short: "Onderwaterschip tot complete romp",
    text:
      "Het complete schilderwerk voor uw jacht: van het onderwaterschip tot het lakken van romp en opbouw in een 1- of 2-componentensysteem.",
    items: ["Onderwaterschip", "Romp en opbouw lakken", "1- of 2-componenten verfsysteem"],
    image: media.i2200Romp,
  },
  {
    id: "casco",
    name: "Cascobouw en laswerk",
    short: "Staal en aluminium",
    text:
      "De werf bouwde rompen in staal en in aluminium. Cascobouw en laswerk staan ook in het ledenprofiel van de Nederlandse Jachtbouw Industrie.",
    items: ["Stalen rompen", "Aluminium rompen", "Laswerk"],
    image: media.archiefLas,
  },
  {
    id: "winterstalling",
    name: "Winterstalling",
    short: "Binnen of buiten, het hele jaar zelf werken",
    text:
      "Via de eigen helling haalt de werf uw jacht met een botenwagen uit het water en reinigt het onderwaterschip op de wasplaats. Stallen kan binnen of buiten.",
    items: ["Uit het water via de helling", "Onderwaterschip reinigen", "Binnen of buiten stallen", "Het hele jaar zelfwerkzaamheid"],
    image: media.stallingHal,
  },
];

export const season = [
  {
    when: "Najaar",
    rows: [
      { what: "Aanmeren aan de kade", where: "Haven" },
      { what: "Uit het water met de botenwagen", where: "Helling" },
      { what: "Onderwaterschip reinigen", where: "Wasplaats" },
      { what: "Stallen, binnen of buiten", where: "Hal of terrein" },
    ],
  },
  {
    when: "Winter",
    rows: [
      { what: "Winterklaar maken", where: "Machinekamer" },
      { what: "Onderhoud en reparatie", where: "Werkplaats" },
      { what: "Schilderwerk en betimmering", where: "Hal" },
      { what: "Zelf aan uw jacht werken", where: "Het hele jaar" },
    ],
  },
  {
    when: "Voorjaar",
    rows: [
      { what: "Terug over de helling", where: "Helling" },
      { what: "Te water aan de Maas", where: "Haven" },
    ],
  },
];
