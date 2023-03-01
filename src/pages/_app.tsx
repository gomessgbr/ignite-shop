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

import { Handbag } from "phosphor-react";
import Link from "next/link";

globalStyles();

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Container>
      <Header>
        <Image src={logoIgniteShop} alt="" />
        <HeaderCartWrapper>
          <HeaderCartButton>
            <Handbag size={26} />
          </HeaderCartButton>
          <RoudedCartCount>1</RoudedCartCount>
        </HeaderCartWrapper>
      </Header>
      <Component {...pageProps} />
    </Container>
  );
}
