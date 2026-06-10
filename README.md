# 🔬 ScienceLab OS — STE Secondaire 3 · Québec

Système interactif complet de révision pour l'examen final de **Science et Technologie de l'Environnement (STE) — Secondaire 3**, programme officiel PFEQ du Québec.

> Toutes les applications sont des fichiers HTML autonomes — aucune installation, aucun serveur, aucune connexion internet requise après le premier chargement.

---

## 🚀 Démarrage rapide

1. **Téléchargez** ou clonez ce dépôt
2. **Ouvrez** `dashboard.html` dans votre navigateur
3. Cliquez sur n'importe quel module pour l'ouvrir

**Ou visitez directement :** https://[votre-username].github.io/sciencelab-ste3/

---

## 📦 Structure des fichiers

```
sciencelab-ste3/
│
├── dashboard.html        ← 🖥️  Point d'entrée — bureau interactif
│
├── index.html            ← ⚡  Quiz principal (4 univers, 28 questions)
├── quiz.js               ←     Données du quiz (questions trilingues)
├── style.css             ←     Styles du quiz
│
├── lab-ph.html           ← 🧪  Laboratoire pH interactif
├── lab-drag.html         ← 🧩  Glisser & Ordonner (4 modules)
├── lab-atom.html         ← ⚛️  Constructeur d'atomes
├── lab-cell.html         ← 🦠  Cellule vivante clickeable
├── lab-circuit.html      ← ⚡  Circuits électriques interactifs
├── lab-formulas.html     ← 🧮  Formules interactives (9 formules)
│
├── README.md             ← Ce fichier
├── .nojekyll             ← Pour GitHub Pages
└── .gitignore            ← Fichiers à ignorer
```

---

## 🎓 Modules disponibles

| Module | Fichier | Contenu | Quiz |
|--------|---------|---------|------|
| 🖥️ Dashboard | `dashboard.html` | Bureau — hub central | — |
| ⚡ Quiz STE | `index.html` | 28 questions · 4 univers | ✓ |
| 🧪 Labo pH | `lab-ph.html` | Slider pH 0-14 · 17 substances · bécher animé | ✓ 8q |
| 🧩 Glisser-Ordonner | `lab-drag.html` | Mitose · Digestion · Terre · Phases | ✓ |
| ⚛️ Constructeur atomes | `lab-atom.html` | Canvas · Tableau périodique · Ions | ✓ 8q |
| 🦠 Cellule vivante | `lab-cell.html` | Cellule animale & végétale · 10 organites | ✓ 8q |
| ⚡ Circuits électriques | `lab-circuit.html` | Série · Parallèle · Loi d'Ohm | ✓ 8q |
| 🧮 Formules interactives | `lab-formulas.html` | 9 formules bidirectionnelles | — |

---

## 📚 Programme couvert (STE Sec 3 — PFEQ Québec)

### ⚗️ Univers matériel
- Propriétés physiques & chimiques
- Masse volumique (ρ = m/V)
- Mélanges homogènes & hétérogènes
- Concentration (C = m/V) & dilution
- pH, acidité & basicité
- Changements physiques & chimiques
- Changements de phase
- Tableau périodique (18 premiers éléments) ⭐ STE+
- Réactions chimiques ⭐ STE+

### 🧬 Univers vivant
- Structure cellulaire (10 organites)
- ADN, gènes & chromosomes
- Mitose (6 phases) & méiose
- Respiration cellulaire & photosynthèse
- Systèmes : digestif, circulatoire, respiratoire, excréteur, nerveux, immunitaire
- Écosystèmes & chaînes alimentaires ⭐ STE+
- Biomes & perturbations ⭐ STE+

### 🌍 Terre et espace
- Structure interne de la Terre (5 couches)
- Tectonique des plaques
- Types de roches & cycle des roches
- Fossiles & datation
- Ères géologiques
- Système solaire & énergie du Soleil
- Big Bang & univers
- Cycle de l'eau ⭐ STE+
- Changements climatiques ⭐ STE+

### ⚙️ Univers technologique
- Dessin technique & échelles
- Fonctions mécaniques élémentaires & complexes
- Pression (P = F/A) & loi de Pascal
- Systèmes hydrauliques & pneumatiques
- Électricité : V, I, R, loi d'Ohm (V = RI) ⭐ STE+
- Circuits série & parallèle ⭐ STE+
- Puissance (P = VI) ⭐ STE+

> ⭐ STE+ = contenu exclusif à STE (plus avancé que ST)

---

## 🌐 Langues

Tous les modules sont **trilingues** — FR 🇫🇷 / EN 🇬🇧 / ES 🇪🇸  
Changez de langue à tout moment avec le sélecteur en haut à droite.

---

## 🧩 Technologies utilisées

- **HTML5** — structure sémantique
- **CSS3** — animations, glassmorphism, variables CSS
- **JavaScript vanilla** — aucune dépendance externe
- **SVG** — cellule, circuits, atomes dessinés vectoriellement
- **Canvas API** — étoiles animées (dashboard), atome (constructeur)
- **Web Animations API** — transitions et effets
- **Google Fonts** — Outfit, JetBrains Mono, Fira Code, Space Mono, Syne, DM Sans

---

## 📄 Licence

Contenu éducatif libre — usage personnel et scolaire autorisé.  
Basé sur le programme officiel PFEQ du Ministère de l'Éducation du Québec.

---

*Fait avec ❤️ pour aider- Secondaire 3 à réussir leur examen de STE.*
