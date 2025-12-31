const express = require("express");
const {PORT} = require("./config/serverConfig");
const CityRepository = require("./repository/city-repository")
const setupAndStartServer = async ()=>{
    const app = express();
    app.use(express.json());
    app.use(express.urlencoded({extended:true}));
    
    app.listen(PORT, function(){
        console.log(`server listening on port ${PORT}`);
        const repo = new CityRepository();

        repo.createCity("Mumbai");
    });
}

setupAndStartServer();