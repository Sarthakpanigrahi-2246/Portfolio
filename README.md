# Sarthak Panigrahi — Portfolio

Personal portfolio website for **Sarthak Panigrahi**, a full-stack developer and AI enthusiast. The site presents my experience, technical skills, projects, and ways to get in touch.

## About

I build full-stack web applications and AI-powered products with React, Node.js, TypeScript, MongoDB, and modern AI APIs.

This portfolio highlights:

- Full-stack architecture and REST API development
- AI integrations using the Gemini API
- React and TypeScript frontend development
- Authentication, data modeling, and responsive UI implementation
- Selected projects including NexHire, Dhekhona, and Uttam AI

## Built with

- **React 19**
- **Vite**
- **Tailwind CSS**
- **JavaScript (ES modules)**
- **Vercel** for deployment

## Features

- Responsive layout for mobile, tablet, and desktop
- Smooth section navigation
- Accessible skip link and visible keyboard focus states
- Reduced-motion support for users who prefer less animation
- Intersection Observer-based section reveal animations
- Dedicated Privacy Policy and Terms & Conditions pages
- Vercel rewrite configuration for client-side routes

## Getting started

### Prerequisites

- Node.js 18 or newer
- npm

### Installation

```bash
git clone https://github.com/Sarthakpanigrahi-2246/Portfolio.git
cd Portfolio
npm install
```

### Run locally

```bash
npm run dev
```

Open the local URL shown by Vite, usually `http://localhost:5173`.

### Create a production build

```bash
npm run build
```

### Preview the production build

```bash
npm run preview
```

## Project structure

```text
.
├── public/              # Static assets
├── src/
│   ├── components/      # Navbar, footer, icons
│   ├── pages/           # Home and legal pages
│   ├── App.jsx          # Client-side route handling
│   ├── data.js          # Portfolio content and project data
│   └── index.css        # Global styles and motion preferences
├── index.html
├── vercel.json           # SPA rewrite configuration
├── package.json
└── vite.config.js
```

## Deployment

The project is ready to deploy to Vercel:

1. Import the GitHub repository into Vercel.
2. Keep the framework preset as **Vite**.
3. Use `npm run build` as the build command.
4. Use `dist` as the output directory.
5. Deploy.

The included [`vercel.json`](./vercel.json) rewrites requests to `index.html`, allowing the privacy and terms routes to work correctly on refresh.

## Contact

- **Email:** [sarthakpanigrahi2218@gmail.com](mailto:sarthakpanigrahi2218@gmail.com)
- **GitHub:** [Sarthakpanigrahi-2246](https://github.com/Sarthakpanigrahi-2246)

## License

This repository is a personal portfolio. The source code is available for reference, but please do not copy personal content, branding, images, or resume materials without permission.
