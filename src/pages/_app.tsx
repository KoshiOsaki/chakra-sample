import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { ChakraProvider } from '@chakra-ui/react';
import theme from '../styles/theme';
import { Meta } from '../components/Meta';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Meta />
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
