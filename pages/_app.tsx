import type { AppProps } from 'next/app';
import { ThemeProvider } from '@mui/material/styles';
import theme from '@utils/theme';
import '../global.scss';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
