const userController = require("../controllers/userController");
const auth = require("../middleware/auth");

const router = require("express").Router();

router.post("/register", userController.registerUser);
router.post("/login", userController.loginUser);
router.get("/me", auth, userController.getUserProfile);
router.post("/logout", userController.logoutUser);
router.put("/update/:id", userController.updateUser);
module.exports = router;
