//Escribe aquí tu código
function fijar_numero_personas(cantidad_personas) {
    // body...
    if (cantidad_personas <= 20) {
        // statement
        cantidad_personas = 20;
    }
    return cantidad_personas;
}

function calcular_costo(tipo_bus, km) {
    var costo_km = null;

    switch (tipo_bus) {
        case "A":
            costo_km = parseFloat(2.0 * km);
            break;
        case "B":
            costo_km = parseFloat(2.5 * km);
            break;
        case "C":
            costo_km = parseFloat(3.0 * km);
            break;
        default:
            // statements_def
            alert("Por favor, elige una opcion valida.");
            break;
    }

    return costo_km;
}

function calcular_costo_persona(costo_km, cantidad_personas) {
    // body...  
    var costo_persona = costo_km / cantidad_personas;
    return costo_persona;
}

function calcular() {

    var costo_km = null;
    var km = parseInt(prompt("Ingresa el numero de kilometros por recorrer"));

    do {
        var tipo_bus = prompt("Ingresa el tipo de bus en el que deseas viajar:");
        var costo_km = calcular_costo(tipo_bus, km);
    } while (costo_km == null);

    var cantidad_personas = fijar_numero_personas(parseInt(prompt("Indica cuantas personas viajaran:")));
    var costo_persona = calcular_costo_persona(costo_km, cantidad_personas);

    alert("El costo por persona será: " + costo_persona);
    alert("El costo por viaje será: " + costo_km);

}

calcular();