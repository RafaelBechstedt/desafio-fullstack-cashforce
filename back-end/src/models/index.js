import sequelize from '../config/config.js';
import Sequelize from 'sequelize';
import BuyerModel from './BuyerModel.js';
import CnpjModel from './CnpjModel.js';
import OrderModel from './OrderModel.js';
import ProviderModel from './ProviderModel.js';
import UserModel from './UserModel.js';

const Buyer = BuyerModel(sequelize, Sequelize.DataTypes);
const Cnpj = CnpjModel(sequelize, Sequelize.DataTypes);
const Order = OrderModel(sequelize, Sequelize.DataTypes);
const Provider = ProviderModel(sequelize, Sequelize.DataTypes);
const User = UserModel(sequelize, Sequelize.DataTypes);

const models = {
  Buyer,
  Cnpj,
  Order,
  Provider,
  User
};

Object.keys(models).forEach(model => {
  if ('associate' in models[model]) {
    models[model].associate(models);
  }
});

export default models;
