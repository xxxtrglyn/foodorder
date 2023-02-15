import Header from "../components/home/header";
import burger from "../assets/images/burger.png";
import sushi from "../assets/images/sushi.png";
import donut from "../assets/images/donut.png";
import salad from "../assets/images/salad.png";
import orange from "../assets/images/orange.png";
import strawberry from "../assets/images/strawberry.png";
import pomegranate from "../assets/images/pomegranate.png";
import DishItem from "../components/home/dishitem";
import DishItemHorizontal from "../components/home/dishitem2";
import CartProvider from "../store/cartprovider";

// type Dish = {
//   id: number;
//   image: string;
//   title: string;
//   description: string;
//   price: number;
//   amount: number;
// };

const DISH = [
  {
    id: 1,
    title: "Burger",
    description: "Mushroom Sauce",
    price: 5.25,
    image: burger,
    amount: 1,
  },
  {
    id: 2,
    title: "Sushi",
    description: "Homemade Sushi",
    price: 5.25,
    image: sushi,
    amount: 1,
  },
  {
    id: 3,
    title: "Donut",
    description: "Cream Cake",
    price: 5.25,
    image: donut,
    amount: 1,
  },
  {
    id: 4,
    title: "Salad",
    description: "Chicken Salad",
    price: 5.25,
    image: salad,
    amount: 1,
  },
  {
    id: 5,
    title: "Orange",
    description: "Fresh Orange",
    price: 5.25,
    image: orange,
    amount: 1,
  },
  {
    id: 6,
    title: "Strawberry",
    description: "Fresh Strawnerry",
    price: 5.25,
    image: strawberry,
    amount: 1,
  },
  {
    id: 7,
    title: "Pomegranate",
    description: "Fresh Pomegranate",
    price: 5.25,
    image: pomegranate,
    amount: 1,
  },
];

function Home() {
  const dish1 = DISH.slice(0, 4).map((dish) => (
    <DishItem
      id={dish.id}
      description={dish.description}
      key={dish.id}
      price={dish.price}
      image={dish.image}
      title={dish.title}
      amount={0}
    />
  ));

  const dish2 = DISH.slice(4, DISH.length).map((dish) => (
    <DishItemHorizontal
      id={dish.id}
      description={dish.description}
      key={dish.id}
      price={dish.price}
      image={dish.image}
      title={dish.title}
      amount={0}
    />
  ));

  return (
    <CartProvider>
      <Header />
      <main className="px-20 pt-20">
        <section className="flex justify-between">
          <div className="hidden lg:block grow-1 shrink-0 basis-1/2 lg:basis-1/3">
            <h1 className="text-7xl font-semibold select-none my-5">
              The Fastest <br /> Delivery <br /> in{" "}
              <span className="text-orange-500">Your City</span>
            </h1>
            <p className="text-slate-600 text-[20px]">
              Grocen atssures fresh grocery every morning to your family without
              getting out in this pandemic
            </p>
          </div>
          <div className="grow-1 shrink-0 basis-full lg:basis-1/3 flex flex-wrap justify-center">
            {dish1}
          </div>
        </section>
        <section className="mt-20 flex flex-wrap">{dish2}</section>
      </main>
    </CartProvider>
  );
}

export default Home;
