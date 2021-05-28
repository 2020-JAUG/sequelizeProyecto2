const jwt = require("jsonwebtoken");
const secret = "Wayco tiene futbolin";


const admin = (req, res, next) => {

    try {

        let token = require.headers.authenticate.split(" ")[1];
        let auth = jwt.verify(token, secret);

        if(( auth.pasajeroId != req.body.id ) && (auth.isAdmin == req.body.isAdmin)){

            throw new Error("No tienes permiso.");
        }

        return next();

    } catch (error) {

            res.status(500).json({
                message: error.message
            });
    }
}



module.exports = admin;