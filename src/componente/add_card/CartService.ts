import axios from 'axios';

export class CartService {
  async addToCart(productId: number, quantity: number) {
    try {
      const response = await axios.post('http://localhost:3000/cart/add', {
        productId,
        quantity
      });
      console.log('Produto adicionado ao carrinho:', response.data);
    } catch (error) {
      console.error('Erro ao adicionar produto ao carrinho:', error);
    }
  }
}