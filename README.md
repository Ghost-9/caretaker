# CareTaker · Hospital Bedside & Convalescence Concierge

<p align="center">
  <strong>An accredited healthcare concierge web platform designed with high-end agency rigor.</strong><br />
  <em>Coordinating vetted hospital bedside attendants, nursing scholars, and post-operative home recovery across premier medical networks.</em>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/Next.js-15.x-black?logo=next.js&logoColor=white" alt="Next.js 15" />
  <img src="https://img.shields.io/badge/React-19.x-61DAFB?logo=react&logoColor=black" alt="React 19" />
  <img src="https://img.shields.io/badge/Tailwind_CSS-3.4-38B2AC?logo=tailwind-css&logoColor=white" alt="Tailwind CSS" />
  <img src="https://img.shields.io/badge/TypeScript-5.x-3178C6?logo=typescript&logoColor=white" alt="TypeScript" />
  <img src="https://img.shields.io/badge/Deployment-Vercel-black?logo=vercel&logoColor=white" alt="Vercel" />
</p>

---

## Live Production Experience

Experience the live deployed web application on Vercel:  
👉 **[https://caretaker-nine.vercel.app](https://caretaker-nine.vercel.app)**

---

## Agency Design Philosophy

CareTaker moves away from generic, cluttered healthcare templates in favor of calm, editorial dignity:
* **Curated Editorial Palette:** Warm alabaster (`#FAF8F5`) and deep forest emerald (`#0E2E25`) punctuated by subtle sand borders and bronze accents.
* **Typographic Hierarchy:** High-contrast editorial display serif pairings (`Playfair Display`) alongside modern grotesque sans-serif (`Inter` / `Plus Jakarta Sans`) for seamless readability.
* **Tactile Micro-Interactions:** Subtle floating glassmorphism panels, balanced whitespace, and purposeful framer-motion transitions.
* **Patient Dignity First:** Clinical framing centered on human bedside presence, non-clinical patient mobility, family peace of mind, and verified credentials.

---

## Architectural Systems

```
caretaker/
├── app/
│   ├── globals.css            # Agency design tokens, typography, glassmorphism
│   ├── layout.tsx             # Root document container & SEO metadata
│   └── page.tsx               # Reactive orchestration of page sections
├── components/
│   ├── Header.js              # Frosted floating navigation with city dispatch badge
│   ├── HeroSection.js         # Editorial headline, proof metrics & interactive card
│   ├── WellnessSection.js     # Care Disciplines bento grid (Hospital, Home, Senior)
│   ├── HealthcareSection.js   # 4-Pillar Clinical Care Protocol & standards
│   ├── PlansSection.js        # Transparent concierge tiers (Hourly, 12H, 24/7)
│   ├── FormSection.js         # Reactive booking intake with instant reference ID
│   └── Footer.js              # Institutional brand credibility & legal notices
└── pages/
    ├── admin.js               # Administrative booking management & CSV export
    └── api/
        ├── book.js            # Inpatient intake webhook (Twilio & Google Sheets)
        └── googlesheets.js    # Data retrieval for authenticated staff
```

---

## Platform Features

1. **Bedside In-Patient Guardianship:** Dedicated round-the-clock observation in hospital wards, fluid intake logging, and nursing staff coordination.
2. **Transitional Home Convalescence:** Safe transfers, medication reminders, and fall prevention during vulnerable post-discharge weeks.
3. **Specialized Senior Companionship:** Empathetic, unhurried presence for dementia and chronic care support.
4. **Interactive Intake Engine:** Direct intake with schedule selection, validation, and real-time coordinator dispatch.
5. **Hospital Staff Administration:** Built-in `/admin` dashboard with search filtering, status tagging, and one-click CSV export.

---

## Local Development

```bash
# Clone repository
git clone https://github.com/Ghost-9/caretaker.git

# Enter project directory
cd caretaker

# Install dependencies
npm install

# Start local development server
npm run dev

# Build production bundle
npm run build
```

Open [http://localhost:3000](http://localhost:3000) to view the application.

---

## License

This project is licensed under the [MIT License](LICENSE).

<div align="center">
  <sub>Crafted by <a href="https://github.com/Ghost-9">Mayank Batra</a></sub>
</div>
