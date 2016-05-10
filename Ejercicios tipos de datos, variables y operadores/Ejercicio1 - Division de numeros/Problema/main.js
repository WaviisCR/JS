// Escribe aquí tu codigo Javascript
function dividir_numeros(){
	var a = Number(prompt("Porfavor ingresa tu primer número"));
	var b = Number(prompt("Porfavor ingresa tu segundo número"));
	division = a/b;
	alert("El resultado es " + division)
}
dividir_numeros();

function dividir_textos() {
	var a = prompt("Porfavor ingresa tu primera palabra");
	var b = prompt("Porfavor ingresa tu segunda palabra");
	division = a/b;
	alert("El resultado es " + division)
}
dividir_textos();

function dividir_entre_cero() {
	var a = Number(prompt("Porfavor ingresa un número"));
	var b = 0;
	division = a/b;
	alert("El resultado es " + division)
	
}
dividir_entre_cero();