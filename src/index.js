const express = require("express");
const app = express();

const {PORT} = require("./config/serverConfig");
app.listen(PORT, function(){
    console.log(`server listening on port ${PORT}`);
});

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.get("/", function(req, res){
    res.send("Home Page :)");
});