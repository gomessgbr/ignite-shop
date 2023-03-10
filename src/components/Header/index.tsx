import Image from "next/image";
import { Handbag } from "phosphor-react";
import {
  HeaderCartButton,
  HeaderCartWrapper,
  HeaderContainer,
  RoudedCartCount,
} from "./styles";

import logoIgniteShop from "../../assets/igniteshoplogo.svg";
import Link from "next/link";
import { useCart } from "@/hooks/useCart";
import { Cart } from "../Cart";

export function Header() {
  const { cartItems } = useCart();
  const cartAmount = cartItems.length;
  return (
    <HeaderContainer>
      <Link href="/">
        <Image src={logoIgniteShop} alt="" />
      </Link>
      <Cart />
    </HeaderContainer>
  );
}
