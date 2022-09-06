const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  const Category = sequelize.define("category", {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
    },
    slug: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });
  return Category;
};
