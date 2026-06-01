# Fanfinity Website

A Jekyll-based website with Tailwind CSS, deployed to GitHub Pages.

## Project Structure

```
website/
├── _config.yml          # Jekyll configuration
├── _layouts/
│   └── default.html     # Base HTML layout
├── assets/
│   └── css/
│       └── main.css     # Built Tailwind CSS (generated)
├── src/
│   └── main.css         # Tailwind CSS source
├── index.md             # Homepage content
├── logo.svg             # Site logo
├── Gemfile              # Ruby dependencies
├── package.json         # Node dependencies & scripts
├── tailwind.config.js   # Tailwind configuration
├── postcss.config.js    # PostCSS configuration
└── .github/
    └── workflows/
        └── jekyll-gh-pages.yml  # GitHub Actions deployment
```

## Prerequisites

- Ruby 3.x
- Bundler (`gem install bundler`)
- Node.js 20.x
- npm

## Local Development

1. **Install dependencies:**

   ```bash
   bundle install
   npm install
   ```

2. **Run development server:**

   ```bash
   npm run dev
   ```

   This starts Tailwind CSS in watch mode and Jekyll with live reload at `http://localhost:4000`.

3. **Build for production:**

   ```bash
   npm run build
   ```

   Output is generated in the `_site/` directory.

## Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server with live reload |
| `npm run build` | Build CSS and Jekyll for production |
| `npm run css:build` | Build Tailwind CSS only |
| `npm run css:watch` | Watch and rebuild CSS on changes |

## Deployment

The site deploys to GitHub Pages via manual trigger only.

### GitHub Actions Workflow

The workflow (`.github/workflows/jekyll-gh-pages.yml`) does the following:

1. Checks out the repository
2. Sets up Ruby and installs gems
3. Sets up Node.js and installs npm packages
4. Builds Tailwind CSS
5. Builds Jekyll with the correct `baseurl`
6. Deploys to GitHub Pages

### Triggering Deployment

To deploy:

1. Go to the repository on GitHub
2. Navigate to **Actions** > **Deploy Jekyll site to Pages**
3. Click **Run workflow**

### GitHub Pages Setup

Ensure your repository settings are configured:

1. Go to **Settings** > **Pages**
2. Under **Build and deployment**, select **GitHub Actions** as the source

The site will be available at `https://<username>.github.io/<repository>/`.
