# Deployment Guide - Data Portfolio

## 🚀 Quick Deployment Options

### Option 1: Vercel (Recommended)

1. **Push to GitHub**:
   ```bash
   git init
   git add .
   git commit -m "Initial commit: Data Portfolio"
   git branch -M main
   git remote add origin https://github.com/yourusername/portfolio.git
   git push -u origin main
   ```

2. **Deploy to Vercel**:
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import your GitHub repository
   - Vercel will auto-detect Vite configuration
   - Click "Deploy"
   - Your site will be live at `https://your-project.vercel.app`

### Option 2: Netlify

1. **Build the project locally**:
   ```bash
   npm install
   npm run build
   ```

2. **Deploy to Netlify**:
   - Go to [netlify.com](https://netlify.com)
   - Drag and drop the `dist` folder to Netlify
   - Or connect your Git repository for continuous deployment

### Option 3: GitHub Pages

1. **Install gh-pages**:
   ```bash
   npm install --save-dev gh-pages
   ```

2. **Add to package.json scripts**:
   ```json
   {
     "scripts": {
       "predeploy": "npm run build",
       "deploy": "gh-pages -d dist"
     }
   }
   ```

3. **Deploy**:
   ```bash
   npm run deploy
   ```

## 🔧 Pre-Deployment Checklist

### 1. Update Personal Information

- [ ] Update contact information in `src/pages/Contact.tsx`
- [ ] Update social media links in `src/components/Footer.tsx`
- [ ] Replace placeholder email addresses
- [ ] Update the site title in `index.html`

### 2. Customize Projects

- [ ] Replace sample projects in `src/data/projects.ts` with your actual projects
- [ ] Update Power BI embed URLs with your actual dashboards
- [ ] Update GitHub repository links
- [ ] Add real SQL queries for your projects

### 3. Update Skills

- [ ] Modify `src/data/skills.ts` with your actual skills and proficiency levels
- [ ] Update skill categories if needed

### 4. SEO and Meta Tags

- [ ] Update meta description in `index.html`
- [ ] Add Open Graph tags for social media sharing
- [ ] Consider adding a favicon

### 5. Performance Optimization

- [ ] Optimize images (if you add any)
- [ ] Test loading times
- [ ] Ensure all animations are smooth

## 🌐 Domain Configuration

### Custom Domain on Vercel

1. Go to your project dashboard on Vercel
2. Click "Settings" → "Domains"
3. Add your custom domain
4. Update your DNS settings as instructed

### Custom Domain on Netlify

1. Go to your site dashboard on Netlify
2. Click "Domain settings"
3. Add your custom domain
4. Update your DNS settings as instructed

## 📊 Analytics Setup (Optional)

### Google Analytics

1. Create a Google Analytics account
2. Get your tracking ID
3. Add the tracking script to `index.html`

### Vercel Analytics

1. Enable Vercel Analytics in your project settings
2. No additional setup required

## 🔒 Environment Variables

If you need to add environment variables:

### Vercel
1. Go to project settings
2. Add environment variables in the "Environment Variables" section

### Netlify
1. Go to site settings
2. Add environment variables in "Build & deploy" → "Environment"

## 🧪 Testing Before Deployment

1. **Local Testing**:
   ```bash
   npm run dev
   ```

2. **Build Testing**:
   ```bash
   npm run build
   npm run preview
   ```

3. **Cross-browser Testing**:
   - Test on Chrome, Firefox, Safari, Edge
   - Test on mobile devices

4. **Performance Testing**:
   - Use Lighthouse for performance audits
   - Check Core Web Vitals

## 📱 Mobile Optimization

The portfolio is already optimized for mobile with:
- Responsive design using Tailwind CSS
- Touch-friendly navigation
- Optimized animations for mobile
- Fast loading times

## 🔍 SEO Optimization

Current SEO features:
- Semantic HTML structure
- Meta descriptions
- Proper heading hierarchy
- Fast loading times
- Mobile-friendly design

## 📈 Monitoring and Maintenance

1. **Monitor Performance**:
   - Use Vercel/Netlify analytics
   - Set up Google Analytics
   - Monitor Core Web Vitals

2. **Regular Updates**:
   - Keep dependencies updated
   - Add new projects regularly
   - Update skills and experience

3. **Backup**:
   - Keep your code in version control
   - Regular commits to GitHub

## 🆘 Troubleshooting

### Common Issues

1. **Build Fails**:
   - Check for TypeScript errors
   - Ensure all dependencies are installed
   - Check the build logs

2. **Routing Issues**:
   - Ensure proper redirect rules are in place
   - Check `vercel.json` or `netlify.toml` configuration

3. **Styling Issues**:
   - Verify Tailwind CSS is properly configured
   - Check for CSS conflicts

### Getting Help

- Check the deployment platform's documentation
- Review build logs for specific errors
- Test locally before deploying

---

Your portfolio is now ready for deployment! 🎉
