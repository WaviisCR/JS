//Escribe aquí tu código
var cantidad_alumnos = prompt("Ingrese la cantidad de alumnos que realizara el viaje.")

function calculo_costo_viaje () {
	 if (cantidad_alumnos >= 100) {
	 	var pago_total_viaje = cantidad_alumnos * 65;
	   	alert("El costo por cada alumno sera $65 y el costo por el viaje sera " + pago_total_viaje)
	   } else if (cantidad_alumnos >= 50 && cantidad_alumnos <= 99) {
	   	var pago_total_viaje = cantidad_alumnos * 70;
	   	alert("El costo por cada alumno sera $70 y el costo por el viaje sera " + pago_total_viaje)
	   }else if (cantidad_alumnos >= 30 && cantidad_alumnos <= 49) {
	   	var pago_total_viaje = cantidad_alumnos * 95;
	   	alert("El costo por cada alumno sera $95 y el costo por el viaje sera " + pago_total_viaje)
	   }else if (cantidad_alumnos < 30) {
	   	alert("El costo del viaje sera $4000.")
	   }
}
calculo_costo_viaje()