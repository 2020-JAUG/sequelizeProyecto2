const { Pasajero } = require("../models");

class Viajero {

    async allPassengers() {

        return Pasajero.findAll();
    }


    async passengerId(id) {

        return Pasajero.findByPk(id);
    }


    async newPassengers(body) {

        return Pasajero.create(body);
    }

    async deletePassengers(id) {

        return Pasajero.destroy( { wehre: {id: id} } );
    }

    async modifyPassengers(body) {

        return Pasajero.update(
            //Datos que cambiamos
            {edad: body.edad, especialidad: body.especialidad },
            //Donde
            {where: {id: body.id}}
        );
    }
}

let pasajeroController = new Viajero();
module.exports = pasajeroController;