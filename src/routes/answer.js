import { Router } from "express";
import fs from "fs"

const router = Router()

router.post("/", (req,res)=>{
    const body = req.body
    console.log(body)
    return res.status(201).send(body)
})

export default router