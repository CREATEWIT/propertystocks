# Commission Fractions (Frontend Only)

A React + Tailwind CSS demo that mimics the core functionality of Commission.com for buying fractional ownership in real estate properties. No backend or database; all data is mocked and stored in React state.

## Tech Stack
- React 18 + Vite
- Tailwind CSS
- React Router DOM
- JavaScript (no TypeScript)

## Getting Started
1. Install dependencies
   ```bash
   npm install
   ```
2. Start dev server
   ```bash
   npm run dev
   ```
3. Open the URL from the terminal (default: http://localhost:5173)

## Project Structure
```
commission-fractions/
  index.html
  package.json
  tailwind.config.js
  postcss.config.js
  vite.config.js
  src/
    main.jsx
    index.css
    App.jsx
    data/properties.js
    state/PropertiesContext.jsx
    components/
      Navbar.jsx
      Carousel.jsx
      PropertyCard.jsx
      OwnershipTable.jsx
      PurchaseForm.jsx
    pages/
      Home.jsx
      Properties.jsx
      PropertyDetail.jsx
      HowItWorks.jsx
      Contact.jsx
```

## Fractional Logic
- Ownership is tracked per property in React Context (`PropertiesContext`).
- `purchaseFraction(propertyId, buyerName, percent)`:
  - Caps purchases so total ownership never exceeds 100%.
  - Merges purchases by the same buyer into one row.
  - Updates state; UI re-renders tables and badges.
- Derived helpers:
  - `totalOwnedPercent(property)`
  - `remainingPercent(property)`
  - `pricePerPercent(property) // totalValue / 100`

## Pages
- Homepage: Hero, featured carousel, featured grid.
- Properties: Grid listing with price per 1% and remaining availability.
- Property Detail: Gallery, stats, purchase form, and live ownership table.
- How It Works: Steps and rules.
- Contact: Static info.

## Notes
- This is a demo; no persistence. Refreshing the page resets ownership to seed data.
- Currency formatting uses `en-IN` locale for INR display.
- All images from Unsplash (hotlinked for demo purposes).
