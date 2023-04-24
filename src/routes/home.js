const { Router } = require("express");
const router = new Router();
const homeController = require('../controllers/home')

router.get("/", homeController.get);
router.post("/", homeController.post);
router.patch("/", homeController.patch);
router.delete("/", homeController.delete);

module.exports =  router;