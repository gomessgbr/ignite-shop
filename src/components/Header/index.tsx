import Image from "next/image";
import { Handbag } from "phosphor-react";
import {
  HeaderCartButton,
  HeaderCartWrapper,
  HeaderContainer,
  RoudedCartCount,
} from "./styles";

import logoIgniteShop from "../../assets/igniteshoplogo.svg";

export function Header() {
  return (
    <HeaderContainer>
      <Image src={logoIgniteShop} alt="" />
      <HeaderCartWrapper>
        <HeaderCartButton>
          <Handbag size={26} />
        </HeaderCartButton>
        <RoudedCartCount>1</RoudedCartCount>
      </HeaderCartWrapper>
    </HeaderContainer>
  );
}
