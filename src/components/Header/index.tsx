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

export function Header() {
  return (
    <HeaderContainer>
      <Link href="/">
        <Image src={logoIgniteShop} alt="" />
      </Link>
      <HeaderCartWrapper>
        <HeaderCartButton>
          <Handbag size={26} />
        </HeaderCartButton>
        <RoudedCartCount>1</RoudedCartCount>
      </HeaderCartWrapper>
    </HeaderContainer>
  );
}
