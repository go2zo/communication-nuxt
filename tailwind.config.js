module.exports = {
  mode: 'jit',
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        sans: [
          'Quicksand',
          // ...defaultTheme.fontFamily.sans
          "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'"
        ],
      },
      fontSize: {
        ss: '0.666666rem',
      },
      colors: {
        gray: 'var(--gray)',
        lightgreen: 'var(--lightgreen)',
        green: 'var(--green)',
        'primary-base': 'var(--primary-base)',
        onSurfacePrimary: 'var(--surface-primary)',
        onSufaceSecondary: 'var(--surface-secondary)',
        elevatedSurface: 'var(--surface-elevated)',
        line: 'var(--border-color)',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
