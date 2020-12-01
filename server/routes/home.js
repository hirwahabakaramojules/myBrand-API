import express from "express"

const router = express();

router.get("/", (req,res)=>{
    res.status(200).send({msg:"welcome to hirwa personal blog"});
})

export default router;