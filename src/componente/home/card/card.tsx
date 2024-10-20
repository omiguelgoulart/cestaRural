import { useEffect, useState } from "react";

interface Produto {
  productId: number;
  name: string;
  price: number;
  imageCarrousel: string[];
}

export default function Card() {
  const [produtos, setProdutos] = useState<Produto[]>([]);
  const [carregando, setCarregando] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const listarProdutos = async () => {
      try {
        const response = await fetch(
          "https://cesta-rural-back.vercel.app/products"
        );

        // Verificando se a resposta é bem-sucedida
        if (!response.ok) {
          throw new Error(`Erro: ${response.status} - ${response.statusText}`);
        }

        const dados = await response.json();
        
        // Verificando se os dados são um array
        if (!Array.isArray(dados)) {
          throw new Error("Resposta inesperada da API");
        }

        setProdutos(dados);
      } catch (error: any) {
        console.error("Erro ao buscar dados:", error.message);
        setError(`Erro ao carregar produtos: ${error.message}`);
      } finally {
        setCarregando(false);
      }
    };

    listarProdutos();
  }, []);

  if (carregando) return <p>Carregando produtos...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="container mx-auto px-4 mt-10">
      <h1 className="text-2xl font-semibold mb-6">Combos Recomendados</h1>

      <div className="grid grid-cols-2 gap-4">
        {produtos.map((produto) => (
          <div
            key={produto.productId}
            className="p-4 border rounded-lg shadow-lg bg-white relative"
          >
            {/* Botão Favorito */}
            <button className="absolute top-4 right-4">
              <img src="/Group27.svg" alt="Favorito" />
            </button>

            {/* Imagem do Produto */}
            <div className="flex justify-center mb-4">
              <img
                src={
                  produto.imageCarrousel.length > 0
                    ? produto.imageCarrousel[0]
                    : "https://via.placeholder.com/150"
                }
                alt={produto.name}
                className="w-24 h-24 object-cover rounded-full"
              />
            </div>

            {/* Nome e Preço do Produto */}
            <div className="flex justify-between items-center mb-2">
              <h2 className="text-lg font-semibold">{produto.name}</h2>
              <p className="text-xl text-orange-500">
                R$ {produto.price.toFixed(2)}
              </p>
            </div>

            {/* Botão Adicionar */}
            <div className="flex justify-center">
              <button className="w-10 h-10 bg-orange-100 rounded-full relative">
                <p className="text-orange-400 text-3xl absolute top-[-5px] left-3">
                  +
                </p>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
