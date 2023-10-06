require('dotenv').config()
const express = require('express')

const app = express()
//middlewares


//Database
require('./database/config')

app.listen(3000,()=>
    console.log('Servidor Online')
)
