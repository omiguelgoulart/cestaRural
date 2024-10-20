import { Sidebar } from 'flowbite-react'
import Nav from './nav/Nav'
import Pesquisa from './pesquisa/pesquisa'
import CardGrid from './card/CardGrid';


function App() {
  

  return (
<div className="h-screen bg-gray-50">
      <Nav />
      <Pesquisa />
      <div className="container mx-auto px-4">
        <h1 className="text-2xl font-semibold mb-4">Produtos</h1>
        <CardGrid /> {/* Grid com os cards dos produtos */}

        <h1 className="text-2xl font-semibold mt-10 mb-4">Hottest</h1>
        <CardGrid /> {/* Outra seção de produtos */}
      </div>
      <Sidebar />
    </div>
  );
}

export default App
