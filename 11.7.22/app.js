const express = require('express');
const PORT = process.env.PORT || 3001;
const app =express()

const path = require("path");

const publicDirectoryPath = path.join(__dirname, "./public2");

app.use(express.static(publicDirectoryPath));

app.get("",(req,res)=> { 
    res.render("index")
})


app.listen(PORT,()=> {
    console.log('server is up on port' +PORT);
})