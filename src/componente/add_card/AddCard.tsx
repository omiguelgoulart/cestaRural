import { useState } from "react";
import BoraoCarrinho from "./BotaoCarrinho";


function AddCard() {
  const [quantidade, setQuantidade] = useState(1);



  const handleQuantityChange = (action: "aumenta" | "diminui") => {
    setQuantidade((prevQuantidade) =>
      action === "aumenta" ? prevQuantidade + 1 : Math.max(1, prevQuantidade - 1)
    );
  };

  return (
    <div className="relative w-[100%]">
      <div className="h-[50vh] w-full overflow-hidden">
      <img src="/cenoura1.jpeg" alt="" />
      </div>

      <div className="-mt-8 p-6 border rounded-t-[32px] bg-white relative z-20">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-semibold">Quinoa Fruit Salad</h2>
          <p className="text-xl font-bold text-indigo-900">₦ 2,000</p>
        </div>

        <div className="flex items-center gap-4 mb-6">
          <button
            className="w-8 h-8 border rounded-full flex items-center justify-center text-2xl"
            onClick={() => handleQuantityChange("diminui")}
          >
            -
          </button>
          <span className="text-lg">{quantidade}</span>
          <button
            className="w-8 h-8 border rounded-full flex items-center justify-center text-2xl"
            onClick={() => handleQuantityChange("aumenta")}
          >
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
        <BoraoCarrinho />
        
      </div>
    </div>
  );
}

export default AddCard;
