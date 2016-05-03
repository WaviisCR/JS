//Escribe aquí tu código
var cantidad_personas = prompt("Ingresa la cantidad de perssonas:");

function costo_por_cantidad_personas () {
	 if (cantidad_personas < 200) {
	  	alert("El costo por persona es de $95.");
	  } else if (cantidad_personas < 200 && cantidad_personas <= 300) {
	  	alert("El costo por persona es de $85.");
	  }else {
	  	alert("El costo por persona es de $75.");
	  }
}
costo_por_cantidad_personas()