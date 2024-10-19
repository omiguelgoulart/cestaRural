
import { useEffect, useState } from "react";

function Card() {

  const [cart, setCart] = useState([])
  const [carregar, setCarregar] = useState()
useEffect(() => {
  const listaprodutos = async () => {
    try{   
     
        const response = await fetch("https://cesta-rural-back.vercel.app/products")
        const dados = await response.json()
        // console.log(dados)
        setCart(dados)
      }catch (error){
        console.error("Erro ao buscar dados", error)
      }
      setCarregar()
  }, [])

 const listarProdutos = cart.map (cart => (

 ))

    return(
<div > 
    
<div className="mt-20 max-w-lg">
  
      

      <div className="-mt-8 p-6 border rounded-[32px] bg-white w-2/4 h-1/4">
      <button className=" absolute flex items-">
            <img src="/Group27.svg" alt="Ícone do botão" />
          </button>
      <div className="flex justify-end w-full">               
          <div>
            <img src="https://th.bing.com/th/id/R.47ed1051f953751bb41076cd2ea6c708?rik=oJmwGUIFYN9v6Q&pid=ImgRaw&r=0" alt="" />
          </div>
          
        </div>
        <div className="flex justify-between items-center mb-4">
          <h2 className=" font-semibold">{}</h2>
          
        </div>
        
        <div className="mb-4">
          
          <div className="flex justify-between items-center">
          <p className="text-xl font- text-orange-500"><span className=" font-medium">R$</span> 22,00</p>

          {/* botão mais */}
          <div className=" flex justify-center items-center ">
            <div className=" absolute">
           <p className=" text-orange-400 text-3xl">+</p>

           </div>
          <img src="add.svg" alt="add" />

          </div>
          </div>
        </div>

      </div>
    </div>
    <button onClick={mostradado}>mostra dado</button>
    </div>
    
    )
    
}

export default Card;