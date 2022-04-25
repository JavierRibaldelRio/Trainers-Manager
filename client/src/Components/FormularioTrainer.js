/**
 * Javier Ribal del Río
 * 
 * javierribal@gmail.com
 */

import React, { Component } from 'react';
import PropTypes from 'prop-types';

class FormularioTrainer extends Component {
    constructor(props) {
        super(props);
        this.state = {

            marca: '',
            modelo: '',
            talla: '',
            fechaDeJubilacion: undefined,
            observaciones: ''
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleReset = this.handleReset.bind(this);

        this.handleMarca = this.handleMarca.bind(this);
        this.handleModelo = this.handleModelo.bind(this);
        this.handleTalla = this.handleTalla.bind(this);
        this.handleFechaDeJubilacion = this.handleFechaDeJubilacion.bind(this);
        this.handleObservaciones = this.handleObservaciones.bind(this);

    }

    //Al enviarse el formulario
    handleSubmit(e) {

        e.preventDefault();     //Evita que se refresqu la página

        //Comprueba que hay algún dato introducido
        if (Object.values(this.state).some(x => x !== '' && x !== undefined)) {

            const trainer = this.state;     //Crea la zapatilla

            this.props.enviar(trainer);     //Ejecuta la función de enviar
        }
        else {
            alert('No se ha introducido ningún dato.');
        }
    }

    //Al reiniciar pone todos los estados en configuración inicial
    handleReset() {
        this.setState({
            marca: '',
            modelo: '',
            talla: '',
            fechaDeJubilacion: undefined,
            observaciones: ''
        });
    }

    //Funciones handle para coger los valores de los inputs del formulario
    handleMarca(e) {
        this.setState({ marca: e.target.value });
    }

    handleModelo(e) {
        this.setState({ modelo: e.target.value });
    }

    handleTalla(e) {
        this.setState({ talla: e.target.value });
    }

    handleFechaDeJubilacion(e) {
        this.setState({ fechaDeJubilacion: e.target.value });
    }

    handleObservaciones(e) {
        this.setState({ observaciones: e.target.value });
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit} onReset={this.handleReset}>

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
                <input id='Input-Fecha-De-Jubilacion' name='Input-Feacha-de-Jubilacion' type='date' onChange={this.handleFechaDeJubilacion} />
                <br />
                <br />

                <div hidden={this.props.ocultarObservaciones}>
                    <label>Observaciones: </label>
                    <br />
                    <textarea id='Input-Observaciones' onChange={this.handleObservaciones} />

                    <br />
                    <br />

                </div>

                <div className='Botones-Control-Formulario'>

                    <button type='submit' id='Boton-Submit'>{this.props.textoBoton}</button>

                    <button type='reset' id='Boton-Reset'>Reiniciar</button>
                </div>

            </form>
        );
    }
}

//En caso de que no hayan propiedades especificadas
FormularioTrainer.defaultProps = {

    textoBoton: 'Validar',
    ocultarObservaciones: false

};

//Especifica que el texto boton tiene que ser un string
FormularioTrainer.propTypes = {
    textoBoton: PropTypes.string,
    observaciones: PropTypes.bool
}

export default FormularioTrainer;