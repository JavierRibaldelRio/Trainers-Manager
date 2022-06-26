/**
 * Javier Ribal del Río
 * 
 * javierribal@gmail.com
 */

import React, { Component } from 'react';


//Ensenya los zapatos que le han sido enviados desde propiedades, sino le pide al servidor todos los zapatos y los muestra
class MostrarZapatos extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    //Se ejecuta encuanto se monta el componente
    componentDidMount() {

        //Si zapatos es desconocido
        if (this.props.zapatos === undefined) {



        }

    }
    render() {
        return (<p>hola</p>);
    }
}


MostrarZapatos.defaultProps = {

    zapatos: undefined

};

export default MostrarZapatos;