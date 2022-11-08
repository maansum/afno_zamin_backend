const express = require('express')
const app = express()
const port = 8000 || process.env.PORT
const cors = require('cors')
const bodyParser = require('body-parser')
require("./db/conn")

app.use(cors())
app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())
app.use('/',require('./routes/userRoute'))
app.use(express.static('public'));

app.listen(port,()=>{
    console.log('port running on '+port)
})
