# KBayona — Personal Portfolio

A modern, responsive portfolio website built with **Vue 3**, **Vite**, and **Tailwind CSS**. Features a sleek dark/light mode, smooth scroll-triggered animations, an interactive terminal overlay, and a fully responsive design with a mobile hamburger menu.

## ✨ Features

- **Responsive Design** — Optimized for all screen sizes with a slide-out mobile menu
- **Dark / Light Mode** — Toggle between themes with smooth transitions
- **Smooth Animations** — Scroll-triggered entrance effects powered by [Motion](https://motion.dev)
- **Interactive Terminal** — A fun command-line overlay (try `help`, `whoami`, `skills`, `contact`)
- **Tech Stack Carousel** — Auto-scrolling banner showcasing technologies
- **Project Showcase** — Highlighted works with hover effects and category tags

## 🛠️ Tech Stack

| Technology | Purpose |
|------------|---------|
| [Vue 3](https://vuejs.org/) | UI framework (Composition API + `<script setup>`) |
| [Vite](https://vitejs.dev/) | Build tool and dev server |
| [Tailwind CSS](https://tailwindcss.com/) | Utility-first styling |
| [Lucide Icons](https://lucide.dev/) | Icon library |
| [Motion](https://motion.dev/) | Scroll-triggered animations |
| [TypeScript](https://www.typescriptlang.org/) | Type safety |

## 🚀 Getting Started

**Prerequisites:** [Node.js](https://nodejs.org/) (v18+)

```bash
# Clone the repository
git clone https://github.com/keanuace0223/KBayona.git
cd KBayona

# Install dependencies
npm install

# Start development server
npm run dev
```

The site will be available at `http://localhost:5173`.

## 📁 Project Structure

```
KBayona/
├── App.vue                 # Main layout (navigation, hero, sections, footer)
├── main.ts                 # Vue app entry point
├── index.html              # HTML shell with Tailwind config
├── constants.tsx           # Project & experience data
├── types.ts                # TypeScript interfaces
├── components/
│   ├── ProjectCard.vue     # Project showcase card
│   ├── ExperienceItem.vue  # Experience section item
│   └── TerminalOverlay.vue # Interactive terminal modal
└── assets/
    └── images/             # Tech stack logos & project screenshots
```

## 🌐 Deploying to GitHub Pages (Free)

1. **Add the Vite base path** — Open `vite.config.ts` and set `base` to your repo name:
   ```ts
   export default defineConfig({
     base: '/KBayona/',
     // ...existing config
   })
   ```

2. **Build the project:**
   ```bash
   npm run build
   ```

3. **Push your code to GitHub:**
   ```bash
   git add .
   git commit -m "Deploy portfolio"
   git push origin main
   ```

4. **Enable GitHub Pages:**
   - Go to your repo → **Settings** → **Pages**
   - Under **Source**, select **GitHub Actions**

5. **Create the deploy workflow** — Add `.github/workflows/deploy.yml`:
   ```yaml
   name: Deploy to GitHub Pages

   on:
     push:
       branches: [main]

   permissions:
     contents: read
     pages: write
     id-token: write

   jobs:
     deploy:
       runs-on: ubuntu-latest
       environment:
         name: github-pages
         url: ${{ steps.deployment.outputs.page_url }}
       steps:
         - uses: actions/checkout@v4
         - uses: actions/setup-node@v4
           with:
             node-version: 20
             cache: npm
         - run: npm ci
         - run: npm run build
         - uses: actions/configure-pages@v4
         - uses: actions/upload-pages-artifact@v3
           with:
             path: dist
         - id: deployment
           uses: actions/deploy-pages@v4
   ```

6. **Push the workflow and your site will be live at:**
   ```
   https://keanuace0223.github.io/KBayona/
   ```

## 📄 License

MIT
