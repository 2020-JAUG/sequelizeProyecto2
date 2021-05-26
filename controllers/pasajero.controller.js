const { Pasajero } = require("../models");
const bcrypt = require("bcrypt");

class Viajero {

    async allPassengers() {

        return Pasajero.findAll();
    }


    async passengerId(id) {

        return Pasajero.findByPk(id);
    }


    async newPassengers(body) {

        let password = body.password;
        let passwordHased = bcrypt.hashSync(password, 10);
        body.password = passwordHased;

        return Pasajero.create(body);
    }

    async deletePassengers(id) {

        return Pasajero.destroy( { where: {id: id} } );
    }

    async modifyPassengers(body) {

        return Pasajero.update(
            //Datos que cambiamos
            {edad: body.edad, especialidad: body.especialidad },
            //Donde
            {where: {id: body.id}}
        );
    }

    async deletePassenger(id){

        return Pasajero.destroy({where: {id: id}});
    }
}

let pasajeroController = new Viajero();
module.exports = pasajeroController;


// if( nombre === "nombre" ) {
//     return User.findByName(nombre);
// } else {
//     return ("Wrong Name!")
// }