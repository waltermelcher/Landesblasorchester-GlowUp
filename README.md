# Landesblasorchester BW — Glow Up

Ein modernes Design-Redesign („Glow Up“) der Website des
[Landesblasorchesters Baden-Württemberg](https://www.landesblasorchester.de/),
gebaut mit dem [Astro](https://astro.build)-Framework.

**Live:** https://waltermelcher.github.io/Landesblasorchester-GlowUp/

## Konzept

- **Stil:** Modern & bold, dunkles Anthrazit mit den echten Markenfarben aus dem
  LBO-Logo (Bordeaux/Weinrot `#a34f61` / `#631f31`) und weißer Typografie.
- **Typografie:** Sora (Display) + Inter (Fließtext).
- **Animationen:** Dezente, smoothe Reveal-on-Scroll-Effekte (respektiert
  `prefers-reduced-motion`).
- Struktur, Texte, Bilder und Sitemap der Originalseite wurden beibehalten.
- Rechtsseiten (Impressum, Datenschutz, Haftung) enthalten **Dummytexte**.

## Entwicklung

```bash
npm install
npm run dev      # lokaler Dev-Server
npm run build    # Produktions-Build nach dist/
npm run preview  # Build lokal ansehen
```

## Deployment

Push auf `main` löst den GitHub-Actions-Workflow
(`.github/workflows/deploy.yml`) aus, der die Seite baut und auf GitHub Pages
veröffentlicht. `site` und `base` sind in `astro.config.mjs` konfiguriert.

## Seitenstruktur

- **Start** · Konzerte (Termine, Programm)
- **Medien** · CDs & DVDs, Wildflowers, Presse, Newsletter (+ externe Social-Links, Fanshop)
- **Orchester** · Über uns, Künstlerische Leitung, Vorstand, Mitglied werden, LBO-hautnah, Lehrkonzert
- **Förderverein**, **Kontakt**
- **Aktuelles** · drei News-Artikel
- **Rechtliches** · Impressum, Datenschutzerklärung, Haftung (Dummytexte)

---

🤖 Erstellt mit [Claude Code](https://claude.com/claude-code)
