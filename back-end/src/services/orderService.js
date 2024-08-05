import models from '../models/index.js';

const statusMap = [
  'Pendente de confirmação',
  'Pedido confirmado',
  'Não reconhece o pedido',
  'Mercadoria não recebida',
  'Recebida com avaria',
  'Devolvida',
  'Recebida com devolução parcial',
  'Recebida e confirmada',
  'Pagamento Autorizado'
];

const getOrders = async () => {
  const orders = await models.Order.findAll({
    attributes: ['orderNfId', 'emissionDate', 'value', 'orderStatusBuyer'],
    include: [
      { model: models.Buyer, as: 'buyer', attributes: ['name'] },
      { model: models.Provider, as: 'provider', attributes: ['name'] }
    ],
    order: [['createdAt', 'DESC']]
  });

  // Transforme os códigos de status em seus nomes correspondentes
  return orders.map(order => ({
    ...order.toJSON(),
    orderStatusBuyer: statusMap[order.orderStatusBuyer] || 'Desconhecido'
  }));
};

export default {
  getOrders
};
