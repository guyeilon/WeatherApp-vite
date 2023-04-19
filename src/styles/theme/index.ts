import colors from 'styles/theme/colors';
import typography from 'styles/theme/typography';
import breakpoints from 'styles/theme/breakpoints';
import scrollbar from 'styles/theme/scrollbar';

const theme = (mode: 'light' | 'dark') => ({
  mode,
  colors,
  typography,
  breakpoints,
  scrollbar,
});

export default theme;
