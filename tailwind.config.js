module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  purge: [],
  theme: {
    extend: {
      colors: {
        'custom-0-dblue': '#1A202C',
        'custom-1-dblue': '#2D3748',
        'custom-2-gray': '#A0AEC0',
        'custom-3-gray': '#00000033',
        'custom-4-blue': '#0057FF80',
        'custom-5-cyan': '#09EBC4',
      },
      spacing: {
        14: '3.5rem',
      },
      borderRadius: {
        xl: '0.75rem',
        '2xl': '1rem',
      },
    },
  },
  variants: {},
  plugins: [
    require('@tailwindcss/ui'),
  ],
};
