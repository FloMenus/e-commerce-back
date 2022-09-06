require ("dotenv").config();
const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(process.env.DATABASE, process.env.USER, process.env.PASSWORD, {
    host: process.env.HOST,
    dialect: 'mysql',
    logging: false
});

const connectDb = async () => {
    try {
        await sequelize.authenticate();
        console.log('Connection has been established.');
    }
    catch (error) {
        console.error('Unable to connect to the database:' + error);
    }
};

connectDb();

const Product = require('./product')(sequelize);
const Order = require('./order')(sequelize);
const Category = require('./category')(sequelize);

Category.hasMany(Product);
Product.hasMany(Category);

Order.hasMany(Product);
Product.hasMany(Order);




sequelize.sync({ alter: true });

const db = {
    sequelize,
    Product,
    Order,
    Category,
};

module.exports = db