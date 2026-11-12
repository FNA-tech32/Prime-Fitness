# Prime Fitness

Prime Fitness is a single-page gym site. It introduces the club, lists the weekly class schedule, shows membership prices, and gives visitors a way to get in touch.

The name **Prime Fitness** appears in the navigation, the hero, the page title, the about section, and the footer.

## Sections

The home page (`/`) is one scrolling page:

- **Accueil** — full-screen hero with the Prime Fitness name, a short line about transforming body and mind, and a join button.
- **Programme** — weekday class schedule (Lundi through Vendredi) with time, class, and coach. Days switch with tabs.
- **À propos** — two blocks about the gym and how Prime Fitness trains members.
- **Tarifs** — three plans: group classes (60 min), cardio and strength (90 min), and children’s rates, shown in Algerian dinar (DA).
- **Transformation** — a call to start training with the club’s coaches.
- **Contact** — address, phone, alternative phone, email, alternative email, a short message form, and a map of the club.

## Contact

- Address: 48 Lake View Road, Anna Nagar, Chennai 600040, India
- Phone: +91 44 4280 9100
- Alternative phone: +91 44 4280 9101
- Email: hello@primefitness.in
- Alternative email: support@primefitness.in
- Site: [primefitness.in](https://primefitness.in)

The same details are on the contact cards and in the footer.

## Stack

Next.js 15 (App Router), React 19, Tailwind CSS, and Framer Motion. Class photos live in `public/images`.

## Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

Production build:

```bash
npm run build
npm start
```
