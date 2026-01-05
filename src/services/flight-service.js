const {FlightRepository, AirplaneRepository} = require("../repository");

const compareTime = require("../utils/helper");

class FlightService{
    constructor(){
        this.airplaneRepository = new AirplaneRepository();
        this.flightRepository = new FlightRepository();
    }

    async createFlight(data){
        try {
            if(!compareTime(data.arrivalTime, data.departureTime)){
                throw "Arrival time cannot be less than departure";
            }
            const airplane = await this.airplaneRepository.getAirplane(data.airplaneId);
            const flight = await this.flightRepository.createFlight(
                {...data, totalSeats:airplane.capacity}
            );
            return flight;
        } catch (error) {
            console.log("Something went wrong at service layer");
            throw error;
        }
    }
}



module.exports = FlightService;

/*
 {
    flightNumber,
    airplaneId, 
    departureAirportId,
    arrivalAirportId,
    arrivalTime,
    departureTime,
    price
    totalSeats -> airplane
 }
*/