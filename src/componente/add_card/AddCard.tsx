import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'; // Para pegar o ID da URL
import { Produtos } from './CartService';
import BotaoCarrinho from './BotaoCarrinho';
import Quantidade from './Quantidade';

interface Produto {
  productId: number;
  name: string;
  description: string;
  price: number;
  quantityAvalible: number;
  imageCarrousel: string[];
}
const produtosService = new Produtos();

export default function AddCard() {
  const { productId } = useParams<{ productId: string }>(); // Pega o ID da URL
  const [produto, setProduto] = useState<Produto | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {

    async function fetchProduto() {
      try {
        const produtoData = await produtosService.getProduto(Number(productId));
        setProduto(produtoData);
      } catch (error) {
        setError('Erro ao carregar produto.');
      } finally {
        setLoading(false);
      }
    }

    fetchProduto();
  }, [productId]);

  if (loading) return <p>Carregando produto...</p>;
  if (error) return <p>{error}</p>;

  if (!produto) return <p>Produto não encontrado.</p>;

  const imagemProduto = produto.imageCarrousel.length > 0
    ? produto.imageCarrousel[0]
    : 'https://via.placeholder.com/300x300?text=Imagem+Indisponível';

  return (
    <div className="relative w-[100%] mb-8">
      <div className="h-[50vh] w-full overflow-hidden">
        <img
          src={imagemProduto}
          alt={produto.name}
          className="h-full w-full object-cover"
        />
      </div>

      <div className="-mt-8 p-6 border rounded-t-[32px] bg-white relative z-20">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-semibold">{produto.name}</h2>
          <p className="text-xl font-bold text-indigo-900">
            R$ {produto.price.toFixed(2)}
          </p>
        </div>

        <Quantidade quantidadeMaxima={produto.quantityAvalible} />

        <div className="mb-4">
          <h3 className="text-lg font-semibold">Descrição:</h3>
          <hr className="w-20 border-t-2 border-orange-500 mt-1 mb-2" />
          <p className="text-gray-700">{produto.description}</p>
        </div>

        <BotaoCarrinho produto={produto} />
      </div>
    </div>
  );
}
