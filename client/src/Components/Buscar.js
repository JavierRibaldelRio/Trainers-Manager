/**
 * Javier Ribal del Río
 * 
 * javierribal@gmail.com
 */

import React, { Component } from 'react';
import FormularioTrainer from './FormularioTrainer';
import eliminarUndefined from '../Scripts/EliminarPropiedadesSinDefinir';

class Buscar extends Component {
    constructor(props) {
        super(props);
        this.state = {}

        this.buscar = this.buscar.bind(this);
    }

    //Manda el servidor lo que se desea buscar
    buscar(query) {

        //Del objeto entrante eliminamos los undefined
        eliminarUndefined(query);

        console.log(query);


    }



    render() {
        return (<FormularioTrainer textoBoton={'Buscar'} ocultarObservaciones={true} enviar={this.buscar} />);
    }
}

export default Buscar;