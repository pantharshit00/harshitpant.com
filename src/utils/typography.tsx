import Typography from 'typography';

export const fonts = [
  'Rubik',
  '-apple-system',
  'BlinkMacSystemFont',
  'Segoe UI',
  'Helvetica',
  'Arial',
  'sans-serif',
  'Apple Color Emoji',
  'Segoe UI Emoji',
  'Segoe UI Symbol',
];

const typography = new Typography({
  baseFontSize: '16px',
  headerFontFamily: fonts,
  bodyFontFamily: fonts,
  overrideStyles: ({ rhythm }) => ({
    'h1,h2,h3,h4,h5,h6': {
      lineHeight: 1,
      fontWeight: 500,
    },
    'h1,h2,h3,h4': {
      lineHeight: 1.25,
      marginTop: rhythm(1),
      marginBottom: rhythm(1 / 2),
      letterSpacing: '-0.04rem',
    },
    code: {
      fontFamily: `"Victor Mono",SFMono-Regular,Consolas,"Liberation Mono",Menlo,Courier,monospace;`,
      fontWeight: 500,
      background: '#C6F6D5',
      color: '#2F855A',
      padding: '0.25rem',
      borderRadius: '4px',
    },
  }),
});

export const { scale, rhythm, options } = typography;
export const fontFamily = fonts.join(',');
export default typography;
