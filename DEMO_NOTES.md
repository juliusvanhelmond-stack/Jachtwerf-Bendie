# Jachtwerf Bendie: demo-notities (JUNEStudio)

Conceptdemo van een nieuwe website voor Jachtwerf Bendie. Het is geen officiële website; `robots` staat op `noindex` tot de livegang.

## Concept

**Vakmanschap aan het water.** De bezoeker begint op het water en eindigt aan de kade. Het idee komt uit Bendie zelf:

- **De naam als monument.** "Bendie" komt van **ben**zine en **die**sel (zo staat het op bendie.nl). In de hero staat de naam in groot formaat op de Maas, met een spiegeling in het water die licht rimpelt. In de tweede sectie staat een foto van een Bendie-machinekamer tussen BEN en DIE.
- **De lijn van het logo.** Het bestaande logo tekent een jacht als één rode lijn op de waterlijn. Dezelfde lijn komt terug in het interactieve onderdeel: de meetlat.
- **Het live-onderdeel: "Uw jacht op de meetlat".** Bezoekers stellen lengte, doorvaarthoogte en diepgang van hun eigen jacht in en zien het op ware schaal naast een Bendie-jacht, met de echte gepubliceerde maten. Eén klik opent een e-mail aan de werf waarin die maten al staan.

