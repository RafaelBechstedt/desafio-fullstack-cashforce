import { DataTypes } from 'sequelize';

export default (sequelize) => {
  const Cnpj = sequelize.define('Cnpj', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    cnpj: DataTypes.STRING,
    companyType: DataTypes.STRING,
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE
  }, {
    tableName: 'cnpjs',
    timestamps: true
  });

  Cnpj.associate = (models) => {
    Cnpj.hasMany(models.Buyer, { foreignKey: 'cnpjId', as: 'buyers' });
    // Adicione outras associações aqui
  };

  return Cnpj;
};
