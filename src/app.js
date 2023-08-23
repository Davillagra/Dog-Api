import express from "express"
import dogsRouter from "./routes/dogs.js"
import breedsRouter from "./routes/breeds.js"
import answerRouter from "./routes/answer.js"
import __dirname from "./utils.js"

const app = express()
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.set(`views`,__dirname + `/views`)
app.use(express.static(__dirname + `/public`))

app.get("/api",(req,res) => {
    res.status(200).send("Servidor en linea")
})

app.use("/api/dogs",dogsRouter)
app.use("/api/breeds",breedsRouter)
app.use("/api/answer",answerRouter)

const server = app.listen(8080,()=>{console.log(`Servidor en linea en el puerto 8080`)})