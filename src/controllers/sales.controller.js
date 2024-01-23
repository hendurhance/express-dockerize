import Sale from '../models/sale.js';

export const getAllSales = async (req, res) => {
    try {
        Sale.findAll().then(sales => {
            res.status(200).json({
                data: sales
            });
        });
    }
    catch (err) {
        res.status(500).json({ error: err.message });
    }
};

export const getSaleById = async (req, res) => {
    try {
        const id = req.params.id;
        Sale.findByPk(id).then(sale => {
            if (sale) {
                res.status(200).json({
                    data: sale
                });
            } else {
                res.status(404).json({
                    message: 'Sale not found'
                });
            }
        });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

export const createSale = async (req, res) => {
    try {
        const { customer, product, price, address } = req.body;
        if (!customer || !product || !price || !address) {
            return res.status(400).json({ message: 'All fields are required' });
        }

        const sale = await Sale.create({ customer, product, price, address });
        res.status(201).json({
            data: sale
        });
        
    }
    catch (err) {
        res.status(500).json({ error: err.message });
    }
};