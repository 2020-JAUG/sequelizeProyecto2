const { Nave } = require("../models");

class Maquina {

    async allNave() {

        return Nave.findAll();
    }


    async naveId(id) {

        return Nave.findByPk(id);
    }


    async newNave(body) {

        return Nave.create(body);
    }

    async deleteNave(id) {

        return Nave.destroy( { where: {id: id} } );
    }

    // async modifyNave(body) {

    //     return Nave.update(
    //         //Datos que cambiamos
    //         {edad: body.edad, especialidad: body.especialidad },
    //         //Donde
    //         {where: {id: body.id}}
    //     );
    // }
}

let naveController = new Maquina();
module.exports = naveController;