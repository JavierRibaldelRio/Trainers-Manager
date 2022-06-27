/**
 * Javier Ribal del Río
 * 
 * javierribal@gmail.com
 */

import React, { Component } from 'react';
import Miniatura from './ZapatoMiniatura';


//Ensenya los zapatos que le han sido enviados desde propiedades, sino le pide al servidor todos los zapatos y los muestra
class MostrarZapatos extends Component {
    constructor(props) {
        super(props);
        this.state = { zapatos: this.props.zapatos };      //Asigna el estado zapatos a la propiedad zapatos
    }

    //Se ejecuta encuanto se monta el componente
    componentDidMount() {

        //Si zapatos es desconocido descargamos todos los zaptos de internet
        if (this.props.zapatos === undefined) {

            fetch('http://127.0.0.1:3001/all').then(response => response.json())
                .then(respuesta => this.setState({ zapatos: respuesta }));
        }

    }
    render() {


        if (this.state.zapatos === undefined) {
            return (<></>)
        }

        else {

            const miniaturas = this.state.zapatos.map(x => <Miniatura key={JSON.stringify(x)} zapato={x} />)


            return (

                <div className="Conjunto-Miniaturas">
                    {/* {JSON.stringify(this.state.zapatos)} */}

                    {miniaturas}

                </div>);
        }
    }
}


MostrarZapatos.defaultProps = {

    zapatos: undefined

};

export default MostrarZapatos;