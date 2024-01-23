import { Sequelize } from "sequelize";
import { db } from '../util/database.util.js'

const Sale = db.define('sales', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    customer: {
        type: Sequelize.STRING,
        allowNull: false
    },
    product: {
        type: Sequelize.STRING,
        allowNull: false
    },
    price: {
        type: Sequelize.FLOAT,
        allowNull: false
    },
    address: {
        type: Sequelize.STRING,
        allowNull: false
    },
    createdAt: {
        type: Sequelize.DATE,
        allowNull: false,
        field: 'createdat'
    },
    updatedAt: {
        type: Sequelize.DATE,
        allowNull: false,
        field: 'updatedat'
    }
},{
    underscored: true,
});

db.sync().then(() => {
    console.log('Database & tables created!');
}).catch(err => {
    console.log(err);
});

export default Sale;