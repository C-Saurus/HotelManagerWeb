const { Room } = require("../my-hotel-backend/model/index");

const roomController = {
  addRoom: async (req, res) => {
    try {
      const room = new Room(req.body);
      await room.save();
      return res.status(200).json("Add room success");
    } catch (error) {
      return res.status(500).json(error);
    }
  },
  setRoom: async (id, value) => {
    try {
      await Room.findByIdAndUpdate(
        id,
        { $set: { isRent: value } },
        { new: true }
      );
    } catch (error) {
      console.log(error);
      throw new Error(error);
    }
  },
  editRoom: async (req, res) => {
    try {
      await Room.findByIdAndUpdate(
        req.params.id,
        { $set: req.body },
        { new: true }
      );
      return res.status(200).json("Update successfull");
    } catch {
      return res.status(500).json("Please check your connect");
    }
  },
  getRoom: async (type) => {
    const availableRoom = await Room.find({ type: type, isRent: false });
    if (availableRoom) {
      return availableRoom;
    } else {
      return null;
    }
  },
  deleteRoom: async (req, res) => {
    try {
      await Room.findByIdAndDelete(req.params.id);
      return res.status(200).json("Delete success");
    } catch {
      return res.status(500).json("Please check your connect");
    }
  },
  getAllRoom: async (req, res) => {
    try {
      const listRoom = await Room.find();
      return res.status(200).json(listRoom);
    } catch {
      return res.status(500).json("Please check your connect");
    }
  },
  getById: async (req, res) => {
    try {
      const room = await Room.findById(req.params.id);
      return res.status(200).json(room);
    } catch {
      return res.status(500).json("Please check your connect");
    }
  },
};

module.exports = roomController;
