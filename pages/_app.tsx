import type { AppProps } from 'next/app';
// mui
import { ThemeProvider } from '@mui/material/styles';
// utils
import theme from '@utils/theme';
// styles
import '../global.scss';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
