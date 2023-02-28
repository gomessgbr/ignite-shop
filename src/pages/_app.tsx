import { globalStyles } from "@/styles/global";
import Image from "next/image";
import type { AppProps } from "next/app";
import logoIgniteShop from "../assets/igniteshoplogo.svg";
import {
  Container,
  Header,
  HeaderCartWrapper,
  HeaderCartButton,
  RoudedCartCount,
} from "@/styles/pages/app";
import { CartProvider } from "use-shopping-cart";
import { Handbag } from "phosphor-react";
import Link from "next/link";

globalStyles();

export default function App({ Component, pageProps }: AppProps) {
  return (
    <CartProvider
      mode="payment"
      cartMode="checkout-session"
      stripe={process.env.STRIPE_PUBLIC_KEY}
      currency="BRL"
    >
      <Container>
        <Header>
          <Image src={logoIgniteShop} alt="" />
          <HeaderCartWrapper>
            <Link href={`/checkoutPage`}>
              <Handbag size={26} />
            </Link>
            <RoudedCartCount>1</RoudedCartCount>
          </HeaderCartWrapper>
        </Header>
        <Component {...pageProps} />
      </Container>
    </CartProvider>
  );
}
