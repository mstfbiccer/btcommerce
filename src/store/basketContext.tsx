import { createContext } from "react";

interface BasketContextProps {
  basketCount: number;
  setBasketCount: (basketCount: number) => void;
  totalPrice: number;
}

const BasketContext = createContext<BasketContextProps>({
  basketCount: 0,
  setBasketCount: () => {},
  totalPrice: 0,
});

export default BasketContext;