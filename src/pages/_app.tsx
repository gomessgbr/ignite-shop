import { globalStyles } from "@/styles/global";
import Image from "next/image";
import type { AppProps } from "next/app";
import logoIgniteShop from "../assets/igniteshoplogo.svg";
import { Container, Header } from "@/styles/pages/app";

globalStyles();

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Container>
      <Header>
        <Image src={logoIgniteShop} alt="" />
      </Header>
      <Component {...pageProps} />
    </Container>
  );
}
