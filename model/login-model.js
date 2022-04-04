const db = require('../config/db');

class Login {

    static findId(id) {
        let sql = `SELECT * FROM merchant_info WHERE id = ${id}`;

        return new Promise((resolve, reject) => {
            db.query(sql, (err, result) => {                
                resolve(result)
                reject(err)
            })
        })
    }
}

module.exports = Login;