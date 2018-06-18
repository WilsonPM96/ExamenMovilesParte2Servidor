/**
 * Estudiante.js
 *
 * @description :: A model definition.  Represents a database table/collection/etc.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    idEstudiante:{
      type: "number"
    },

    nombres:{
      type: "string"
    },

    apellidos:{
      type: "string"
    },

    fechaNacimiento:{
      type:"string"
    },
    semestreActual:{
      type:"number"
    },
    graduado:{
      type:"string"
    },
    materias:{
      collection:"Materia",
      via:"estudianteId"
    }

  },

};

