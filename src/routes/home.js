const { Router } = require("express");
const router = new Router();
const homeController = require('../controllers/home')

router.get("/", homeController.get);

module.exports =  router;