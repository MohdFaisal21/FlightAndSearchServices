const { where } = require("sequelize");
const {City} = require("../models");



class CityRepository{
    async createCity(name){
        try{
            const city = await City.create({name});
            return city;
        }catch(err){
            console.log("Something went wrong in the repository layer");
            throw {err};
        }
    }

    async deleteCity(cityId){
        try{
            await City.destroy({
                where : {
                    id: cityId
                }
            });
            return true;
        }catch(err){
            console.log("Something went wrong in the repository layer");
            throw {err};
        }
    }

    async getCity(cityId){
        try {
            const city = await City.findByPK(cityId);
            return city;
        } catch (err) {
            console.log("Something went wrong in the repository layer");
            throw {err};
        }
    }
    async updateCity(cityId, data){
        try {
            const city = await City.update(data, {where:
                {id : cityId}
            });
            return city;
        } catch (error) {
            console.log("Something went wrong in the repository layer");
            throw {err};
        }
    }
}

module.exports = CityRepository;