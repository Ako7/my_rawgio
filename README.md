# Wprowadzenie

Dzieki temu projektowi nauczyłem się tworzenia aplikacji w React. W składowych projektu zawiera się szata graficzna aplikacji stworzona w ChakraUI. Do nawigowania po aplikacji użyłem react-router-dom. Pobieranie odpowiednich danych było zrealizowane za pomocą custom hooków które były oparte o uniwersane API do pobierania danych. Dzięki react-infinite-scroll-component udało mi się zaimplementować nieskończone scrollowanie kart z grami. Aby przypieszyć działanie aplikacji niezmienne dane umieściłem w plikach aplikacji co podniosło szybkość sortowania pozycji i wczytywania strony. Do zarządzania stanem globalnym aplikacji użyłem biblioteki zustand. Podczas tworzenia aplikacji przestrzegałem zasad czystego kodu, usunąłem powstałe redundancje wyodrębniając opisane w typescript jednostki(entities).

# Narzędzia

- Główne: React, Typescript
- Projekt graficzny: ChakraUI
- Formularze: react-hook-form, zod
- Wczytywanie danych: ReactQuery, Axios
- Zarządzanie stanem globalnym: Zustand

# Podsumowanie

Nowe umiejętności:

- Tworzenie i obsługa aplikacji w react opartej o dane pobierane z serwera.
- Projektowanie responsywnych i szybkich interfejsów użytkownika.
- Lepsza praca z formularzami pod kątem interfejsu oraz walidacji danych.
- Praca z zustand w celu wyeliminowania nadmiarowego przekazywania zmiennych między komponentami.
- Praca z reactQuery w celu zoptymalizowanego pobierania i używania pobranych danych.
- Tworzenie nawigacji w aplikacji za pomocą reactRouterDom.

Aplikacja została wykonana w ramach kursu React Testing z https://codewithmosh.com
