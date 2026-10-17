# kiritish.uz

**kiritish.uz** is a web-based guide and resource hub designed to help users easily configure and type the new Uzbek Latin alphabet characters (**Şş**, **Çç**, **Öö**, and **Ğğ**) across various operating systems and devices.

## 🛠️ Built With

This project is built using modern web technologies:

- **[Astro](https://astro.build/)** (v7) - Fast, content-focused static site generator
- **[Tailwind CSS](https://tailwindcss.com/)** (v4) & **[daisyUI](https://daisyui.com/)** (v5) - For styling and component UI
- **[Swiper](https://swiperjs.com/)** - Touch-enabled image carousels/sliders for tutorials
- **Lucide Icons** - Clean vector icons
- **Nix / Devenv** - Environment management and formatting tools

## 📁 Project Structure

```txt
kiritish.uz
├── astro.config.mjs         # Astro configuration & redirect rules
├── package.json             # Dependencies and scripts
├── public                   # Static assets, fonts, layouts, and downloads (.zip, .keylayout)
├── src
│   ├── assets               # Images, icons, and keyboard screenshots
│   ├── components           # Reusable UI components (Header, Footer)
│   ├── layouts              # Page layouts (Layout.astro)
│   ├── pages                # Main routes & guides (index, windows, macos, linux, etc.)
│   └── styles               # Global CSS styles
└── tsconfig.json            # TypeScript configuration

```

## ⚙️ Local Development Setup

To run the project locally on your machine, follow these steps:

1. **Clone the repository:**

```bash
git clone https://github.com/itsbilolbek/kiritish.uz.git
cd kiritish.uz

```

2. **Install dependencies:**
   Make sure you have **Node.js (>=22.12.0)** installed.

```bash
npm install

```

3. **Run the development server:**

```bash
npm run dev

```

Open [http://localhost:4321](http://localhost:4321) in your browser to view the site. 4. **Build for production:**

```bash
npm run build

```

## 📄 License

This project is open-source and available under the **MIT License**.
