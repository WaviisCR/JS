//Escribe aquí tu código
// entrada del usuario 
    var tarjeta = parseInt(prompt("Hola, bienvenido a El náufrago satisfecho :) ¿Efectivo o tarjeta?"));
    var tipo_burger = parseInt(prompt("¿Qué hamburguesa deseas: Sencilla, Doble o Triple?"));
    var cantidad_burger = parseInt(prompt("¿Cuántas deseas?"));
// logica - proceso
    var costo_total = costo_hamburguesa(tarjeta,tipo_burger,cantidad_burger);
    function costo_hamburguesa(tarjeta,tipo_burger,cantidad_burger) {
        var precio = precio_neto(tipo_burger,cantidad_burger);
        var descuento = validar_descuento(tarjeta,precio);
        return descuento;
    }
    
    function precio_neto(tipo_burger,cantidad_burger) {
        var precio = 0;
        switch(tipo_burger) {
            case 1:
                precio = parseFloat(20.00 * cantidad_burger);
                break;
            case 2:
                precio = parseFloat(25.00 * cantidad_burger);
                break;
            case 3:
                precio = parseFloat(28.00 * cantidad_burger);
                break;
            default:
                alert("Haz tu pedido de nuevo.");
                break;
        }
        return precio;
    }
    function validar_descuento(tarjeta,precio_neto) {
        if(tarjeta === 1) {
            return precio_neto * 0.95;
        } else {
            return precio_neto;
        }
    }
// output
alert("Tu pedido es " + costo_total);
