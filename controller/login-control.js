const jwt = require('jsonwebtoken'); // secret key
const LoginModel = require('../model/login-model');

class Login {

    // static login(req, res) {

    //     const data = req.body;

    //     if (data.password === '123456') {

    //         const token = jwt.sign({ // ini ngebuat token
    //             id: data.id // value yang diambil ketika jwt varified
    //         }, 'jkbjscco3432f')

    //         res.status(200).json({ token });

    //     } else {
    //         res.status(401).json({ message: 'wrong password/unauthorized' })
    //     }

    // }

    //---------------------------------------------------------------------------------------------------------------------

    // CARA ROMI

    static async loginId1(req, res) {

        // misalnya di req.body di postmannya seperti ini:

        /**
         * email : romi
         * password : 123456
         */

        //dapetin data dari user ke database

        // const data = req.params;

        // exixst = await Merchant.findLogin (dataBody.id);

        const dataBody = req.body;

        const exist = await LoginModel.findId(dataBody.id);

        // const exist = await findEmail(dataBody.email);

        // ekspektasinya

        /**
         * [{}
         * email: romi
         * password: 123
         * alamat...}
         * ]
         */
        //

        if (!exist[0]) {
            res.status(401).json({ message: 'wrong id' })
        }

        // else if (exist[0].password === dataBody.password) {

        else if (exist[0].id === dataBody.id && exist[0].password === dataBody.password) {

            const token = jwt.sign({
                id: exist[0].id,
                password: exist[0].password,
                // email: exist[0].email, // bisa juga di tambah name
            }, 
            process.env.SECRET || 'jkbjscco3432f')
            res.status(200).json({ token })
        } 
        
        else {
            res.status(401).json({ message: 'wrong password' })
        }
    }

    // static async loginId2(req, res) {

    //     const dataBody = req.body;

    //     const exist = await LoginModel.findId(dataBody.id);

    //     if (!exist[0]) {
    //         res.status(401).json({ message: 'wrong id' })
    //     }

    //     else if (exist[0].id === dataBody.id && exist[0].password === dataBody.password) {

    //         const token = jwt.sign({
    //             id: exist[0].id,
    //             password: exist[0].password,
    //             // email: exist[0].email, // bisa juga di tambah name
    //         }, 
    //         process.env.SECRET2)
    //         res.status(200).json({ token })
    //     } 
        
    //     else {
    //         res.status(401).json({ message: 'wrong password' })
    //     }
    // }
}

module.exports = Login;

//-------------------------------------------------------------------------------------------

// NOTE :
// 1 create merchant / end point (url yang di akses) ada parameternya : id, pass
// ini di simpen di db
// setelah ini login
// pas login > di kirim data id dan pass / pembuatan jwt
// didalem fungsi login : di cek aapakah id dan pass sesuai dengan yang ada di db
// jika ada, di kasih jwt
// jika tidak : error