const db = require('../config/db');

class Merchant {

    static getMerchants(cb) {
        const sql = `SELECT * FROM merchant_info`;

        db.query(sql, (err, row) => {
            cb(err, row)
        })
    }

    static getMerchant(id, cb) {
        let sql = `SELECT * FROM merchant_info WHERE id = ?`;

        // let id = req.params.id

        db.query(sql, [id], (err, row) => {
            cb(err, row)
        })
    }

    // static addMerchant(body, cb) {
    //     let sql = `INSERT INTO merchant_info 
    //     (id, password, address, join_date, phone_number) 
    //     VALUES(?,?,?,?,?)`;

    //     // let data = req.body

    //     const dataMerchant = [
    //         body.id,
    //         body.password,
    //         body.address,
    //         body.join_date,
    //         body.phone_number
    //     ];

    //    return db.query(sql, dataMerchant, (err, row) => {
    //         cb(err, row)
    //     })
    // }

    // static findById(id) {
    //     let sql = `SELECT * FROM merchant_info WHERE id = ${id}`;

    //     db.query(sql, (err) => {
    //         if (err) throw err;
    //     })
    // }

    static addMerchant(data) {
        let sql = `INSERT INTO merchant_info 
        (id, password, name, address, join_date, phone_number) 
        VALUES(?,?,?,?,?,?)`;

        const dataMerchant = [
            data.id,
            data.password,
            data.name,
            data.address,
            data.join_date,
            data.phone_number
        ];

        return new Promise((resolve, reject) => {
            db.query(sql, dataMerchant, (err, result) => {
                resolve(result)
                reject(err)
            })
        })
    }

    static findById(id) {
        let sql = `SELECT id FROM merchant_info WHERE id = ${id}`;

        return new Promise((resolve, reject) => {
            db.query(sql, (err, result) => {                
                resolve(result)
                reject(err)
            })
        })
    }

    static findLogin() {
        let sql = `SELECT id FROM merchant_info WHERE id = ?`;

        return new Promise((resolve, reject) => {
            db.query(sql, (err, result) => {                
                resolve(result)
                reject(err)
            })
        })
    }

    // static findEmail(email) {
    //     let sql = `SELECT id FROM merchant_info WHERE email = ${email}`;

    //     return new Promise((resolve, reject) => {
    //         db.query(sql, (err, result) => {                
    //             resolve(result)
    //             reject(err)
    //         })
    //     })
    // }

    static updateMerchant(req, cb) {
        let sql = `UPDATE merchant_info SET
        password = ?,
        name = ?,
        address = ?,
        join_date = ?,
        phone_number = ?
        WHERE id = ?`;

        let data = req.body

        const dataMerchant = [
            data.password,
            data.name,
            data.address,
            data.join_date,
            data.phone_number,
            req.params.id
        ];

        db.query(sql, dataMerchant, (err, row) => {
            cb(err, row)
        })

    }

    static deleteMerchant(id, cb) {
        let sql = `DELETE FROM merchant_info WHERE id = ?`;

        db.query(sql, [id], (err, row) => {
            cb(err, row)
        })
    }
}

//---------------------------------------------------------------------------------

class Product {

    // static getProducts(cb) {
    //     let sql = `SELECT * FROM product_info`;

    //     db.query(sql, (err, row) => {
    //         cb(err, row)
    //     })
    // }

    // static getProduct(id, cb) {
    //     let sql = `SELECT * FROM product_info WHERE id = ?`;

    //     // let id = req.params.id

    //     db.query(sql, [id], (err, row) => {
    //         cb(err, row)
    //     })
    // }

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

    // static updateProduct(req, cb) {
    //     let sql = `UPDATE product_info SET
    //     name = ?,
    //     quantity = ?,
    //     price = ?
    //     WHERE id = ?`;

    //     let data = req.body

    //     const dataProduct = [
    //         data.name,
    //         data.quantity,
    //         data.price,
    //         req.params.id
    //     ];

    //     db.query(sql, dataProduct, (err, row) => {
    //         cb(err, row)
    //     })

    // }

    // static deleteProduct(id, cb) {
    //     let sql = `DELETE FROM product_info WHERE id = ?`;

    //     db.query(sql, [id], (err, row) => {
    //         cb(err, row)
    //     })
    // }

};

module.exports = Merchant
// module.exports = Product