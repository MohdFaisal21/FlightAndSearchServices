const {AirportService} = require("../services");

const airportService = new AirportService();

// POST airport
const create = async function(req, res){
    try {
        const airport = await airportService.createAirport(req.body);
        return res.status(201).json({
            data : airport,
            success: true,
            message: "Successfully created a new airport",
            err:{}
        });
    } catch (err) {
        console.log(err);
        return res.status(500).json({
            data : {},
            success : false,
            message : `Not able to create a new airport.`,
            err
        });
    }
}

// DELETE
const destroy = async function(req, res){
    try {
        const response = await airportService.deleteAirport(req.params.id);
        return res.status(200).json({
            data : response,
            success: true,
            message: "Successfully deleted an airport",
            err:{}
        });
    } catch (err) {
        console.log(err);
        return res.status(500).json({
            data : {},
            success : false,
            message : `Not able to delete an airport.`,
            err
        });
    }
}

// GET 
const get = async function(req, res){
    try {
        let response = await airportService.getAirport(req.params.id);
        return res.status(200).json({
            data : !response?`No airport exists with id : ${req.params.id}`:response,
            success: true,
            message: "Successfully fetched an airport",
            err:{}
        });
    } catch (err) {
        console.log(err);
        return res.status(500).json({
            data : {},
            success : false,
            message : `Not able to fetch an airport`,
            err
        });
    }
}

// PATCH
const update = async function(req, res){
    try {
        const response = await airportService.updateAirport(req.params.id, req.body);
        return res.status(200).json({
            data : response,
            success: true,
            message: "Successfully updated an airport",
            err:{}
        });
    } catch (err) {console.log(err);
        return res.status(500).json({
            data : {},
            success : false,
            message : `Not able to update a airport.`,
            err
        });
    }
}

// GET airports
const getAll = async function(req, res){
    try {
        const response = await airportService.getAllAirports(req.query);
        return res.status(200).json({
            data : response,
            success: true,
            message: "Successfully fetched all airports",
            err:{}
        });
    } catch (err) {
        console.log(err);
        return res.status(500).json({
            data : {},
            success : false,
            message : `Not able to get airports.`,
            err
        });
    }
}


// POST airports
const createAll = async function(req, res){
    try {
        const airports = await airportService.createAirports(req.body);
        return res.status(201).json({
            data : airports,
            success: true,
            message: "Successfully created multiple airports",
            err:{}
        });
    } catch (err) {
        console.log(err);
        return res.status(500).json({
            data : {},
            success : false,
            message : `Not able to create airports.`,
            err
        });
    }
}
//  GET City Airports

const getCityAirports = async function(req, res){
    try{
        const {cityName} = req.params;
        const airports = await airportService.getCityAirports(cityName);
        return res.status(200).json({
            data : airports,
            success: true,
            message: `Successfully fetched all airports of ${cityName}`,
            err:{}
        });
    }catch(err){
        console.log(err);
        return res.status(500).json({
            data : {},
            success : false,
            message : `Not able get airports of ${cityName}`,
            err
        });
    }
}

module.exports = {
    create, 
    get,
    destroy, 
    update, 
    getAll,
    createAll,
    getCityAirports
};



