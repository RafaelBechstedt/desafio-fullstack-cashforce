import { Sequelize } from 'sequelize';

const sequelize = new Sequelize('cashforce_database', 'user', 'password', {
    host: 'database',
    dialect: 'mysql',
  });

export default sequelize;