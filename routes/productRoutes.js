const express = require("express");
const router = express.Router();
const productController = require("../controllers/productController");
const protect = require("../middleware/authMiddleware");
const {upload} = require("../utils/sendFile"); //importing directly

router.post("/",protect, upload.single("image"),productController.createProduct);
router.patch("/:id",protect, upload.single("image"),productController.updateProduct);
router.get("/",protect, productController.getProducts);
router.get("/:id",protect, productController.getProduct);
router.delete("/:id",protect,productController.deleteProduct);


module.exports = router;