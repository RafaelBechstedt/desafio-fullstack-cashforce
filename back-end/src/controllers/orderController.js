import orderService from '../services/orderService.js';

const getOrders = async (req, res) => {
  try {
    const orders = await orderService.getOrders();
    res.status(200).json(orders);
  } catch (error) {
    res.status(500).json({ error: 'Ocorreu um erro ao buscar pedidos' });
  }
};

export default {
  getOrders
};
