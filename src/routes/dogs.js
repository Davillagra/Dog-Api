import { Router } from "express";
import fs from "fs"

const router = Router()
const path = "./src/data/mokDogs.json"

router.get("/", async (req,res)=>{
    const data = await fs.promises.readFile(path,"utf-8")
    const dogs = JSON.parse(data)
    return res.status(200).send(dogs)
})

export default router