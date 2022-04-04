const db = require('./db');

class dataBase {

    static connectDb() {
        db.connect((err) => {
            if (err) throw console.log("data base not connected");
            console.log("database connected")
        })
    }

    static createMerchants() {

        let sql = `CREATE TABLE merchant_info(
        id INT NOT NULL PRIMARY KEY UNIQUE,
        password VARCHAR(255) NOT NULL,
        name VARCHAR(255) NOT NULL UNIQUE,
        address VARCHAR(255) NOT NULL,
        join_date DATETIME NOT NULL,
        phone_number BIGINT
        )`

        db.query(sql, (err) => {
            if (err) throw err;
            console.log("merchant_info table created")
        });
    }

    // `alter table product_info add 
    // FOREIGN KEY (merchant_id) REFERENCES merchant_info(id)`

    static createProduct() {

        let sql = `CREATE TABLE product_info(
        id INT NOT NULL PRIMARY KEY UNIQUE,
        name VARCHAR(255) NOT NULL UNIQUE,
        merchant_id INT NOT NULL,
        quantity INT(45) NOT NULL,
        price INT(255) NOT NULL,
        FOREIGN KEY (merchant_id) REFERENCES merchant_info(id)
        )`

        // ini brehasil
        
        db.query(sql, (err) => {
            if (err) throw err;
            console.log("product_info table created")
        });
    }

}

const activeDb = [
    dataBase.connectDb(),
    // dataBase.createMerchants(),
    // dataBase.createProduct()
]

module.exports = activeDb;