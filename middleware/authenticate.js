const jwt = require("jsonwebtoken");
const secret = "Wayco tiene futbolin";


const authenticate = (req, res, next) => {
    try {

        if( !req.headers.authorization ) {
            return new Error("No tienes token");
        }

        let token = require.headers.authenticate.split(" ")[1];
        let auth = jwt.verify(token, secret);

        if( auth.isAdmin == true ) {

            return next();
        } else {
            if( auth.pasajeroId != req.body.id && auth.pasajeroId != req.body.pasajeroId ) {

                throw new Error("No tienes permiso.");
            } else {
                return next();
            }
        }

    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
}


module.exports = authenticate;