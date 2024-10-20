import { createContext, useContext, useState, ReactNode } from 'react';

interface Produto {
  productId: number;
  name: string;
  price: number;
  quantityAvalible: number;
  imageCarrousel: string[];
  quantity: number; // Quantidade no carrinho
}

interface CarrinhoContextData {
  cart: Produto[];
  adicionarAoCarrinho: (produto: Produto) => void;
  removerDoCarrinho: (productId: number) => void;
  limparCarrinho: () => void;
}

const CarrinhoContext = createContext<CarrinhoContextData | undefined>(
  undefined
);

export function CarrinhoProvider({ children }: { children: ReactNode }) {
  const [cart, setCart] = useState<Produto[]>([]);

  function adicionarAoCarrinho(produto: Produto) {
    setCart((prevCart) => {
      const produtoExistente = prevCart.find(
        (item) => item.productId === produto.productId
      );

      if (produtoExistente) {
        return prevCart.map((item) =>
          item.productId === produto.productId
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }

      return [...prevCart, { ...produto, quantity: 1 }];
    });
  }

  function removerDoCarrinho(productId: number) {
    setCart((prevCart) =>
      prevCart.filter((produto) => produto.productId !== productId)
    );
  }

  function limparCarrinho() {
    setCart([]);
  }

  return (
    <CarrinhoContext.Provider
      value={{ cart, adicionarAoCarrinho, removerDoCarrinho, limparCarrinho }}
    >
      {children}
    </CarrinhoContext.Provider>
  );
}

export function useCarrinho() {
  const context = useContext(CarrinhoContext);
  if (!context) {
    throw new Error('useCarrinho deve ser usado dentro de um CarrinhoProvider');
  }
  return context;
}
