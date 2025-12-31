const {City} = require("../models");



class CityRepository{
    async createCity(name){
        try{
            const city = await City.create({name});
            return city;
        }catch(err){
            throw {err};
        }
    }

    async deleteCity({cityId}){
        try{
            await City.destroy({
                where :{
                    id: cityId
                }
            });
        }catch(err){
            throw {err};
        }
    }
}

module.exports = CityRepository;