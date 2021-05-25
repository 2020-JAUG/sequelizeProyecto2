const router = require("express").Router();
const pasajeroController = require("../controllers/pasajero.controller");

//API CRUD Pasajero
router.get("/", async(req, res) => {
    try {
        res.json( await pasajeroController.allPassengers());
    } catch (error) {
        return res.statu(500).json({
            message: error.message
        });
    }
});


router.get("/:id", async(req, res) => {
    try {
        const id = req.params.id;
        res.json( await pasajeroController.passengerId(id));
    } catch (error) {
        return res.statu(500).json({
            message: error.message
        });
    }
});



router.post("/", async(req, res) => {
    try {
        const body = req.body;
        res.json( await pasajeroController.newPassengers(body));
    } catch (error) {
        return res.statu(500).json({
            message: error.message
        });
    }
});





// router.update();




// router.delete();

module.exports = router;