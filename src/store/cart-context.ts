import React from "react";

type Dish = {
  id: number;
  image: string;
  title: string;
  description: string;
  price: number;
  amount: number;
};
const CartContext = React.createContext({
  items: [] as Dish[],
  totalAmount: 0,
  addItem: (newItem: Dish) => {},
  removeItem: (id: number) => {},
  removeAllItem: () => {},
});

export default CartContext;
