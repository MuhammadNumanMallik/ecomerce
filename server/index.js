const express = require('express')
const app = express()
const Auth=require('./Routers/AuthRoutes')
const Product=require('./Routers/ProductRoutes')
const connectToDatabase=require('./Database/Db')
var cors = require('cors')
app.use(cors())
connectToDatabase();
app.use(express.json());

app.use('/admin', Auth) 
app.use('/admin', Product) 

app.listen(3000) 