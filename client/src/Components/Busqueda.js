/**
 * Javier Ribal del Río
 * 
 * javierribal@gmail.com
 */

import React, { Component } from 'react';
import MostrarZapatos from './MostrarZapatos';

import { useLocation } from 'react-router-dom';


class Busqueda extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (<MostrarZapatos zapatos={this.props.location.state} />);
    }
}


//Creamos el hook que nos poermite usar location
export default function (props) {

    const location = useLocation();

    return <Busqueda {...props} location={location} />

};