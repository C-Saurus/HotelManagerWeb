const { Booking, User } = require("../my-hotel-backend/model/index");
const roomController = require("../controllers/roomController");

const bookingController = {
  getBookings: async (req, res) => {
    try {
      const booking = await Booking.findById(req.params.id);
      return res.status(200).json(booking);
    } catch (error) {
      return res.status(500).json(error);
    }
  },
  addBooking: async (req, res) => {
    try {
      const availableRoom = await roomController.getRoom(req.body.type);
      const number = req.body.number;
      const user = await User.findById(req.params.id);

      if (availableRoom.length >= number) {
        const booking = new Booking(req.body);
        booking.room = [];
        booking.user = user._id;
        for (let i = 0; i < number; i++) {
          await roomController.setRoom(availableRoom[i]._id.toString(), true);
          booking.room.push({
            name: availableRoom[i].name,
            id: availableRoom[i]._id,
            price: availableRoom[i].price,
          });
        }

        await booking.save();
        await user.updateOne({ $push: { history: booking } });
        return res.status(200).json("Booking success");
      } else
        return res.status(400).json({
          message: `Number of Room available is ${availableRoom.length}`,
        });
    } catch (error) {
      return res.status(500).json(error);
    }
  },
  deleteBooking: async (req, res) => {
    try {
      await User.updateOne(
        { history: req.params.id },
        { $pull: { history: req.params.id } }
      );
      const booking = await Booking.findById(req.params.id);
      for (let i = 0; i < booking.room.length; i++) {
        console.log(i);
        await roomController.setRoom(booking.room[i].id.toString(), false);
      }
      console.log(1);
      await Booking.findByIdAndDelete(req.params.id);
      return res.status(200).json("Deleted");
    } catch (error) {
      return res.status(500).send(error);
    }
  },
  updateBooking: async (req, res) => {
    try {
      await Booking.findByIdAndUpdate(
        req.params.id,
        { $set: req.body },
        { new: true }
      );
      console.log("Done update");
      return res.status(200).json("Update success");
    } catch (error) {
      return res.status(400).json({ error: error });
    }
  },
  payBooking: async (req, res) => {
    try {
      const booking = await Booking.findById(req.params.id);
      booking.isPay = true;
      for (let i = 0; i < booking.room.length; i++) {
        await roomController.setRoom(booking.room[i].id.toString(), false);
      }
      await booking.save();
      return res.status(200).json("Pay successfull");
    } catch (error) {
      return res.status(400).json({ error: error });
    }
  },
};

module.exports = bookingController;
