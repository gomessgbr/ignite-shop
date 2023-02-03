import { HomeContainer, Product } from "@/styles/pages/home";
import Image from "next/image";

import camise1 from "../assets/cametas/t-shirt1.png";
import camise2 from "../assets/cametas/t-shirt2.png";
import camise3 from "../assets/cametas/t-shirt3.png";

export default function Home() {
  return (
    <HomeContainer>
      <Product>
        <Image src={camise1} alt="" width="520" height="480" />
        <footer>
          <strong>Camisa x</strong>
          <span>R$ 79,90</span>
        </footer>
      </Product>
      <Product>
        <Image src={camise1} alt="" width="520" height="480" />
        <footer>
          <strong>Camisa x</strong>
          <span>R$ 79,90</span>
        </footer>
      </Product>
    </HomeContainer>
  );
}
