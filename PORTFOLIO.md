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
