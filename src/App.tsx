import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CardGrid from './componente/home/home'; // Grid de produtos
import AddCard from './componente/add_card/AddCard'; // Página de produto detalhado
import { CarrinhoProvider } from '../src/componente/carrinho/CarrinhoContext'


function App() {
  return (
    <CarrinhoProvider>
    <Router>
      <Routes>
        <Route path="/" element={<CardGrid />} />
        <Route path="/produto/:id" element={<AddCard />} />
      </Routes>
    </Router>
  </CarrinhoProvider>
  );
}

export default App;

