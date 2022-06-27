/**
 * Javier Ribal del Río
 * 
 * Javierribal@gmail.com
 */


//Ordena basandose en dos criterios: primero por Modelo y después por Marca

function ordenar(arr) {

    arr.sort(ordenarModelo);    //Ordena por Modelo

    arr.sort(ordenarMarca);     //Ordena per Marca

}

var ordenarMarca = (a, b) => {
    if (a.marca > b.marca) {
        return 1;
    }

    if (a.marca < b.marca) {
        return -1;
    }

    return 0;
}

function ordenarModelo(a, b) {

    if (a.modelo > b.modelo) {
        return 1;
    }

    if (a.modelo < b.modelo) {
        return -1;
    }

    return 0;
}

module.exports = ordenar;