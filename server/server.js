const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const dotenv = require('dotenv')

let UtilisateurRouter = require('./routes/utilisateur-route')
let LoginRouter = require('./routes/login-route')
let SignupRouter = require('./routes/signup-route')

dotenv.config()
 
const app = express()
const PORT = process.env.PORT || 5000 
 
app.use(cors()) 
app.use(express.json()) 

const URL_DB = process.env.ATLAS_URL 
mongoose.connect(URL_DB) 
const connection = mongoose.connection

connection.once('open', () => {
    console.log('MongoDB databases connection established successfully')
})

app.use('/utilisateur', UtilisateurRouter)
app.use('/login', LoginRouter)
app.use('/signup', SignupRouter)


app.listen(PORT, () => {
    console.log(`Server is runnig on port ${PORT}`)
})  
