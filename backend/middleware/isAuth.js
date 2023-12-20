const jwt = require("jsonwebtoken");
require("dotenv").config();

const isAuth = async (req, res, next) => {
  try {
    const token = req.header("Authorization")?.split(" ")[1]; // Assuming Bearer token

    if (!token) {
      console.log('No token found in the request. Authorization denied.');
      return res.status(401).json({ msg: "No token, authorization denied" });
    }

    console.log('Verifying token:', token);

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    console.log('Decoded token:', decoded);

    req.user = decoded; // Add decoded token (user info) to request object
    next();
  } catch (error) {
    console.error('Error during token verification:', error);

    if (error.name === "TokenExpiredError") {
      console.log('Token expired.');
      res.status(401).json({ msg: "Token expired" });
    } else {
      console.log('Server error.');
      res.status(500).json({ msg: "Server error" });
    }
  }
};

module.exports = isAuth;
