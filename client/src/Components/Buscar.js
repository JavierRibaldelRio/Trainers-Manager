/**
 * Javier Ribal del Río
 * 
 * javierribal@gmail.com
 */

import React, { Component } from 'react';
import FormularioTrainer from './FormularioTrainer';
import eliminarUndefined from '../Scripts/EliminarPropiedadesSinDefinir';
import { useNavigate } from 'react-router-dom';

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

        fetch('http://127.0.0.1:3001/search', 						//La url del sevidor
            {
                method: 'POST', // or 'PUT'
                body: JSON.stringify(query), // data can be `string` or {object}!
                headers: {
                    'Content-Type': 'application/json'
                }
            }).then(response => response.json())
            .then(respuesta => this.setState({ respuesta: respuesta }));


    }



    render() {
        //Comprueba si hay algo que mostrar
        if (this.state.respuesta !== undefined) {
            if (this.state.respuesta.length === 0) {

                alert("No hay ninguna deportiva que cumpla todas las características");
            }

            else {
                // Coge el navigate desde props
                const { navigate } = this.props;

                navigate('/busqueda', { state: { id: 1, name: 'sabaoon' } });

            }
        }

        return (<FormularioTrainer textoBoton={'Buscar'} ocultarObservaciones={true} enviar={this.buscar} />);
    }
}

//Envolvemos el componente de clase en un componente de función para poder usar navigate
export default function (props) {
    const navigate = useNavigate();

    return <Buscar {...props} navigate={navigate} />;
}