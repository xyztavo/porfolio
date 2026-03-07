# Portfolio Configuration Guide

This portfolio is built with a centralized configuration system. All content, projects, experiences, and personal information can be easily customized by editing a single file.

## Quick Start

**All configuration is managed in: `src/config/site.ts`**

Simply edit this file to customize your portfolio. No need to touch any component or page files!

## What You Can Configure

### 1. Personal Information
```typescript
personal: {
  name: "Your Name",
  role: "Your Role",
  greeting: "Hi, I am",
  profileImage: "/your-image.jpg", // Place image in /public folder
  bio: [
    "First paragraph of your bio...",
    "Second paragraph...",
  ],
  areasOfInterest: [
    "Interest 1",
    "Interest 2",
  ],
}
```

### 2. Contact Information
```typescript
contact: {
  email: "your@email.com",
  phone: "+1 234 567 8900",
  location: "Your City, State",
  linkedin: "https://linkedin.com/in/yourprofile",
  github: "https://github.com/yourusername",
}
```

### 3. Languages
```typescript
languages: [
  { name: "English", level: "Native" },
  { name: "Spanish", level: "Fluent" },
]
```

### 4. Skills
Organized by categories: `backend`, `frontend`, `databases`, `tools`, `infrastructure`

```typescript
skills: {
  frontend: {
    title: "Frontend",
    items: [
      { 
        name: "React", 
        icon: "https://cdn.simpleicons.org/react/white" 
      },
      // Add more...
    ],
  },
  // Other categories...
}
```

**Icon URLs**: Use [Simple Icons CDN](https://simpleicons.org/)
- Format: `https://cdn.simpleicons.org/{techname}/white`
- Example: `https://cdn.simpleicons.org/react/white`

### 5. Projects
```typescript
projects: [
  {
    title: "Project Name",
    description: "Project description...",
    tags: ["Tech1", "Tech2", "Tech3"],
    github: "https://github.com/user/repo", // Optional
    liveUrl: "https://project-url.com",     // Optional
    featured: true,      // Shows "Featured" badge
    contributed: false,  // Shows "Contributed" badge
  },
]
```

### 6. Work & Education Timeline
```typescript
experiences: [
  {
    type: "work", // or "education"
    title: "Your Position",
    organization: "Company/School Name",
    location: "City, State",
    period: "Jan 2023 - Present",
    description: "What you did...",
    tags: ["Tech1", "Tech2"], // Optional
  },
]
```

### 7. Page Content
Customize titles, subtitles, and CTA buttons for each page:

```typescript
pages: {
  home: {
    title: "Your Name",
    subtitle: "Your tagline...",
    ctaText: "View My Work",
    ctaLink: "/work",
  },
  // Similar for: about, skills, work, experiences
}
```

### 8. Site Metadata
```typescript
metadata: {
  title: "Your Name - Your Role",
  description: "Brief description for SEO...",
  author: "Your Name",
}
```

## Tips

1. **Profile Image**: Place your image in the `/public` folder and reference it as `/filename.ext`
2. **Icons**: All skill icons use grayscale filter automatically to match the monochrome theme
3. **Order Matters**: Projects and experiences are displayed in the order they appear in the array
4. **Optional Fields**: 
   - Projects: `github` and `liveUrl` are optional
   - Experiences: `tags` array is optional

## Example Customization Flow

1. Open `src/config/site.ts`
2. Update your personal information
3. Add your projects
4. Add your work experiences
5. Customize your skills
6. Save the file
7. Done! Your portfolio is updated

## For Other Developers

This portfolio template is designed to be easily reusable:

1. Clone the repository
2. Edit `src/config/site.ts` with your information
3. Replace `/public/profile.img` with your profile photo
4. Run `bun dev` to preview
5. Deploy!

No need to understand the codebase or modify components. Everything is controlled through the config file.
