//Escribe aquí tu código
var x1 = prompt("Escribe el primer numero: ");
var x2 = prompt("Escribe el segundo numero: ");
var x3 = prompt("Escribe el tercer numero: ");

function numero_mayor() {
    if (x1 > x2 && x1 > x3) {
        alert(x1 + " es mayor.");
    } else if (x2 > x1 && x2 > x3) {
        alert(x2 + " es mayor.");
    } else if (x3 > x1 && x3 > x2) {
        alert(x3 + "es mayor.");
    } else if (x1 === x2 && x2 === x3 && x1 === x3) {
        alert("Los tres numeros son iguales");
    }
}
numero_mayor()