const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  const Order = sequelize.define("order", {
    customer_email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    customer_adress: {
      type: DataTypes.STRING,
    },
    totalPrice: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    currency_code: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });
  return Order;
};
