// const Merchant = require('../model/model-1');
const Product = require('../model/product-model');
// const db = require('./db');

class ProductControl {

    static getProducts(req, res) {
        Product.getProducts((err, row) => {
            if (err) {
                console.log(err)
                throw err;
                // res.status(400).json({ message: 'Internal Server Error' })
            } else if (row) {
                res.status(200).json(row)
            }
        })
    }

    static async getProducts1(req, res) {

        const products = await Product.getProducts(req.merchant_id);
        res.status(200).json({ products });
    }

    static getProduct(req, res) {
        Product.getProduct(req.params.id, (err, row) => {
            // res.status(200).json(Merchant.getMerchant(req.params.id))
            if (err) {
                res.status(400).json({ message: 'Internal Server Error' })
            } else if (row) {
                res.status(200).json(row)
            }
        })
    }

    static async addProduct(req, res) {

        const data = req.body;

        if (!data.id) {
            return res.status(400).json({ message: 'Product id is required' })
        }

        const existId = await Product.findId(data.id);

        if (existId != "") {
            return res.status(400).json({ message: "Product id already exists" })
        }

        await Product.addProduct(data);
        res.status(201).json(data);
    }

    static updateProduct(req, res) {
        // res.status(201).json(Merchant.updateMerchant(req.body))
        Product.updateProduct(req, (err, row) => {
            // res.status(200).json(Merchant.getMerchant(req.params.id))
            if (err) {
                res.status(400).json({ message: 'Internal Server Error' })
            } else if (row) {
                res.status(200).json(row = (req.body))
            }
        })
    }

    static deleteProduct(req, res) {
        // res.status(200).json(Merchant.deleteMerchant(req.params.id))
        Product.deleteProduct(req.params.id, (err, row) => {
            // res.status(200).json(Merchant.getMerchant(req.params.id))
            if (err) {
                res.status(400).json({ message: 'Internal Server Error' })
            } else if (row) {
                res.status(200).json(row = `Product with id ${req.params.id} has been deleted`)
            }
        })
    }
}

module.exports = ProductControl;