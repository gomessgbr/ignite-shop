import { CheckoutContainer } from "@/styles/pages/checkout";
import React from "react";
import { DebugCart } from "use-shopping-cart";

export default function checkout() {
  return (
    <div>
      <CheckoutContainer>
        <DebugCart />
      </CheckoutContainer>
    </div>
  );
}
