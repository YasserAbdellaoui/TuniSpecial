// checkEmailExistence.js

const { user } = require('../models'); // Adjust the import based on your model file

const checkEmailExistence = async (req, res, next) => {
  const { email } = req.body;

  try {
    const existingUser = await user.findOne({ where: { email } });

    if (existingUser) {
      return res.status(400).json({ msg: 'Email already exists. Please choose a different email.' });
    }

    next(); // Continue to the next middleware or route handler
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

module.exports = checkEmailExistence;
