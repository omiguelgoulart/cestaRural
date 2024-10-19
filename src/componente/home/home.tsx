import './App.css'
import Nav from './componente/home/nav/Nav'
import Card from './componente/home/card/card'
import Pesquisa from './componente/home/pesquisa/pesquisa'
import  Sidebar  from './componente/home/sidebar/Sidebar'

function App() {
  

  return (
    
<div className='h-screen'>
    <Nav /> 
    
    <Pesquisa/>
    <Card/>
    <Sidebar />

</div>

  )
}

export default App
