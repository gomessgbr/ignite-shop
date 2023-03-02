import { createContext, ReactNode, useState } from "react";

export interface ProductProps {
  id: string;
  name: string;
  imageUrl: string;
  price: string;
  priceNumber: number;
  description: string;
  priceIdDefault: string;
}

interface CartContextProps {
  cartItems: ProductProps[];
  addCart: (product: ProductProps) => void;
  removeCart: (productId: string) => void;
  cartTotalPrice: number;
}

interface CartContextProviderProps {
  children: ReactNode;
}

export const CartContext = createContext({} as CartContextProps);

export function CartContextProvider({ children }: CartContextProviderProps) {
  const [cartItems, setCartItems] = useState<ProductProps[]>([]);

  const cartTotalPrice = cartItems.reduce((total, product) => {
    return total + product.priceNumber;
  }, 0);

  function addCart(product: ProductProps) {
    setCartItems((state) => [...state, product]);
  }

  function removeCart(productId: string) {
    const filteredCart = cartItems.filter((item) => item.id !== productId);
    setCartItems(filteredCart);
  }

  return (
    <CartContext.Provider
      value={{ addCart, removeCart, cartItems, cartTotalPrice }}
    >
      {children}
    </CartContext.Provider>
  );
}
