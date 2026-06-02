module.exports = {
  content: [
    './_drafts/**/*.html',
    './_includes/**/*.html',
    './_layouts/**/*.html',
    './_posts/*.md',
    './*.md',
    './*.html',
    // Nested content pages added in later passes — keep their classes from being purged.
    './solutions/**/*.{md,html}',
    './platform/**/*.{md,html}',
    './developers/**/*.{md,html}',
    './resources/**/*.{md,html}',
    './about/**/*.{md,html}',
    // Vanilla-JS toggles class names that must survive the purge.
    './assets/js/**/*.js',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#f5f0ff',
          100: '#ede5ff',
          200: '#dccfff',
          300: '#c4aaff',
          400: '#aa80ff',
          500: '#9969ff',
          600: '#854dff',
          700: '#7c4dff',
          800: '#6a30e0',
          900: '#5a20b8',
          950: '#351070',
          DEFAULT: '#9969ff',
          foreground: '#7c4dff',
        },
        background: 'var(--color-background)',
        foreground: 'var(--color-foreground)',
        border: 'var(--color-border)',
        muted: {
          DEFAULT: 'var(--color-muted)',
          foreground: 'var(--color-muted-foreground)',
        },
        card: {
          DEFAULT: 'var(--color-card)',
          foreground: 'var(--color-card-foreground)',
        },
      },
      fontFamily: {
        heading: ['Poppins', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        mono: ['Geist Mono', 'ui-monospace', 'SFMono-Regular', 'monospace'],
      },
      borderRadius: {
        '4xl': '2rem',
      },
    },
  },
  plugins: []
}
