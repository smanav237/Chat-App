const express = require('express');
const mongoUrl = ''
const app = express();

app.get('/test', (req,res)=>{
    res.json('test ok')
});

app.post('./register', (req,res)=>{ // endpoint for register page

})
app.listen(4040)                       
