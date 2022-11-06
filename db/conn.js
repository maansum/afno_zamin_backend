
const mongoose = require('mongoose')
mongoose.connect("mongodb://localhost:27017/afno_zamin",{ useNewUrlParser: true, useUnifiedTopology: true }).then(()=>{
    console.log('connected!');
}).catch((e)=>{
    console.log('connected!');

})

