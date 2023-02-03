import Image from "next/image";

import { useKeenSlider } from "keen-slider/react";

import { HomeContainer, Product } from "@/styles/pages/home";

import camise1 from "../assets/cametas/t-shirt1.png";
import camise2 from "../assets/cametas/t-shirt2.png";
import camise3 from "../assets/cametas/t-shirt3.png";

import "keen-slider/keen-slider.min.css";

export default function Home() {
  const [sliderRef] = useKeenSlider({
    slides: {
      perView: 3,
      spacing: 48,
    },
  });
  return (
    <HomeContainer ref={sliderRef} className="keen-slider">
      <Product className="keen-slider__slide">
        <Image src={camise1} alt="" width="520" height="480" />
        <footer>
          <strong>Camisa x</strong>
          <span>R$ 79,90</span>
        </footer>
      </Product>
      <Product className="keen-slider__slide">
        <Image src={camise2} alt="" width="520" height="480" />
        <footer>
          <strong>Camisa x</strong>
          <span>R$ 79,90</span>
        </footer>
      </Product>
      <Product className="keen-slider__slide">
        <Image src={camise3} alt="" width="520" height="480" />
        <footer>
          <strong>Camisa x</strong>
          <span>R$ 79,90</span>
        </footer>
      </Product>
      <Product className="keen-slider__slide">
        <Image src={camise3} alt="" width="520" height="480" />
        <footer>
          <strong>Camisa x</strong>
          <span>R$ 79,90</span>
        </footer>
      </Product>
    </HomeContainer>
  );
}
