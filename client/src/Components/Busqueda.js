/**
 * Javier Ribal del Río
 * 
 * javierribal@gmail.com
 */

import React, { Component } from 'react';

import { useLocation } from 'react-router-dom';


class Busqueda extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (<p>Hola ::: {JSON.stringify(this.props.location.state)}</p>);
    }
}


//Creamos el hook que nos poermite usar location
export default function (props) {

    const location = useLocation();

    return <Busqueda {...props} location={location} />

};