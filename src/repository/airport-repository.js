const {Airport, City} = require("../models");
const {Op} = require('sequelize');

class AirportRepository{
    static async createAirport(airportInfo){
        try{
            const airport = await Airport.create(airportInfo);
            return airport;
        }catch(err){
            console.log("Something went wrong in the repository layer");
            throw {err};
        }
    }

    static async createAirports(airportsInfo){
        try{
            const airports = await Airport.bulkCreate(airportsInfo);
            return airports;
        }catch(err){
            console.log("Something went wrong in the repository layer");
            throw {err};
        }
    }

    
    static async deleteAirport(airportId){
        try{
            await Airport.destroy({
                where : {
                    id: airportId
                }
            });
            return true;
        }catch(err){
            console.log("Something went wrong in the repository layer");
            throw {err};
        }
    }
    
    static async getAirport(airportId){
        try {
            const airport = await Airport.findByPk(airportId);
            return airport;
        } catch (err) {
            console.log("Something went wrong in the repository layer");
            throw {err};
        }
    }
    
    static async updateAirport(airportId, data){
        try {
            const airport = await Airport.findByPk(airportId);
            if(!airport) return null;
            airport.name = data.name;
            await airport.save();
            return airport;
        } catch (err) {
            console.log("Something went wrong in the repository layer");
            throw {err};
        }
    }

    static async getAllAirports(filter){
        try {
            if(filter.name){
                const airports = await Airport.findAll({
                    where :{
                        name:{
                            [Op.startsWith]:filter.name // ignore it
                        }
                    }
                });
                return airports;
            }
            const airports = await Airport.findAll();
            return airports;
        } catch (err) {
            console.log("Something went wrong in the repository layer");
            throw {err};
        }
    }

    static async getCityAirports(cityName){
        try{
            const city = await City.findOne({
                where:{
                    name : cityName,
                }
            });
            if(!city) return "City not found";
            const airports = await city.getAirports();
            return airports;
        }catch(err){
            console.log("Something went wrong in the repository layer");
            throw {err};
        }
    }
}

module.exports = AirportRepository;