// pages/_app.js
import 'bootstrap/dist/css/bootstrap.min.css';

import Navbar from '../Component/Navbar';

export default function MyApp({ Component, pageProps }) {
  return <>
    <Navbar />
    <Component {...pageProps} />;
  </>
}
