const express = require('express');
const router = express.Router();

router.get("/location",(req,res)=>{
    res.send("Hello let me get the location for you")
})

module.exports = router;