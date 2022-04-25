/**
 * Javier Ribal del Río
 * 
 * javierribal@gmail.com
 */

import React, { Component } from 'react';
import FormularioTrainer from './FormularioTrainer';

class AnyadirTrainer extends Component {
    constructor(props) {
        super(props);
        this.state = {}

        this.anyadirAlServidor = this.anyadirAlServidor.bind(this);
        this.refrescar = this.refrescar.bind(this);

    }

    //Envia al servodivor la nueva zapatilla a añadir
    anyadirAlServidor(trainer) {

        fetch('http://127.0.0.1:3001/add', 						//La url del sevidor
            {
                method: 'POST', // or 'PUT'
                body: JSON.stringify(trainer), // data can be `string` or {object}!
                headers: {
                    'Content-Type': 'application/json'
                }
            }).then(response => response.json())
            .then(respuesta => this.setState({ respuesta: respuesta }));


    }

    //Refresca la página
    refrescar() {
    }

    render() {

        let vuelta;     //Si no se ha detectado ninguna vuelta al servidor

        //Si la respuesta es desconocida
        if (this.state.respuesta === undefined) {
            vuelta = <FormularioTrainer enviar={this.anyadirAlServidor} textoBoton='Registrar trainer' />;

        }
        else {

            vuelta =
                <div>
                    <p>{this.state.respuesta}</p>
                    <br />
                    <form>
                        <button type='submit' id='Boton-Registrar' onClick={this.refrescar()}>Registrar otra zapatilla</button></form>
                </div>;
        }

        return vuelta;


    }
}

export default AnyadirTrainer;