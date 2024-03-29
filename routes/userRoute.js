const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");
const protect = require("../middleware/authMiddleware");

router.post("/register",userController.registerUser);
router.post("/login",userController.loginUser);
router.get("/logout",userController.logout);
router.get("/getuser",protect,userController.getUser);
router.get("/loggedin",userController.loginStatus);
router.patch("/updateuser",protect,userController.updateUser);
router.patch("/changepassword",protect,userController.changePassword);
router.post("/forgotpassword",userController.forgotPassword);
router.put("/resetpassword/:resetToken",userController.resetPassword);

module.exports = router