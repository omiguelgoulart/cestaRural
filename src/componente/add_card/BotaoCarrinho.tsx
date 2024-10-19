
import { CartService } from './CartService';

interface Produto {
  productId: number;
  name: string;
  price: number;
}

interface BotaoCarrinhoProps {
  produto: Produto;
}

export default function BotaoCarrinho({ produto }: BotaoCarrinhoProps) {
  const handleAddToCart = async () => {
    try {
      const cartService = new CartService();
      await cartService.addToCart(produto.productId, 1);
      alert(`${produto.name} foi adicionado ao carrinho!`);
    } catch (error) {
      console.error('Erro ao adicionar produto ao carrinho:', error);
      alert('Erro ao adicionar produto ao carrinho.');
    }
  };

  return (
    <button
      onClick={handleAddToCart}
      className="w-full h-[3.5rem] rounded-[0.625rem] bg-[#FFA451] text-white font-medium text-lg"
    >
      Adicionar ao Carrinho
    </button>
  );
}
