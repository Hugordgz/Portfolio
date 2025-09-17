# Data Portfolio - Hugo Rodriguez

A modern, responsive portfolio website showcasing data analytics and visualization projects built with React 18, TypeScript, Tailwind CSS, and Framer Motion.

## 🚀 Features

- **Modern Tech Stack**: React 18 + TypeScript + Vite for fast development
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Smooth Animations**: Framer Motion for engaging user interactions
- **Dynamic Project Cards**: Different layouts for Power BI, Python, and SQL projects
- **Contact Form**: Integrated mailto functionality
- **Performance Optimized**: Fast loading and smooth transitions

## 📋 Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── Navigation.tsx   # Main navigation bar
│   ├── Footer.tsx       # Site footer
│   ├── Layout.tsx       # Main layout wrapper
│   ├── ProjectCard.tsx  # Dynamic project cards
│   └── LoadingSpinner.tsx
├── pages/              # Main application pages
│   ├── Home.tsx        # Landing page with hero section
│   ├── About.tsx       # About page with skills grid
│   ├── Projects.tsx    # Projects showcase
│   └── Contact.tsx     # Contact form
├── data/               # Static data files
│   ├── projects.ts     # Project information
│   └── skills.ts       # Skills and categories
├── types/              # TypeScript type definitions
│   └── index.ts
└── index.css          # Global styles and Tailwind config
```

## 🛠️ Technologies Used

- **Frontend Framework**: React 18 with TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Routing**: React Router DOM
- **Icons**: Heroicons (via SVG)

## 🚀 Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd Portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:3000`

### Build for Production

```bash
npm run build
```

The built files will be in the `dist` directory, ready for deployment.

## 📱 Pages Overview

### Home Page
- Hero section with animated introduction
- Core expertise preview
- Featured projects showcase
- Call-to-action buttons

### About Page
- Professional biography
- Education and certifications
- Comprehensive skills grid organized by category
- Professional highlights with statistics

### Projects Page
- Filterable project grid (All, Power BI, Python, SQL)
- Dynamic project cards with different layouts:
  - **Power BI**: Embedded dashboard previews
  - **Python**: Links to GitHub and NBViewer
  - **SQL**: Expandable code blocks with queries
- Featured projects section
- Responsive grid layout

### Contact Page
- Contact form with validation
- Mailto integration
- Contact information cards
- Response time information

## 🎨 Customization

### Adding New Projects

Edit `src/data/projects.ts` to add new projects:

```typescript
{
  id: 'unique-id',
  type: 'powerbi' | 'python' | 'sql',
  title: 'Project Title',
  description: 'Project description',
  tech: ['Technology', 'Stack'],
  embedUrl: 'https://...', // For Power BI
  link: 'https://github.com/...', // For Python/SQL
  query: 'SQL query string', // For SQL projects
  featured: true // Optional
}
```

### Updating Skills

Modify `src/data/skills.ts` to update your skills:

```typescript
{
  name: 'Skill Name',
  category: 'programming' | 'database' | 'visualization' | 'analytics' | 'cloud',
  level: 'beginner' | 'intermediate' | 'advanced' | 'expert'
}
```

### Styling Customization

- **Colors**: Update `tailwind.config.js` for color scheme changes
- **Animations**: Modify Framer Motion variants in components
- **Layout**: Adjust responsive breakpoints in Tailwind classes

## 🌐 Deployment

This project is ready for deployment on:

- **Vercel**: Connect your GitHub repository for automatic deployments
- **Netlify**: Drag and drop the `dist` folder or connect via Git
- **GitHub Pages**: Use GitHub Actions for automated deployment

### Vercel Deployment

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Vercel will automatically detect the Vite configuration
4. Your site will be live at `https://your-project.vercel.app`

### Netlify Deployment

1. Build the project: `npm run build`
2. Upload the `dist` folder to Netlify
3. Or connect your Git repository for continuous deployment

## 📧 Contact Information

Update the contact information in:
- `src/pages/Contact.tsx` - Contact form and information
- `src/components/Footer.tsx` - Footer social links

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Feel free to fork this project and customize it for your own portfolio. If you find any bugs or have suggestions for improvements, please open an issue or submit a pull request.

---

Built with ❤️ by Hugo Rodriguez
