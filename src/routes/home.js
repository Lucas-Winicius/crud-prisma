const { Router } = require("express");
const router = new Router();
const homeController = require('../controllers/home')

router.get("/", homeController.get);
router.post("/", homeController.post);
router.patch("/", homeController.patch);

module.exports =  router;