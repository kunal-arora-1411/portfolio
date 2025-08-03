# AI Portfolio Website

[Live Demo](https://kunal-arora-1411.github.io/portfolio/)

A personal portfolio site for **Kunal Arora**, showcasing skills, projects, experience, and contact information. Built with React, Vite, Tailwind CSS, Framer Motion, and Three.js.

---

## 📌 Features

- **3D Hero Section**: Spinning sphere background powered by React Three Fiber
- **Smooth Animations**: Section fades and navigation transitions via Framer Motion
- **Responsive Layout**: Tailwind CSS ensures a mobile-first, responsive design
- **Projects Showcase**: Cards linking to GitHub repositories
- **Experience Timeline**: Chronological display of education and internships
- **Contact Form**: EmailJS integration for direct messaging

---

## 🛠️ Technologies Used

- **React** 18
- **Vite** for blazing-fast bundling
- **Tailwind CSS** for utility-first styling
- **Framer Motion** for animations
- **React Three Fiber** & **Three.js** for 3D graphics
- **EmailJS** for contact form submissions

---

## 🚀 Getting Started

1. **Clone the repo**

   ```bash
   git clone https://github.com/kunal-arora-1411/portfolio.git
   cd portfolio
   ```

2. **Install dependencies**

   ```bash
   npm install --legacy-peer-deps
   # or
   yarn install
   ```

3. **Run in development**

   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Build for production**

   ```bash
   npm run build
   # or
   yarn build
   ```

5. **Preview production build locally**

   ```bash
   npm run preview
   # or
   yarn preview
   ```

---

## 📦 Deployment to GitHub Pages

Ensure your `package.json` includes:
```json
"homepage": "https://kunal-arora-1411.github.io/portfolio/",
"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d dist"
}
```

Then run:
```bash
npm run deploy
# or
yarn deploy
```

The site will be available at: **https://kunal-arora-1411.github.io/portfolio/**

---

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/MyFeature`)
3. Commit your changes (`git commit -m "Add MyFeature"`)
4. Push to the branch (`git push origin feature/MyFeature`)
5. Open a Pull Request

---
