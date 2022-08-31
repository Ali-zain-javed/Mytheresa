import Head from 'next/head'
import "../styles/index.scss";
import { Nav } from '../components'
import AppProvider from '../store/AppContext';
function MyApp({ Component, pageProps }) {
  return (
    <AppProvider>
      <Head>
        <title>Mytheresa</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Nav />
      <Component {...pageProps} />
    </AppProvider>
  )
}

export default MyApp;
