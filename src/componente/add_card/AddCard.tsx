import { Carousel } from "flowbite-react";
import { CartService } from "./CartService";

const cartService = new CartService();

const images = [
  "/cenoura1.jpeg",
  "/cenoura2.jpeg",
  "/cenoura3.jpeg",
];

function AddCard() {
  const handleBuy = () => {
    cartService.addToCart(247, 1);
  };

  return (
    <div className="relative">
      <div className="h-[50vh]">
        <Carousel slideInterval={3000} indicators={true}>
          {images.map((image, index) => (
            <div
              key={index}
              className="h-full w-full bg-cover bg-center"
              style={{ backgroundImage: `url(${image})` }}
            ></div>
          ))}
        </Carousel>
      </div>

      <div className="-mt-8 p-6 border rounded-t-[32px] bg-white relative z-20">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-semibold">Quinoa Fruit Salad</h2>
          <p className="text-xl font-bold text-indigo-900">₦ 2,000</p>
        </div>

        <div className="flex items-center gap-4 mb-6">
          <button className="w-8 h-8 border rounded-full flex items-center justify-center text-2xl">
            -
          </button>
          <span className="text-lg">1</span>
          <button className="w-8 h-8 border rounded-full flex items-center justify-center text-2xl">
            +
          </button>
        </div>

        <div className="mb-4">
          <h3 className="text-lg font-semibold">One Pack Contains:</h3>
          <hr className="w-20 border-t-2 border-orange-500 mt-1 mb-2" />
          <p className="text-gray-700">
            Red Quinoa, Lime, Honey, Blueberries, Strawberries, Mango, Fresh mint.
          </p>
        </div>

        <p className="text-gray-600 mb-4">
          If you are looking for a new fruit salad to eat today, quinoa is the perfect brunch for you.
        </p>

        <div className="flex justify-between items-center w-full">
          <button>
            <img src="/Group27.svg" alt="Ícone do botão" />
          </button>
          <button className="w-[13.6875rem] h-[3.5rem] flex-shrink-0 rounded-[0.625rem] bg-[#FFA451] text-white font-medium text-lg"
          onClick={handleBuy}>
            Comprar Agora
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddCard;
