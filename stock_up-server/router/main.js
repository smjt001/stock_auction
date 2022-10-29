const express = require('express');
const router = express.Router()


const {getmarketdata,makeorder} = require("../controller/marketController");


//api/v1/marketdata       http://localhost:5000/api/v1/marketdata
router.route("/marketdata").get(getmarketdata); 


//api/v1/order       http://localhost:5000/api/v1/order
router.route("/order").post(makeorder);


module.exports = router;  