import { useState } from 'react';
import Carrinho from '../../carrinho/Carrinho';

export default function Nav() {
  const [isModalOpen, setModalOpen] = useState(false);

  return (
    <>
      <nav className="bg-white shadow-sm p-4 flex justify-between items-center">
        <button>
          <img src="/menu_burguer4.jpeg" alt="Menu" className="w-6 h-6" />
        </button>

        <h1 className="text-lg font-medium">Cesta Rural</h1>

        <div className="relative cursor-pointer" onClick={() => setModalOpen(true)}>
          <img src="/cesta.jpeg" alt="Carrinho" className="w-8 h-8" />
          <span className="absolute -top-2 -right-2 bg-orange-500 text-white text-xs rounded-full px-1">
            3
          </span>
        </div>
      </nav>

      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <button
              className="absolute top-2 right-2 text-black"
              onClick={() => setModalOpen(false)}
            >
              X
            </button>
            <Carrinho />
          </div>
        </div>
      )}
    </>
  );
}
