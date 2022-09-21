const express = require("express");
const router  = express.Router();

router.get("/portfolio",(req,res)=>{
  res.send("Portfolio");
});

module.exports = router;
