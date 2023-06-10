const bookingController = require("../controllers/bookController");

const router = require("express").Router();

router.post("/add/:id", bookingController.addBooking); //id user
router.put("/update/:id", bookingController.updateBooking); //id booking
router.get("/get/:id", bookingController.getBookings); // id booking
router.delete("/delete/:id", bookingController.deleteBooking); // id booking
router.put("/pay/:id", bookingController.payBooking); //id booking

module.exports = router;
