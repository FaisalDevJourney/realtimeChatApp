const router= require("express").Router();

router.post("/register",(req,res)=>{
    res.send("its auth route")
})

module.exports = router