const express = require('express');
const router = express.Router();
const CowinController= require("../controllers/cowinController")
const memesController= require("../controllers/memesController")
const tempController = require("../controllers/tempController")

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})
 

router.get("/get_memes", memesController.get_memes)
router.post("/create_memes", memesController.create_memes)

router.get("/cowin/states", CowinController.getStates)
router.get("/cowin/districtsInState/:stateId", CowinController.getDistricts)
router.get("/cowin/getByPin", CowinController.getByPin)
router.get("/getByDistrictId", CowinController.getByDistrictId)
router.post("/cowin/getOtp", CowinController.getOtp)

router.get("/getTemperature", tempController.getTemperature)
router.get("/getSortedCities",tempController.getSortedCities)
// WRITE A GET API TO GET THE LIST OF ALL THE "vaccination sessions by district id" for any given district id and for any given date



module.exports = router;