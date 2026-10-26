# Portfolio

Statyczna strona główna: `index.html`, `assets/site.css`, `assets/site.js`.
Publikacja: istniejący GitHub Pages, gałąź `master`, katalog główny. Bez zależności i bez zmiany konfiguracji Jekyll.

## Treść
- Professional: wprowadzenie, miejsce na CV, odnośniki do publicznych projektów.
- Work in Progress: filtrowane, rozwijane szkice oznaczone jako demo.
- Historia zatrudnienia, daty, wyniki i pełne case studies wymagają potwierdzenia właściciela.
- Zachowano README.md, content/WhoAreYou.md, test.md i _config.yml.
- Odtworzenie koncepcji z opisu; oryginalny ZIP nie był dostępny.

## Podgląd
`python3 -m http.server 8765` i http://localhost:8765

Nawigacja używa fragmentów URL, więc odświeżenie #wip działa bez reguł przekierowań. Bez JavaScript oba obszary są widoczne, a teksty rozwijają się dzięki natywnym elementom details.

## Weryfikacja
Sprawdzono składnię JS, przełączanie obszarów, filtrowanie eksperymentów i rozwijanie tekstu w przeglądarce oraz wygląd strony Professional w ramce o szerokości 375 px.

## English content update
The main site now uses English throughout, with Professional, Work in Progress, and About as separate navigable areas. Professional distinguishes areas of focus from public projects and career history. WIP has Thoughts, Experiments, Side Projects, and Guides; all illustrative entries remain explicitly labelled. The original Polish archive is preserved and its link labelled In Polish.

Checked the new About route, Guides filtering, internal fragment targets, JavaScript syntax, and the Professional layout at a 375 px viewport. No unverified job titles, employment dates, or outcomes were added.
