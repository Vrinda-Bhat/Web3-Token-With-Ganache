const express=require('express')

const app=express()

const transfer=require('./routes/transfer')
const balance=require('./routes/balance')
const mint=require('./routes/mint')
const totalSupply=require('./routes/totalSupply')


app.use('/transfer',transfer)
app.use('/balance',balance)
app.use('/mint',mint)
app.use('/totalSupply',totalSupply)

app.use(express.json())

app.listen(8000,()=> {console.log("Server started :8000")})