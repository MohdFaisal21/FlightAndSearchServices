const {AirportRepository}  = require("../repository");

class AirportService {

    async createAirport(data){
        try {
            const airportInfo = {
                name:data.name,
                cityId: data.cityId
            }
            const airport = await AirportRepository.createAirport(airportInfo);
            return airport;
        } catch (err) {
            console.log("Something went wrong in the service layer");
            throw {err};
        }
    }

    async createAirports(data){
        try {
            const {airports} = data;
            const airportsInfo = airports.map(airport => ({
                name: airport.name,
                cityId:airport.cityId
            }));
            const _airports = await AirportRepository.createAirports(airportsInfo);
            return _airports;
        } catch (err) {
            console.log("Something went wrong in the service layer");
            throw {err};
        }
    }

    async updateAirport(airportId, data){
        try {
            const airport = await AirportRepository.updateAirport(airportId, data);
            return airport;
        } catch (err) {
            console.log("Something went wrong in the service layer");
            throw {err};
        }
    }

    async deleteAirport(airportId){
        try {
            const response = await AirportRepository.deleteAirport(airportId);
            return response;
        } catch (err) {
            console.log("Something went wrong in the service layer");
            throw {err};
        }
    }

    async getAirport(airportId){
        try {
            const airport = await AirportRepository.getAirport(airportId);
            return airport;
        } catch (err) {
            console.log("Something went wrong in the service layer");
            throw {err};
        }
    }
    async getAllAirports(filter){
        try {
            const airports = await AirportRepository.getAllAirports({name: filter.name});
            return airports;
        } catch (err) {
            console.log("Something went wrong in the service layer");
            throw {err};
        }
    }

    async getCityAirports(cityName){
        try{
            const airports = await AirportRepository.getCityAirports(cityName);
            return airports;
        }catch(err){
            console.log("Something went wrong in the service layer");
            throw {err};
        }
    }
}

module.exports = AirportService;
