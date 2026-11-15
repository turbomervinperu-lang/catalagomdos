// pages/_app.js
import '../styles/globals.css';
import { CartProvider } from '../components/CartContext';

function MyApp({ Component, pageProps }) {
  return (
    <CartProvider>
      <Component {...pageProps} />
    </CartProvider>
  );
}

export default MyApp;

