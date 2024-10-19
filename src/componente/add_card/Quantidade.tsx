import  { useState } from 'react';

interface QuantidadeProps {
  quantidadeMaxima: number;
}

export default function Quantidade({ quantidadeMaxima }: QuantidadeProps) {
  const [quantidade, setQuantidade] = useState(1);

  const aumentar = () => {
    if (quantidade < quantidadeMaxima) {
      setQuantidade(quantidade + 1);
    }
  };

  const diminuir = () => {
    if (quantidade > 1) {
      setQuantidade(quantidade - 1);
    }
  };

  return (
    <div className="flex items-center gap-4 mb-6">
      <button
        className="w-8 h-8 border rounded-full flex items-center justify-center text-2xl"
        onClick={diminuir}
        disabled={quantidade <= 1}
      >
        -
      </button>
      <span className="text-lg">{quantidade}</span>
      <button
        className="w-8 h-8 border rounded-full flex items-center justify-center text-2xl"
        onClick={aumentar}
        disabled={quantidade >= quantidadeMaxima}
      >
        +
      </button>
    </div>
  );
}
