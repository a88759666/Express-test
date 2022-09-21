const express = require("express");
const router  = express.Router();

router.get("/main",(req,res)=>{
  res.send("Main");
});

module.exports = router;
