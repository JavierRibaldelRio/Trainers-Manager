/**
 * Javier Ribal del Río
 * 
 * javierribal@gmail.com 
 */

//Elimina las propiedades undefined de un objeto 

function eliminarUndefined(objeto) {

    //Almacena las propiedades del objeto
    const propiedadesObjeto = Object.keys(objeto);

    propiedadesObjeto.forEach((pro) => {

        //Si no esta definido o es un string vacio
        if (objeto[pro] === undefined || objeto[pro] === '') {

            //eliminamos la propiedad del objeto
            delete objeto[pro]
        }
    });
}

export default eliminarUndefined;