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
});

export const { scale, rhythm, options } = typography;
export const fontFamily = fonts.join(',');
export default typography;
