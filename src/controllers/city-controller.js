const {CityService} = require("../services");

const cityService = new CityService();

// POST
const create = async function(req, res){
    try {
        const city = await cityService.createCity(req.body);
        return res.status(201).json({
            data : city,
            success: true,
            message: "Succesfullly created a city",
            err:{}
        });
    } catch (err) {
        console.log(err);
        return res.status(500).json({
            data : {},
            success : false,
            message : `Not able to create a new city. `,
            err
        });
    }
}

// DELETE
const destroy = async function(req, res){
    try {
        const response = await cityService.deleteCity(req.params.id);
        return res.status(200).json({
            data : response,
            success: true,
            message: "Succesfullly deleted a city",
            err:{}
        });
    } catch (err) {
        console.log(err);
        return res.status(500).json({
            data : {},
            success : false,
            message : `Not able to delete a city `,
            err
        });
    }
}

// GET 
const get = async function(req, res){
    try {
        const response = await cityService.getCity(req.params.id);
        return res.status(200).json({
            data : response,
            success: true,
            message: "Succesfullly fetched a city",
            err:{}
        });
    } catch (err) {
        console.log(err);
        return res.status(500).json({
            data : {},
            success : false,
            message : `Not able to get a city`,
            err
        });
    }
}

// PATCH
const update = async function(req, res){
    try {
        const response = await cityService.updateCity(req.params.id, req.body);
        return res.status(200).json({
            data : response,
            success: true,
            message: "Succesfullly updated a city",
            err:{}
        });
    } catch (err) {console.log(err);
        return res.status(500).json({
            data : {},
            success : false,
            message : `Not able to update a city. `,
            err
        });
    }
}


const getAll = async function(req, res){
    try {
        const response = await cityService.getAllCities(req.query);
        return res.status(200).json({
            data : response,
            success: true,
            message: "Succesfullly fetched all cities",
            err:{}
        });
    } catch (err) {
        console.log(err);
        return res.status(500).json({
            data : {},
            success : false,
            message : `Not able to get a city`,
            err
        });
    }
}


module.exports = {
    create, 
    get,
    destroy, 
    update, 
    getAll
};



