import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


class Miniatura extends Component {
    constructor(props) {
        super(props);
    }

    render() {


        //Coge estas propiedades de zapato
        const { marca, talla, modelo } = this.props.zapato;

        return (

            <div className='Miniatura'>

                <table className='Info-Miniatura'>
                    <tbody>
                        <tr className='Info-Miniatura-Marca'>

                            <th className='Caracteristica-Info-Miniatura Caracteristica-Miniatura-Marca'>Marca:</th>
                            <td>{marca}</td>
                        </tr>

                        <tr className='Info-Miniatura-Modelo'>

                            <th className='Caracteristica-Info-Miniatura Caracteristica-Miniatura-Modelo'>Modelo:</th>
                            <td>{modelo}</td>
                        </tr>

                        <tr className='Info-Miniatura-Talla'>

                            <th className='Caracteristica-Info-Miniatura Caracteristica-Miniatura-Talla'>Talla:</th>
                            <td>{talla}</td>
                        </tr>

                    </tbody>
                </table>

                <div className='Zona-Boton-Miniatura'>

                    <button className='Zona-Boton-Miniatura'>

                        + Información
                    </button>

                </div>

            </div>

        );
    }
}

export default Miniatura;