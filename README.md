# 📊 Product Placement Analysis Dashboard

A sleek, modern dashboard for visualizing and analyzing product placement data. Built with a dark glassmorphism UI, animated card layouts, and fullscreen image viewing.

![Node.js](https://img.shields.io/badge/Node.js-18+-339933?logo=node.js&logoColor=white)
![Express](https://img.shields.io/badge/Express-4.x-000000?logo=express&logoColor=white)
![Bootstrap](https://img.shields.io/badge/Bootstrap-5.3-7952B3?logo=bootstrap&logoColor=white)

---

## ✨ Features

- **Dark Theme UI** — Modern glassmorphism design with gradient accents
- **Responsive Grid** — Cards auto-arrange across all screen sizes
- **Fullscreen Viewer** — Click any dashboard to view it in fullscreen with a modal overlay
- **Animated Cards** — Staggered fade-in animations on page load
- **Auto Image Loading** — Automatically detects and displays all images from the `static/images/` folder
- **Zero Config** — Just drop your images and go

---

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or higher)

### Installation

```bash
# Clone the repository
git clone https://github.com/your-username/tableau-analytics-dashboard.git
cd tableau-analytics-dashboard

# Install dependencies
npm install

# Start the server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 📁 Project Structure

```
├── server.ts              # Express server (API + static files)
├── templates/
│   └── index.html         # Main dashboard page
├── static/
│   ├── css/
│   │   └── style.css      # Custom styles (dark theme + animations)
│   └── images/            # Drop your dashboard images here
├── package.json
└── README.md
```

---

## 🖼️ Adding Images

Simply place `.png`, `.jpg`, `.jpeg`, `.gif`, or `.webp` files into the `static/images/` directory. The dashboard will automatically pick them up and display them as cards.

---

## 🛠️ Tech Stack

| Technology | Purpose |
|-----------|---------|
| **Express.js** | Backend server & API |
| **Bootstrap 5** | Responsive layout |
| **Custom CSS** | Dark theme, glassmorphism, animations |
| **Vanilla JS** | Dynamic card rendering |

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).
