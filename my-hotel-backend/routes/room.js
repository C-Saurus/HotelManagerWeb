const roomController = require("../controllers/roomController");

const router = require("express").Router();

// Just for admin
router.post("/add", roomController.addRoom);
router.delete("/delete/:id", roomController.deleteRoom);
router.put("/edit/:id", roomController.editRoom);
router.get("/getAll", roomController.getAllRoom);
router.get("/get/:id", roomController.getById);
module.exports = router;
