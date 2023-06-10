const { User } = require("../model/index");

const userController = {
  getUserProfile: async (req, res) => {
    try {
      const user = req.user;
      return res.status(200).json(user);
    } catch (err) {
      return res.status(500).json("Get false with error:", error);
    }
  },
  registerUser: async (req, res) => {
    try {
      const user = new User(req.body);
      await user.save();
      return res.status(200).json("Register success");
    } catch (error) {
      console.log(error);
      return res.status(500).json("Email was register");
    }
  },
  loginUser: async (req, res) => {
    try {
      const { email, password } = req.body;
      const user = await User.findByCredentials(email, password);

      const accessToken = await user.generateAuthToken();
      const data = {
        accessToken: accessToken,
        id: user.id,
      };
      return res.status(200).json(data);
    } catch (error) {
      return res.status(400).json("Wrong email or password");
    }
  },
  logoutUser: async (req, res) => {
    return res.status(200).json("Logout successfully");
  },
  updateUser: async (req, res) => {
    try {
      await User.findByIdAndUpdate(
        req.params.id,
        { name: req.body.name, email: req.body.email, phone: req.body.phone },
        { new: true }
      );
      return res.status(200).json("Update successfully");
    } catch (error) {
      return res.status(500).json("Update false with error:", error);
    }
  },
};

module.exports = userController;
