const { models } = require('../configuration/connectDB');
const jwt = require("jsonwebtoken");
require('dotenv').config();

const user = models.user;
//get all users
const getUsers = async (requset, response) => {
try {
const users = await user.findAll();
response.status(200).json({ users: users });
} catch (error) {
response.status(500).json({ msg: "error on getting users" });
}
};
//get one user
const getOneUser = async (req, res) => {
const id = req.params.id;
try {
const foundUser = await user.findByPk(id);
if (foundUser) {
res.status(200).json({ user: foundUser });
} else {
res.status(404).json({ msg: "User not found" });
}
} catch (error) {
console.error("Error on getting one user:", error);
res
.status(500)
.json({ msg: "Error on getting one user", error: error.message });
}
};
//post one user
const postUser = async (request, response) => {
try {
const newUser = request.body;
const createdUser = await user.create(newUser);
response.status(200).json({ user: createdUser, msg: " User added successfully" });
} catch (error) {
console.error("Error on adding user:", error);
response
.status(500)
.json({ msg: "Error on adding user", error: error.message });
}
};
//update one user
const putUser = async (req, res) => {
const id = req.params.id;
const updatedData = req.body;
try {
const [updateCount] = await user.update(updatedData, {
where: { id: id },
});
if (updateCount > 0) {
res.status(200).json({ msg: "User updated successfully" });
} else {
res.status(404).json({ msg: "User not found" });
}
} catch (error) {
res
.status(500)
.json({ msg: "Error on updating user", error: error.message });
}
};
const deleteUser = async (req, res) => {
const id = req.params.id;
try {
const deleteCount = await user.destroy({
where: { id: id },
});
if (deleteCount > 0) {
res.status(200).json({ msg: "User deleted successfully" });
} else {
res.status(404).json({ msg: "User not found" });
}
} catch (error) {
console.error("Error on deleting user:", error);
res
.status(500)
.json({ msg: "Error on deleting user", error: error.message });
}
};

const signIn = async (req, res) => {
    const userreq = req.body;
    try {
    const foundUser = await user.findOne({ email: userreq.email });
    if (foundUser) {
    if (userreq.password === foundUser.password) {
    const token = jwt.sign(
    { id: foundUser.id, userType: foundUser.userType},
    process.env.JWT_SECRET
    );
    res.status(200).json({ user: foundUser, token: token });
    } else {
    res.status(400).json({ msg: "Wrong password" });
    }
    } else {
    return res.status(400).json({ msg: "User not registered" });
    }
    } catch (error) {
    console.error(error);
    res.status(500).json({ msg: "Server error" });
    }
 };
    
module.exports = { postUser, getUsers, getOneUser, putUser, deleteUser,signIn };