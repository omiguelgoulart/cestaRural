import axios from 'axios';

export class CartService {
  async addToCart(productId: number, quantity: number) {
    try {
      const response = await axios.post('https://cesta-rural-back.vercel.app/add', {
        productId,
        quantity
      });
      console.log('Produto adicionado ao carrinho:', response.data);
    } catch (error) {
      console.error('Erro ao adicionar produto ao carrinho:', error);
    }
  }
}

export class Produtos {
  async getProduto(productId: number) {
    try {
      const response = await axios.get(
        `https://cesta-rural-back.vercel.app/product/${productId}`
      );
      return response.data;
    } catch (error) {
      console.error('Erro ao buscar o produto:', error);
      throw error; // Repassa o erro para quem chamar a função lidar
    }
  }

  async getTodosProdutos() {
    try {
      const response = await axios.get(
        `https://cesta-rural-back.vercel.app/products`
      );
      return response.data;
    } catch (error) {
      console.error('Erro ao buscar produtos:', error);
      throw error;
    }
  }
}
