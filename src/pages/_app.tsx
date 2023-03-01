import { globalStyles } from "@/styles/global";
import Image from "next/image";
import type { AppProps } from "next/app";

import { Container } from "@/styles/pages/app";

import { Handbag } from "phosphor-react";
import Link from "next/link";
import { Header } from "@/components/Header";

globalStyles();

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Container>
      <Header />
      <Component {...pageProps} />
    </Container>
  );
}
