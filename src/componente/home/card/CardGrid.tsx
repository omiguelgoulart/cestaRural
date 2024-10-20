import { Produtos } from '../../add_card/CartService'; // Importando a classe correta
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Para navegar entre páginas

interface Produto {
    productId: number;
    name: string;
    price: number;
    imageCarrousel: string[];
}

export default function CardGrid() {
    const [produtos, setProdutos] = useState<Produto[]>([]);
    const [carregando, setCarregando] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        async function listarProdutos() {
            try {
                const response = await new Produtos().getTodosProdutos();
                setProdutos(response.products);
            } catch (error) {
                console.error('Erro ao carregar produtos:', error);
            } finally {
                setCarregando(false);
            }
        }

        listarProdutos();
    }, []);

    if (carregando) return <p>Carregando produtos...</p>;

    return (
        <div className="grid grid-cols-2 gap-4">
            {produtos.map((produto) => (
                <div
                    key={produto.productId} // Correção: Adicionando uma key única para cada produto
                    className="p-4 border rounded-lg shadow-lg bg-white relative cursor-pointer"
                    onClick={() => navigate(`/produto/${produto.productId}`)}
                >
                    <img
                        src={produto.imageCarrousel[0] || 'https://via.placeholder.com/150'}
                        alt={produto.name}
                        className="w-24 h-24 object-cover rounded-full mx-auto mb-4"
                    />
                    <h2 className="text-lg font-semibold text-center">{produto.name}</h2>
                    <p className="text-center text-orange-500 text-xl">
                        R$ {produto.price.toFixed(2)}
                    </p>
                </div>
            ))}
        </div>
    );
}