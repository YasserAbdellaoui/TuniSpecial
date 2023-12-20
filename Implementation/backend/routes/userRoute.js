const express = require("express");
const userRoute = express.Router();
const {
getUsers,
postUser,
putUser,
deleteUser,
getOneUser,
signIn,
} = require("../controllers/userController");
const isAuth = require("../middleware/isAuth");
const isAutho = require("../middleware/isAutho");
userRoute.get("/user", getUsers);
userRoute.get("/user/:id",isAuth,isAutho(['Simple']) ,getOneUser);
userRoute.post("/user", postUser);
userRoute.put("/user/:id", putUser);
userRoute.delete("/user/:id",isAuth,isAutho(['Professional']) ,deleteUser);
userRoute.post("/signIn", signIn);
module.exports = userRoute;