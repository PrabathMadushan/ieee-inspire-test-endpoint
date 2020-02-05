const express = require('express');
const app = express();

const productRouter=require('./api/routes/products')
const userRouter=require('./api/routes/user')

app.use('/product',productRouter)
app.use('/user',userRouter)

module.exports = app;