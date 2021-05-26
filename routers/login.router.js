const router = require("express").Router();

router.post("/", async(req, res) => {
    try {
        const body = req.body;
        res.json( await pasajeroController.loginPassenger(body));
    } catch (error) {
        return res.status(500).json({
            message: error.message
        });
    }
});