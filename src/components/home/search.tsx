import { useContext } from "react";
import {
  ShoppingCart as IconShoppingCart,
  Search as IconSearch,
} from "tabler-icons-react";
import CartContext from "../../store/cart-context";

function Search() {
  const cartCtx = useContext(CartContext);
  const totalItem = cartCtx.items.reduce((currentSum, currentValue) => {
    return currentSum + currentValue.amount;
  }, 0);

  return (
    <div className="relative flex py-2 px-2 items-center border-white border-2 shadow-md rounded-md bg-white">
      <span>
        <IconSearch size={20} />
      </span>
      <div className="border-r-2 mx-2">
        <input
          type="text"
          placeholder="Search"
          className="appearance-none flex-1 outline-none bg-transparent"
        />
      </div>
      <div className="peer relative cursor-pointer">
        <div className="w-5 h-5 rounded-full flex bg-red-500 justify-center items-center shadow-sm absolute top-[-20px] right-[-20px]">
          <span className="text-white font-semibold">{totalItem}</span>
        </div>
        <IconShoppingCart />
      </div>
      <div className="hidden hover:block peer-hover:block absolute rounded-md bg-white py-2 right-0 top-[calc(100%+10px)] shadow-md z-30 text-center after:content-[''] after:h-[20px] after:w-full after:bg-transparent after:block after:absolute after:top-[-20px] after:cursor-pointer min-w-[200px]">
        {cartCtx.items.map((item) => (
          <div
            key={item.id}
            className="flex justify-between motion-safe:hover:bg-slate-100 transition-all cursor-pointer px-3"
          >
            <span>{item.title}</span>
            <span>x{item.amount}</span>
          </div>
        ))}
        <button
          className="bg-purple-700 text-white font-semibold shadow-md w-2/3 rounded-sm motion-safe:hover:bg-purple-400 mt-3 disabled:select-none disabled:bg-gray-200"
          disabled={cartCtx.items.length > 0 ? false : true}
          onClick={() => {
            cartCtx.removeAllItem();
          }}
        >
          Buy
        </button>
      </div>
    </div>
  );
}

export default Search;
