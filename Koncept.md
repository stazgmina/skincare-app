**Skincare Planner - Koncept i Lista Funkcji**

## **1. Opis aplikacji**
Skincare Planner to aplikacja do zarządzania rutyną pielęgnacyjną, integrująca funkcje społecznościowe i e-commerce. Użytkownicy mogą tworzyć własne plany pielęgnacyjne, śledzić postępy, dzielić się swoimi rutynami, a także kupować rekomendowane produkty. Platforma łączy planowanie, personalizację oraz społecznościowe podejście do pielęgnacji skóry.

## **2. Kluczowe moduły i funkcje**

### **A. Planner (Tworzenie i zarządzanie rutyną)**
- Możliwość tworzenia i nazywania własnych rutyn pielęgnacyjnych.
- **Searchbar** z filtrami i sortowaniem produktów.
- Drag & Drop: przeciąganie produktów do timeslotów danego dnia tygodnia.
- **Mixing guide** – rekomendacje składników, które można łączyć.
- Możliwość dodawania notatek do rutyn.
- Zapis i edycja rutyn, opcja drukowania i eksportu.
- Udostępnianie rutyn oraz kopiowanie cudzych schematów pielęgnacji.

### **B. E-commerce (Product Store + Koszyk)**
- Sklep z produktami pielęgnacyjnymi zintegrowany z plannerem.
- Dodawanie wszystkich produktów z rutyny do koszyka jednym kliknięciem.
- Promocje, zniżki i współprace z markami kosmetycznymi.
- Oficjalne kanały marek, blogi oraz rekomendacje produktów.

### **C. Społeczność (Blogi, Posty, Grupy, Komentarze)**
- Tworzenie postów blogowych z możliwością dodania produktów i rutyn.
- Możliwość komentowania, lajkowania i followowania użytkowników.
- Tworzenie grup tematycznych oraz czatów.
- Możliwość zapisania rutyn i postów do ulubionych.

### **D. User Experience & Optymalizacja**
- System rekomendacji na podstawie interakcji użytkownika.
- Infinite scroll + debouncing + throttling dla lepszego UX.
- Autocomplete w wyszukiwarce produktów.
- Sprawdzanie zmian i ostrzeganie użytkownika przed opuszczeniem strony bez zapisu.
- Automatyczna optymalizacja zdjęć pod responsywność i różne rozdzielczości ekranów.

### **E. Komunikacja i Interakcja**
- Możliwość tworzenia i dołączania do grup tematycznych.
- Komentarze pod produktami, postami i rutynami.
- Wbudowany system czatu między użytkownikami.

## **3. Technologie i architektura**
- **Frontend:** Next.js, TypeScript, Zustand (zarządzanie stanem), react-beautiful-dnd (Drag & Drop), react-quill (edycja postów).
- **Backend:** Next.js API Routes, PostgreSQL, Stripe (płatności), Redis (cache autouzupełniania).
- **DevOps & Hosting:** Vercel (Next.js), Railway/Supabase (PostgreSQL), Cloudinary (optymalizacja zdjęć).

## **4. Roadmap projektu**
### **Etap 1: MVP**
- Planner rutyn z Drag & Drop.
- Sklep z produktami i integracja z koszykiem.
- Możliwość zapisu i edycji rutyn.

### **Etap 2: Społeczność**
- Tworzenie postów i blogów.
- System komentarzy i followowania.
- Możliwość kopiowania rutyn innych użytkowników.

### **Etap 3: Optymalizacja i AI**
- System rekomendacji produktów i rutyn.
- Automatyczna analiza składników kosmetyków.
- Lepsza optymalizacja UI/UX, autouzupełnianie i personalizacja.

## **5. Cel aplikacji**
Ułatwienie użytkownikom planowania i realizacji rutyn pielęgnacyjnych, integracja społeczności beauty oraz stworzenie nowoczesnej platformy zakupowej z personalizowanymi rekomendacjami i interakcją użytkowników.

Automatyczne generowanie rutyn dla nowych użytkowników na podstawie quizu.
