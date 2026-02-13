# Projekt Zaliczeniowy - Programowanie Aplikacji Webowych (WSEI)

[![CI Pipeline](https://github.com/KacperBiszczak/DevOps_Lab_Project/actions/workflows/ci.yml/badge.svg)](https://github.com/KacperBiszczak/DevOps_Lab_Project/actions)

## 📋 Opis projektu
Prosta aplikacja API zbudowana w Node.js (Express), służąca jako baza do demonstracji procesów CI/CD. Projekt realizuje wymagania dotyczące automatyzacji testów, konteneryzacji oraz wdrożenia chmurowego.

### Funkcje (Punkt 3):
* `GET /` – Zwraca komunikat o działaniu systemu.
* `GET /products` – Zwraca listę produktów w formacie JSON.

---

## 🛠️ Instrukcja uruchomienia

### 1. Lokalnie
Wymagane środowisko: **Node.js (v18+)**

```bash
# Instalacja zależności
npm install

# Uruchomienie aplikacji
npm start

# Uruchomienie testów jednostkowych (Punkt 3)
npm test