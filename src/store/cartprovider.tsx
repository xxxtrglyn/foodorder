import React, { PropsWithChildren, useReducer } from "react";
import CartContext from "./cart-context";

type Dish = {
  id: number;
  image: string;
  title: string;
  description: string;
  price: number;
  amount: number;
};

type StateType = {
  items: Dish[];
  totalAmount: number;
};

type ActionType = {
  type: string;
  payload: any;
};

const defaultCartState: StateType = {
  items: [],
  totalAmount: 0,
};

function cartReducer(state: StateType, action: ActionType): StateType {
  if (action.type === "ADD") {
    const updatedTotalAmount =
      state.totalAmount + action.payload.amount * action.payload.price;
    const existingItemIndex = state.items.findIndex(
      (item) => item.id === action.payload.id
    );
    const existingItem =
      existingItemIndex > -1 ? state.items[existingItemIndex] : null;
    let updateItems: Dish[] = [...state.items];
    if (existingItem) {
      updateItems[existingItemIndex] = {
        ...existingItem,
        amount: existingItem.amount + 1,
      };
    } else {
      updateItems.push(action.payload);
    }
    return { items: updateItems, totalAmount: updatedTotalAmount };
  }

  if (action.type === "REMOVE") {
    const existingItemIndex = state.items.findIndex(
      (item) => item.id === action.payload.id
    );
    const existingItem = state.items[existingItemIndex];

    const updatedTotalAmount = state.totalAmount - existingItem.price;
    let updatedItems = [...state.items];
    if (existingItem?.amount === 1) {
      updatedItems = updatedItems.filter(
        (item) => item.id !== action.payload.id
      );
    } else {
      updatedItems[existingItemIndex] = {
        ...existingItem,
        amount: existingItem.amount - 1,
      };
    }
    return { items: updatedItems, totalAmount: updatedTotalAmount };
  }
  return defaultCartState;
}

function CartProvider({ children }: PropsWithChildren) {
  const [cart, dispatchCartAction] = useReducer(cartReducer, defaultCartState);
  const addNewItem = (newItem: Dish) => {
    dispatchCartAction({ type: "ADD", payload: newItem });
  };
  const removeItem = (id: number) => {
    dispatchCartAction({ type: "REMOVE", payload: { id: id } });
  };

  const removeAllItem = () => {
    dispatchCartAction({ type: "REMOVE_ALL", payload: null });
  };
  const cartContext = {
    items: cart.items,
    totalAmount: cart.totalAmount,
    addItem: addNewItem,
    removeItem: removeItem,
    removeAllItem: removeAllItem,
  };
  return (
    <CartContext.Provider value={cartContext}>{children}</CartContext.Provider>
  );
}

export default CartProvider;
