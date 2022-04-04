const db = require('../config/db');

class Product {

    static getProducts(cb) {
        const sql = `select 
        p.id as id,
        m.name as merchant_name,
        p.name as product_name,
        p.quantity as quantity,
        p.Price as price
    from product_info as p
    join 
        merchant_info as m 
    on m.id = p.merchant_id;`;

        db.query(sql, (err, row) => {
            cb(err, row)
        })
    }

    static getProduct(id, cb) {
        let sql = `select 
        p.id as id,
        m.name as merchant_name,
        p.name as product_name,
        p.quantity as quantity,
        p.Price as price
    from product_info as p
    join 
        merchant_info as m 
    on m.id = p.merchant_id
    where p.id = ?`;

        // let id = req.params.id

        db.query(sql, [id], (err, row) => {
            cb(err, row)
        })
    }

    // static addProduct(body, cb) {
    //     let sql = `INSERT INTO product_info
    //     (id, name, quantity, price)
    //     VALUES(?,?,?,?)`;

    //     const dataProduct = [
    //         body.id,
    //         body.name,
    //         body.quantity,
    //         body.price
    //     ];

    //     db.query(sql, dataProduct, (err, row) => {
    //         cb(err, row)
    //     })
    // }

    static addProduct(data) {
        let sql = `INSERT INTO product_info
        (id, name, merchant_id, quantity, price)
        VALUES(?,?,?,?,?)`;

        const dataProduct = [
            data.id,
            data.name,
            data.merchant_id,
            data.quantity,
            data.price
        ];

        return new Promise ((resolve, reject) => {
            db.query(sql, dataProduct, (err, result) => {
                resolve(result);
                reject(err);
            })
    
        })
    }

    static findId(id) {
        let sql = `SELECT id FROM product_info WHERE id = ${id}`

        return new Promise ((resolve, reject) => {
            db.query(sql, (err, result) => {
                resolve(result);
                reject(err);
            })
        })
    }

    static updateProduct(req, cb) {
        let sql = `UPDATE product_info SET
        name = ?,
        merchant_id = ?,
        quantity = ?,
        price = ?
        WHERE id = ?`;

        let data = req.body

        const dataProduct = [
            data.name,
            data.merchant_id,
            data.quantity,
            data.price,
            req.params.id
        ];

        db.query(sql, dataProduct, (err, row) => {
            cb(err, row)
        })

    }

    static deleteProduct(id, cb) {
        let sql = `DELETE FROM product_info WHERE id = ?`;

        db.query(sql, [id], (err, row) => {
            cb(err, row)
        })
    }
};

module.exports = Product