Art direction: richting "The name as a monument" uit de taste-skill (seed 2086478376). De hero-blauwdruk ("foto in de plaats van een letter") is gebruikt voor de naamsectie en niet voor de hero, omdat de brief om een filmische hero op het water vroeg. Lettertypen: Unbounded, een brede, geconstrueerde display-letter die aansluit bij de Bank Gothic van het oude logo, met Onest voor de tekst. Kleuren: navy en Bendie-rood (#CE2C33, rechtstreeks uit het logo en de oude stylesheet) op warm ivoor uit de brief. Rood staat alleen op de primaire actie en de jachtlijn. Er is geen goud gebruikt.

### Signature-momenten

| Brief | Uitwerking |
| --- | --- |
| A. Cinematic hero | Impressive 2200 ‘Temporalis’ op de Maas (eigen Bendie-foto), langzame drift, naam als monument met rimpelende reflectie (SVG-turbulentie, uit bij reduced motion), twee CTA’s, header transparant → effen bij scroll, scroll-cue |
| B. Dockside moment | Scrollgestuurde overgang van de kade bij Cuijk naar een venster op de Maas dat opengaat (video). Geen scrolljacking: native scroll stuurt één CSS-variabele aan. Op telefoon en bij reduced motion worden de lagen gewoon gestapeld |
| C. Craftsmanship | Band met ongelijke panelen van echte Bendie-details (kersen/RVS-kombuis, kikkers, machinekamer, scheepsbel). Het paneel onder de cursor of focus gaat open |
| D. Interactive services | Lijst van 7 diensten met een groot wisselend beeld. Volledig met het toetsenbord te bedienen (pijltjes, Home/End); op mobiel werkt het als accordeon |
| E. Projecten | Fullscreen carrousel met de 4 jachten die Bendie bouwde. Te bedienen met swipen, pijltjestoetsen, knoppen en thumbnails die ook de voortgang tonen. Elk jacht heeft een eigen detailpagina met specificaties |
| F. A day at the yard | "Een seizoen op de werf", vormgegeven als bonnetje: kade → helling → wasplaats → hal → te water. Er staan geen tijdsduren in, omdat die niet bekend zijn |
| G. Reviews | **Weggelaten.** Google-reviews waren niet uit te lezen (zie hieronder). Vertrouwen komt nu uit feiten: sinds 1977, het NJI-lidmaatschap en de echte specificaties |
| H. Final scene | Adres in grote rijen over de bewegende Maas. Contactformulier met validatie en een eerlijke mailto-fallback |

## Pagina’s

`/` · `/de-werf/` · `/diensten/` · `/jachten/` · `/jachten/[impressive-2200|impressive-1800|trawler-1800|trawler-53]/` · `/winterstalling/` · `/contact/` · `/bronnen/`

## Bronnen

| Bron | Status |
| --- | --- |
| https://www.bendie.nl/backup_website/ | **Bereikbaar.** Dit is een HTTrack-kopie uit 20-09-2016 (www.bendie.nl verwijst ernaar door). Alle pagina's zijn gelezen: home, nieuwbouw (4 modellen), occasions, winterberging, onderhoud en contact (het formulier is leeg/kapot). Logo, foto's en kleuren komen hiervandaan |
| https://jachtbouw.nl/nji-lid/jachtwerf-bendie-b-v/ | Bereikbaar. Adres, e-mail, website, diensten (cascobouw/laswerk, installatie aandrijving en elektra, reparatie/onderhoud, schilderwerk, timmerwerk, winterstalling) |
| https://jachtbouw.nl/nieuw-nji-lid-…/ | Bereikbaar. Herhaalt de tekst van de homepage en noemt een contactpersoon en het telefoonnummer 0845-316896. **Beide niet overgenomen** |
| Google Business (share.google/xiUDGXMvFDVvI93Tk) | Leidt naar Google Zoeken/Maps (kgmid `/g/1tdz8ncc`). Met de headless browser zijn **geen reviews, openingstijden of telefoonnummer uit te lezen**. Bevestigd is alleen de pin "Jachtwerf Bendie" aan de Havenlaan, aan de Haven van Cuijk |

### Geverifieerde feiten (gebruikt)

- Jachtwerf Bendie B.V., Havenlaan 18, 5433 NL Katwijk (N-Br.), info@bendie.nl, www.bendie.nl (NJI-profiel; het adres komt overeen met de Google-pin)
- Sinds 1977 gevestigd in Katwijk aan de Maas bij Cuijk; pal aan de haven (bendie.nl en NJI-artikel)
- Bouwen, afbouwen, onderhouden en repareren van jachten; eigen Bendie-kruisers en modellen van Vripack, Martin Bekebrede, Barkas en Van Vossen; in 2008 de modellenlijn "Impressive" (15–22 m) (bendie.nl)
- De naam komt van benzine- en dieselmotoren (bendie.nl)
- Diensten: zie de onderhouds- en winterbergingspagina van bendie.nl en het NJI-profiel
- Winterstalling: helling met botenwagen, wasplaats voor het onderwaterschip, binnen en buiten stallen, het hele jaar zelfwerkzaamheid, winterklaar maken (bendie.nl)
- Specificaties van de Impressive 2200, Impressive 1800, Trawler 1800 en Trawler 53, overgenomen van de modelpagina's op bendie.nl
- Lid van de Nederlandse Jachtbouw Industrie (NJI-ledenlijst)

### Bewust niet gebruikt of onbevestigd

- **Telefoonnummer.** Alleen een 084-nummer in een NJI-artikel zonder datum; het staat niet op bendie.nl. Niet getoond
- **Openingstijden en bezoektijden.** Nergens gevonden. Niet getoond
- **Naam van de eigenaar/contactpersoon.** Wordt genoemd in het NJI-artikel, maar is niet primair bevestigd. Niet getoond
- **Reviews en sterren.** Niet verifieerbaar. De sectie is weggelaten
- **"In Nederland en Duitsland een begrip"** (zelfclaim op bendie.nl). Niet overgenomen
- **Occasions** (Impressive 1800, Verhoeven 2100) uit 2016. Niet actueel en de Verhoeven is geen Bendie-bouw. Niet getoond
- De modelinformatie dateert van 2008–2016. Of de Impressive-lijn nog wordt aangeboden, moet de klant bevestigen. De site spreekt daarom van "jachten die Bendie bouwde"
- Een kleine inconsistentie op bendie.nl: de pagina van de Impressive 2200 noemt in een tekstblok de "Impressive 1800". Overgenomen zijn de specificatietabellen, niet die tekst

## Beelden en video (geen AI)

Er zijn geen generatieve beeld- of videotools gebruikt.

**Eigen Bendie-foto's** (bendie.nl, gebruikt als voorbeeld voor de klant; voor livegang moet de klant de rechten bevestigen): alle jachten, interieurs, machinekamers en de stallingshal (`winterberging.jpg`). Ze zijn verkleind en licht gelijkgetrokken (verzadiging −12%, contrast +5%). De kleine originelen (338–370 px) zijn met Lanczos opgeschaald tot 500–900 px en licht verscherpt (`scripts/process_media.py`). Op grote formaten ogen ze daardoor zacht.

**Sfeerbeelden met open licentie.** Ze worden nooit als Bendie gepresenteerd en hebben een label op de pagina en op `/bronnen/`:

| Bestand | Bron | Licentie |
| --- | --- | --- |
| `maas-cuijk-kade` | "2013.05.31.122710 Ship Maas Cuijk", Hermann Luyken, Wikimedia Commons | CC0 |
| `maas-cuijk-oever` | "2013.05.31.122716 Maas Cuijk", Hermann Luyken, Wikimedia Commons | CC0 |
| `archief-helling` | Haarlemse jachtwerf J. van Opzeeland, 1994, Rob Hendriks / Noord-Hollands Archief | CC0. Label "niet Bendie" |
| `archief-laswerk` | Lasser bij Bartram & Sons, Sunderland, 1956, Tyne & Wear Archives & Museums | Geen bekende auteursrechten (Flickr Commons). Label "niet Bendie" |
| `maas-loop.*` | "River Maas 0036", Quahadi Añtó, Wikimedia Commons | **CC BY-SA 4.0**. Ingekort (4,5 s), vertraagd (×1,6) en heen-en-terug gemonteerd tot een naadloze loop van 14,5 s. De bewerking valt onder dezelfde licentie; de credit staat op de pagina |

Video-eisen: muted, loop, playsInline, `preload="none"`, poster. De video speelt alleen als hij in beeld is, nooit bij reduced motion of Save-Data, en telefoons krijgen een 720p-versie van 260 KB (desktop: webm 470 KB of mp4 1,1 MB).

**Logo.** De rode jachtlijn is als vector overgetrokken van het originele `logo.jpg` (329×57). De letters van het origineel zijn Bank Gothic; in de demo staat Unbounded als vervanger. **Graag het originele vectorlogo aanleveren.**

## Uitgevoerde tests (echt uitgevoerd, in deze sessie)

- **Productiebuild** `next build` (statische export, 14 pagina's): geslaagd. `tsc --noEmit`: geen fouten
- **Playwright-screenshots** op 375, 768, 1280 en 1440 px (home), en op 375 en 1440 px voor alle subpagina's. Horizontale overflow: 0 px op alle gemeten breedtes (na de fix)
- **Interactietests** (Playwright, `interact`-script): mobiel menu (openen, scroll-lock, Escape, navigatie, actieve status), carrousel (pijltjestoetsen, thumbnails, inert op inactieve dia's, touch-swipe via CDP-touch-events), diensten (pijltjestoetsen, aria-expanded), meetlat (berekening, mailto-inhoud, modelwissel), header transparant → effen, contactformulier (preset via `?onderwerp=`, foutmeldingen, focus naar het eerste fout veld, ongeldige e-mail, eerlijke statusmelding), reduced motion (content zichtbaar, video op pauze, eindstand van de dockside), zonder JavaScript (content zichtbaar), geen kapotte afbeeldingen op 11 pagina's, precies één h1 per pagina, 11 interne links met status 200, geen page errors
- **Video**: speelt en pauzeert buiten beeld (currentTime gecontroleerd). De "request failed"-meldingen in de console zijn afgebroken preload-verzoeken bij het wisselen van bron, geen kapotte bestanden (Range-requests geven 206)
- **Prestaties lokaal** (geen netwerkthrottling): initiële overdracht ±0,9 MB (390 px) en ±1,15 MB (1440 px), CLS 0,000. De LCP is het h1-monument
- **Taste-skill gate**: `lint.mjs` 0 FAIL / 0 WARN. `inspect.mjs`: 1 FAIL die overblijft, `covered-text` op 390 px: de vaste header schuift bij doorscrollen over "BENDIE". Met elementFromPoint gecontroleerd dat verder niets de naam bedekt. 4 WARN, verdedigd: (1) ivoor #F4F1EA komt uit de brief; (2) 16 lettergroottes; (3) de rij "Aan boord" scrollt bewust zijwaarts; (4) de dockside-titel staat met scrim over het beeld, de pin is ingekort tot 1,9 scherm
- **Verbeterronde in de browser**, na het bekijken van de screenshots:
  - hero herschikt, zodat de naam niet meer over de romp valt
  - shutter-foto in de naamsectie bleef onzichtbaar (IntersectionObserver ziet een volledig weggeclipt element niet); clip verplaatst naar de afbeelding
  - dienstenlay-out kapot (paneel verkeerd gepositioneerd, kolommen door elkaar); gerepareerd
  - sticky dockside werkte niet door de volgorde van de CSS; gerepareerd en de video komt nu als venster bovenop
  - labels op de meetlat te groot en over de romp; liniaal onder het water gezet
  - footervolgorde gerepareerd
  - te veel witruimte in de prose-kolommen gerepareerd
  - mobiele crop van de hero aangepast
  - verlopen vervangen door vlakke scrims en SVG-puntjes

### Niet getest of niet beschikbaar

- **Vercel Web Design Guidelines-skill** (`web-design-guidelines`): niet geïnstalleerd in deze omgeving. De principes (semantiek, focus, formulieren, responsive, prestaties) zijn handmatig toegepast
- **21st.dev**: geen tool of MCP beschikbaar en niet onderzocht. Er zijn geen componenten van 21st.dev gebruikt; alle interacties zijn zelf geschreven
- Geen Lighthouse- of axe-run. Contrast is handmatig gekozen (ink-soft #4C5D66 op ivoor ≈ 6:1, wit op rood ≈ 4,9:1), niet geautomatiseerd gemeten
- Niet getest op echte iOS/Android-toestellen of in Safari/Firefox, alleen in Chromium (Playwright)
- Geen productiedeploy

## Wat de klant nog moet aanleveren

1. Origineel logo (vector) en bevestiging van de merkkleuren
2. Telefoonnummer, openings- en bezoektijden, eventueel KvK/btw voor de footer
3. Nieuwe fotografie en video in hoge resolutie: de werf, de helling met botenwagen, de werkplaats, de hal, de kade en drone-beelden van de haven. De huidige foto's zijn uit 2008–2016 en klein; een staande (portrait) heroclip voor mobiel zou veel winst opleveren
4. Bevestiging van de gebruiksrechten op de foto's van bendie.nl
5. Actuele modellen, occasions of refitprojecten (met namen en toestemming van de eigenaren)
6. Bevestiging of en hoe Google-reviews getoond mogen worden (met letterlijke tekst en naam)
7. Een keuze voor het contactformulier: echte verzending via een backend of formulierdienst. Nu werkt het als transparante mailto
8. Het productiedomein: vervang `BASE` in `app/layout.tsx` (OG-URL's) en zet `robots` op index

## Techniek

Next.js 15 (App Router, statische export naar `out/`), React 19, TypeScript, Lucide-iconen, zelfgeschreven CSS met tokens (`app/globals.css`, `app/site.css`). Geen Tailwind en geen animatiebibliotheek: CSS-transities, IntersectionObserver en één scrollvariabele. Alle content staat in `content/site.ts`.
