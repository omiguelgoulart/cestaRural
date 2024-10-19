import {CartService} from './CartService';

const cartService = new CartService();

export default function BotaoCarrinho() {

  
    const handleBuy = () => {
      cartService.addToCart(247, 1);
    };
  return (
    <div className="flex items-center justify-center">
      <button
        onClick={handleBuy}
        className="w-[13.6875rem] h-[3.5rem] rounded-[0.625rem] bg-[#FFA451] text-white font-medium text-lg"
      >
        Adicionar ao Carrinho
      </button>
    </div>
  );
}
