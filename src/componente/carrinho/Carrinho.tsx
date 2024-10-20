import { useCarrinho } from './CarrinhoContext';

export function Carrinho() {
  const { cart, removerDoCarrinho, limparCarrinho } = useCarrinho();

  const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div className="p-4 max-w-md mx-auto">
      <h2 className="text-2xl font-semibold mb-4">Carrinho de Compras</h2>
      <ul>
        {cart.map((produto) => (
          <li key={produto.productId} className="flex justify-between mb-2">
            <span>{produto.name}</span>
            <span>R$ {(produto.price * produto.quantity).toFixed(2)}</span>
            <button
              onClick={() => removerDoCarrinho(produto.productId)}
              className="text-red-500"
            >
              Remover
            </button>
          </li>
        ))}
      </ul>
      <p className="text-lg font-semibold mt-4">Total: R$ {total.toFixed(2)}</p>
      <button onClick={limparCarrinho} className="w-full bg-red-500 text-white py-2 mt-4 rounded">
        Limpar Carrinho
      </button>
    </div>
  );
}
