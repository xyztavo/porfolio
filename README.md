# Lunar Portfolio

A modern, minimalist portfolio website built with Astro, TailwindCSS, and TypeScript. Fully customizable through a single configuration file.

## Tech Stack

- **[Astro](https://astro.build)** - Static site generator
- **[TailwindCSS](https://tailwindcss.com)** - Utility-first CSS framework
- **[TypeScript](https://www.typescriptlang.org/)** - Type-safe JavaScript
- **[Lucide](https://lucide.dev/)** - Icon library

## Features

- Single configuration file for all content
- Responsive design
- Fast and SEO-friendly
- Type-safe configuration
- Easy to customize and deploy

## Getting Started

### Installation

```bash
# Install dependencies
npm install
# or
bun install
```

### Development

```bash
npm run dev
```

Visit `http://localhost:4321` to see your portfolio.

### Build

```bash
npm run build
```

### Preview

```bash
npm run preview
```

## Configuration

All portfolio content is managed through a single configuration file at `src/config/site.ts`. Edit this file to customize your portfolio with your own information.

### Configuration Example

```typescript
export const siteConfig = {
  // Personal Information
  personal: {
    name: "Your Name",
    role: "Your Role",
    greeting: "Hi, I am",
    profileImage: "/profile.png",
    bio: [
      "First paragraph about yourself...",
      "Second paragraph...",
      "Third paragraph...",
    ],
    areasOfInterest: [
      "Area 1",
      "Area 2",
      "Area 3",
    ],
  },

  // Contact Information
  contact: {
    email: "your.email@example.com",
    phone: "+1 234 567 8900",
    location: "Your City, Country",
    linkedin: "https://linkedin.com/in/yourprofile",
    github: "https://github.com/yourusername",
  },

  // Languages
  languages: [
    { name: "English", level: "Native" },
    { name: "Spanish", level: "Professional" },
  ],

  // Skills organized by category
  skills: {
    backend: {
      title: "Backend",
      items: [
        {
          category: "Node.js",
          technologies: [
            { name: "Express", icon: "https://cdn.simpleicons.org/express/white" },
            { name: "Fastify", icon: "https://cdn.simpleicons.org/fastify/white" },
          ],
        },
      ],
    },
    frontend: {
      title: "Frontend",
      items: [
        { name: "React", icon: "https://cdn.simpleicons.org/react/white" },
        { name: "TypeScript", icon: "https://cdn.simpleicons.org/typescript/white" },
      ],
    },
  },

  // Projects
  projects: [
    {
      title: "Project Name",
      description: "Brief description of your project.",
      tags: ["Tech1", "Tech2", "Tech3"],
      github: "https://github.com/yourusername/project",
      liveUrl: "https://project-demo.com",
      featured: true,
    },
  ],

  // Work & Education Timeline
  experiences: [
    {
      type: "work", // or "education"
      title: "Job Title",
      organization: "Company Name",
      location: "City, Country",
      period: "January 2024 - Present",
      description: "Brief description of your role and achievements.",
      tags: ["Skill1", "Skill2"],
    },
  ],

  // Site Metadata
  metadata: {
    title: "Your Name - Portfolio",
    description: "Your professional description.",
    author: "Your Name",
  },
};
```

## Project Structure

```
lunar-portfolio/
├── public/              # Static assets (images, fonts, etc.)
├── src/
│   ├── components/      # Reusable Astro components
│   ├── config/
│   │   └── site.ts     # Main configuration file
│   ├── pages/          # Route pages
│   └── styles/         # Global styles
├── astro.config.mjs    # Astro configuration
├── package.json
└── tsconfig.json
```

## Customization

1. **Profile Image**: Add your profile image to the `public/` directory
2. **Content**: Edit `src/config/site.ts` with your information
3. **Styling**: Modify TailwindCSS classes in components
4. **Pages**: Add or remove pages in the `src/pages/` directory

## License

GPL V3
