/**
 * Javier Ribal del Río
 * 
 * javierribal@gmail.com
 */

import React, { Component } from 'react';

class FormularioTrainer extends Component {
    constructor(props) {
        super(props);
        this.state = {

            marca: '',
            modelo: '',
            talla: '',
            jubilacion: undefined,
            observaciones: ''
        };

        this.handleMarca = this.handleMarca.bind(this);
        this.handleModelo = this.handleModelo.bind(this);
        this.handleTalla = this.handleTalla.bind(this);
        this.handleJubilacion = this.handleJubilacion.bind(this);
        this.handleObservaciones = this.handleObservaciones.bind(this);

    }

    handleMarca(e) {
        this.setState({ marca: e.target.value });
    }

    handleModelo(e) {
        this.setState({ modelo: e.target.value });
    }
    handleTalla(e) {
        this.setState({ talla: e.target.value });
    }
    handleJubilacion(e) {
        this.setState({ jubilacion: e.target.value });
    }

    handleObservaciones(e) {
        this.setState({ observaciones: e.target.value });
    }

    render() {
        return (
            <div>

                <label>Marca: </label>
                <input id='Input-Marca' name='Input-Marca' type='text' onChange={this.handleMarca} />
                <br />
                <br />

                <label>Modelo: </label>
                <input id='Input-Modelo' name='Input-Modelo' type='text' onChange={this.handleModelo} />
                <br />
                <br />

                <label>Talla: </label>
                <input id='Input-Talla' name='Input-Talla' type='number' onChange={this.handleTalla} />
                <br />
                <br />

                <label>Año De Jubilación: </label>
                <input id='Input-Jubilacion' name='Input-Jubilacion' type='date' onChange={this.handleJubilacion} />
                <br />
                <br />

                <label>Observaciones: </label>
                <br />
                <textarea id='Input-Observaciones' onChange={this.handleObservaciones} />


            </div>
        );
    }
}

export default FormularioTrainer;