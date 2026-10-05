const express = require("express");

const router = express.Router();


router.post("/", (req, res) => {

    const event = req.body;

    console.log("Webhook received:");
    console.log(event);


    if(event.type === "payment.success"){
        console.log("Payment Successful");
    }


    res.status(200).json({
        message: "Webhook received successfully"
    });

});


module.exports = router;