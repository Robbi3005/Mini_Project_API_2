const jwt = require('jsonwebtoken');

class Auth {

    // static validate(req, res, next) {

    //     console.log(req.headers)

    //     const validate = jwt.verify(req.headers.token, 'jkbjscco3432f') 
    //     // authorization bisa di ganti bebas, nanti di sesuaikan key di postman
    //     // di sini menggunakan .token

    //     if (validate) {
    //         next()
    //     } else {
    //         res.status(401).json({ message: 'Unauthorized' })
    //     }

    //     // res.status(401).json({ message: 'unauthorized' })
    // }

    // CARA MAS ROMI SAMA

    //---------------------------------------------------------------------------------------------------------------------

    static validate(req, res, next) {

        console.log(req.headers)

        const validate = jwt.verify(req.headers.token, 'ASDacdvds12354')
        
        // authorization bisa di ganti bebas, nanti di sesuaikan key di postman
        // jadi jwt ini akan mengembalikan/respons apa yang tadi di tulis di req.body
        // yang tadi di assign di login-control adalah id (id: exist[0].id)
        // jadi jika id yang di dapat dari req.body 
        // sama dengan id yang di dapat dari req.headers.token
        // maka token akan valid
        // jika tidak maka token akan invalid

        /**
         * { // ini contoh di req.bodynya > ketika user login
         * id: 1,
         * email: test@mail.com
         * }
         */

        if (validate) {
            req.merchant_id = validate.id // merchant_id ini penamaannya bebas
            next()
        } else {
            res.status(401).json({ message: 'Unauthorized' })
        }
    }

    // static validate1(req, res, next) {

    //     console.log(req.headers)

    //     const validate = jwt.verify(req.headers.token, 'ASDacdvds12354')

    //     if (validate) {
    //         // req.merchant_id = validate.id // merchant_id ini penamaannya bebas
    //         next()
    //     } else {
    //         res.status(401).json({ message: 'Unauthorized' })
    //     }

    // }
    
    // static validate2(req, res, next) {

    //     console.log(req.headers)

    //     const validate = jwt.verify(req.headers.token, 'sad1231fasvavcA')

    //     if (validate) {
    //         // req.merchant_id = validate.id // merchant_id ini penamaannya bebas
    //         next()
    //     } else {
    //         res.status(401).json({ message: 'Unauthorized' })
    //     }
    // }
}

module.exports = Auth;