const User = require('../models/User');
const { v4: uuidv4 } = require("uuid");


exports.register = async (req, res) => {
  try {
    const { login, password } = req.body;

    if (!login || !password) {
      return res.status(400).send({ message: "Missing required fields" });
    }

    const existingUser = await User.findOne({ login });
    if (existingUser) {
      return res.status(400).send({ message: "User already exists" });
    }

    const userid = uuidv4();
    const user = new User({ login, password, userid });
    await user.save();

    res.status(201).send(user);
  } catch (error) {
    res.status(500).send({ message: error.message || "Error creating user" });
  }
};


exports.login = async (req, res) => {
  try {
    const { login, password } = req.body;
    const user = await User.findOne({ login });

    if (!user || user.password !== password) {
      return res.status(400).send({ message: "Invalid credentials" });
    }

    res.status(200).send({ 
      message: "Login successful", 
      userid: user.userid 
    });
  } catch (error) {
    res.status(500).send({ message: error.message || "Error logging in" });
  }
};


exports.findAll = async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).send(users);
  } catch (error) {
    res.status(500).send({ message: error.message || 'Error retrieving users' });
  }
};

exports.findOne = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) {
      return res.status(404).send({ message: `User not found with id ${req.params.id}` });
    }
    res.status(200).send(user);
  } catch (error) {
    res.status(500).send({ message: error.message || 'Error retrieving user' });
  }
};
