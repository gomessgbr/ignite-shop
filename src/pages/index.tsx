import { GetStaticProps } from "next";

import Image from "next/image";
import Link from "next/link";
import Head from "next/head";

import { useKeenSlider } from "keen-slider/react";

import {
  HomeContainer,
  Product,
  FooterTextArea,
  FooterCartIconArea,
} from "@/styles/pages/home";

import "keen-slider/keen-slider.min.css";
import { stripe } from "@/lib/stripe";
import Stripe from "stripe";
import { Handbag } from "phosphor-react";
import {
  DebugCart,
  useShoppingCart,
  formatCurrencyString,
} from "use-shopping-cart";

interface HomeProps {
  products: {
    id: string;
    name: string;
    imageUrl: string;
    price: number;
  }[];
}

export default function Home({ products }: HomeProps) {
  const [sliderRef, instanceRef] = useKeenSlider({
    initial: 0,
    slides: {
      perView: 3,
      spacing: 48,
    },
  });

  const { addItem, clearCart } = useShoppingCart();
  console.log("Toma no cu pae", useShoppingCart());

  return (
    <>
      <Head>
        <title>Home | Ignite Shop</title>
      </Head>

      <HomeContainer ref={sliderRef} className="keen-slider">
        <button onClick={() => clearCart()}>Clean Cart</button>
        {products.map((product) => {
          return (
            <>
              <button
                onClick={() =>
                  console.log("Testando", formatCurrencyString(product.price))
                }
              >
                Zica Testando tudo
              </button>
              <Product className="keen-slider__slide">
                <Image src={product.imageUrl} alt="" width="520" height="480" />

                <footer>
                  <FooterTextArea>
                    <strong>{product.name}</strong>
                    <span>{product.price}</span>
                  </FooterTextArea>
                  <FooterCartIconArea onClick={() => addItem(product)}>
                    <Handbag size={26} />
                  </FooterCartIconArea>
                </footer>
              </Product>
            </>
          );
        })}
      </HomeContainer>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const response = await stripe.products.list({
    expand: ["data.default_price"],
  });

  const products = response.data.map((product) => {
    const price = product.default_price as Stripe.Price;
    return {
      id: product.id,
      name: product.name,
      imageUrl: product.images[0],
      price: new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL",
      }).format(Number(price.unit_amount) / 100),
    };
  });

  return {
    props: {
      products,
    },
    revalidate: 60 * 60 * 2, // 2 hrs
  };
};
