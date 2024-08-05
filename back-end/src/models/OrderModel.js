import { DataTypes } from 'sequelize';

export default (sequelize) => {
  const Order = sequelize.define('Order', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    orderNfId: DataTypes.STRING,
    orderNumber: DataTypes.STRING,
    orderPath: DataTypes.STRING,
    orderFileName: DataTypes.STRING,
    orderOriginalName: DataTypes.STRING,
    emissionDate: DataTypes.STRING,
    pdfFile: DataTypes.STRING,
    emitedTo: DataTypes.STRING,
    nNf: DataTypes.STRING,
    CTE: DataTypes.STRING,
    value: DataTypes.STRING,
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE,
    cnpjId: DataTypes.INTEGER,
    userId: DataTypes.INTEGER,
    buyerId: DataTypes.INTEGER,
    providerId: DataTypes.INTEGER,
    orderStatusBuyer: DataTypes.STRING,
    orderStatusProvider: DataTypes.STRING,
    deliveryReceipt: DataTypes.STRING,
    cargoPackingList: DataTypes.STRING,
    deliveryCtrc: DataTypes.STRING
  }, {
    tableName: 'orders',
    timestamps: true
  });

  Order.associate = (models) => {
    Order.belongsTo(models.Cnpj, { foreignKey: 'cnpjId', as: 'cnpj' });
    Order.belongsTo(models.User, { foreignKey: 'userId', as: 'user' });
    Order.belongsTo(models.Buyer, { foreignKey: 'buyerId', as: 'buyer' });
    Order.belongsTo(models.Provider, { foreignKey: 'providerId', as: 'provider' });
  };

  return Order;
};
