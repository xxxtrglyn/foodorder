import React, { useContext } from "react";
import { SquareMinus, SquarePlus } from "tabler-icons-react";
import CartContext from "../../store/cart-context";

type Dish = {
  id: number;
  image: string;
  title: string;
  description: string;
  price: number;
  amount: number;
};

function DishItem({ id, image, title, description, price, amount }: Dish) {
  const cartContext = useContext(CartContext);
  const count = cartContext.items.find((item) => item.id === id)?.amount || 0;
  function increaseCount() {
    cartContext.addItem({
      id: id,
      image: image,
      title: title,
      description: description,
      price: price,
      amount: 1,
    });
  }
  function deccreaseCount() {
    if (count > 0) {
      cartContext.removeItem(id);
    }
  }
  return (
    <div
      key={id}
      className="w-full sm:w-[calc(50%-16px)] m-2 p-5 rounded-3xl shadow-md bg-slate-50 relative flex flex-col wrap"
    >
      <div className="basis-1/2 grow-0">
        <img src={image} alt="a burger" />
      </div>

      <div className="text-center mt-auto">
        <h2 className="text-xl font-medium">{title}</h2>
        <p className="text-slate-500 text-[14px]">{description}</p>
        <div>
          <span className="text-red-500 font-bold text-[11px]">$</span>
          <span className="font-semibold"> {price}</span>
        </div>
        <div className="flex justify-center items-center gap-2">
          <span
            className="text-red-400 cursor-pointer motion-safe:hover:scale-110"
            onClick={deccreaseCount}
          >
            <SquareMinus className="inline" />
          </span>
          <span className="font-bold text-lg">{count}</span>
          <span
            className="text-blue-400 cursor-pointer motion-safe:hover:scale-110"
            onClick={increaseCount}
          >
            <SquarePlus className="inline" />
          </span>
        </div>
      </div>
    </div>
  );
}

export default DishItem;
