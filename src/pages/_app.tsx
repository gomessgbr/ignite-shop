import { globalStyles } from "@/styles/global";
import Image from "next/image";
import type { AppProps } from "next/app";
import logoIgniteShop from "../assets/igniteshoplogo.svg";
import { Container, Header } from "@/styles/pages/app";
import { CartProvider } from "use-shopping-cart";
import { Handbag } from "phosphor-react";

globalStyles();

export default function App({ Component, pageProps }: AppProps) {
  return (
    <CartProvider
      mode="payment"
      cartMode="checkout-session"
      stripe={process.env.STRIPE_PUBLIC_KEY}
      currency="USD"
    >
      <Container>
        <Header>
          <Image src={logoIgniteShop} alt="" />
          <button>
            <Handbag size={32} />
          </button>
        </Header>
        <Component {...pageProps} />
      </Container>
    </CartProvider>
  );
}
