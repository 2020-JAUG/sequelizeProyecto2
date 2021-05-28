const router = require("express").Router();
const pasajeroController = require("../controllers/pasajero.controller");
const authenticate = require("../middleware/authenticate");
const admin = require("../middleware/admin");

//API CRUD Pasajero
router.get("/", admin, async(req, res) => {
    try {
        res.json( await pasajeroController.allPassengers());
    } catch (error) {
        return res.status(500).json({
            message: error.message
        });
    }
});


router.get("/:id", authenticate, async(req, res) => {//Authenticate es para que verifique el middleware
    try {
        const id = req.params.id;
        res.json( await pasajeroController.passengerId(id));
    } catch (error) {
        return res.status(500).json({
            message: error.message
        });
    }
});

router.post("/", async(req, res) => {
    try {
        const body = req.body;
        res.json( await pasajeroController.newPassengers(body));
    } catch (error) {
        return res.status(500).json({
            message: error.message
        });
    }
});

router.put("/", authenticate, async(req, res) => {
    try {
        const body = req.body;
        res.json(await pasajeroController.modifyPassengers(body));

    }catch (err) {
        return res.status(500).json({
            message: err.message
        });
    }
});


router.delete('/:id', admin, authenticate, async (req, res) => {
    try {
        const id = req.params.id;
        res.json(await pasajeroController.deletePassenger(id));

    }catch (err) {
        return res.status(500).json({
            message: err.message
        });
    }
});


module.exports = router;