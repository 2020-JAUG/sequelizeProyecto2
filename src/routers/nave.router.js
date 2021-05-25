const router = require("express").Router();
const naveController = require("../controllers/nave.controller");


//API CRUD
router.get("/", async(req, res) => {
    try {
        res.json( await naveController.allNave());
    } catch (error) {
        return res.status(500).json({
            message: error.message
        });
    }
});

router.post("/", async(req, res) => {
    try {
        const body = req.body;
        res.json( await naveController.newNave(body));
    } catch (error) {
        return res.status(500).json({
            message: error.message
        });
    }
});

router.get("/:id", async(req, res) => {
    try {
        const id = req.params.id;
        res.json( await naveController.naveId(id));
    } catch (error) {
        return res.status(500).json({
            message: error.message
        });
    }
});

router.delete('/:id', async (req, res) => {
    try {
        const body = req.body;
        res.json(await naveController.deleteNave(body));

    }catch (err) {
        return res.status(500).json({
            message: err.message
        });
    }
});


module.exports = router;
