export default function Nav() {
  return (
    <nav className="bg-white shadow-sm p-4 flex justify-between items-center">
      <button>
        <img src="/menu_burguer4.jpeg" alt="Menu" className="w-6 h-6" />
      </button>

      <h1 className="text-lg font-medium">Cesta Rural</h1>

      <div className="relative">
        <img src="/cesta.jpeg" alt="Carrinho" className="w-8 h-8" />
        <span className="absolute -top-2 -right-2 bg-orange-500 text-white text-xs rounded-full px-1">3</span>
      </div>
    </nav>
  );
}
