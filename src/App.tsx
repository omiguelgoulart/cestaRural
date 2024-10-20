import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CardGrid from './componente/home/home'; // Grid de produtos
import AddCard from './componente/add_card/AddCard'; // Página de produto detalhado

function App() {
  return (
    <Router>
      <div className="h-screen bg-gray-50">
        <Routes>
          <Route path="/" element={<CardGrid />} /> {/* Página inicial */}
          <Route path="/produto/:id" element={<AddCard />} /> {/* Produto detalhado */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
