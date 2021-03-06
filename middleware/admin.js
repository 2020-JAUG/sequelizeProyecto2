const jwt = require("jsonwebtoken");
const secret = "Wayco tiene futbolin";


const admin = (req, res, next) => {

    try {

        if(!req.headers.authorization) {
            return "No tienes token";
        }

        let token = require.headers.authenticate.split(" ")[1];
        let auth = jwt.verify(token, secret);

        if( auth.isAdmin == false ) {

            throw new Error("No tienes permisos.");
        }

        return next();

    }catch (error) {

            res.status(500).json({
                message: error.message
            });
    }
}

module.exports = admin;