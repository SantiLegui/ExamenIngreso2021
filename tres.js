
/*Bienvenidos.
debemos alquilar el servicio de transporte para llegar a Mar del Plata con un grupo de personas, 
de cada persona debemos optener los siguientes datos:
Nombre,
estado civil ("soltero", "casado" o "viudo"),
edad( solo mayores de edad, mas de 17),
temperatura corporal(validar por favor)
y sexo (validar).
NOTA:el precio por pasajero es de $600.
Se debe informar (solo si corresponde):
a) La cantidad de personas con estado "viudo" de mas de 60 años.
b) el nombre y edad de la mujer soltera mas joven.
c) cuanto sale el viaje total sin descuento.
d) si hay mas del 50% de los pasajeros que tiene mas de 60 años , 
el precio final tiene un descuento del 25%, que solo mostramos si corresponde.*/
function mostrar() {
	let nombre;
	let estadoCivil;
	let edad;
	let edadMin;
	let contPers = 0;
	let contSesenta = 0;
	let nombreMin;
	let viajeSDesc;
	let viajeCDesc;
	let desc;
	let flagE = 1;
	let temp;
	let sexo;
	let precio = 600;
	let viudosSesenta = 0;
	let seguir = "s";


	do {
		nombre = prompt("Ingrese un nombre:").toLowerCase();
		estadoCivil = prompt("Ingrese el estado civil:").toLowerCase();
		while (estadoCivil != "soltero" && estadoCivil != "casado" && estadoCivil != "viudo") {
			estadoCivil = prompt("Dato invalido.Ingrese el estado civil:").toLowerCase();
		}
		edad = parseInt(prompt("Ingrese su edad:"))
		while (edad < 17 || isNaN(edad)) {
			edad = parseInt(prompt("Dato invalido.Ingrese su edad:"))
		}
		temp = parseInt(prompt("Ingrese su temperatura corporal"))
		while (isNaN(temp)) {
			temp = parseInt(prompt("Dato invalido.Ingrese su temperatura corporal"))
		}
		sexo = prompt("Ingrese su sexo   f/m")
		while (sexo != "f" && sexo != "m") {
			sexo = prompt("Dato invalido.Ingrese su sexo    f/m")
		}
		if (estadoCivil == "viudo" && edad >= 60) {
			viudosSesenta++
		}
		if (edad >= 60) {
			contSesenta++
		}
		if (sexo == "f") {

			if (flagE || edad < edadMin) {
				edadMin = edad
				nombreMin = nombre
			}
		}
		contPers++












		seguir = prompt("Desea seguir ingresando datos?   s/n")
	} while (seguir == "s");
	viajeSDesc = precio * contPers;
	if (contPers / 2 == contSesenta) {
		desc = precio * 25 / 100
		viajeCDesc += precio - desc

	}

	console.log("Hay " + viudosSesenta + " personas con estado viudo de mas de 60 años ")
	if (!(nombreMin == undefined)) {
		console.log(nombreMin + " es la mujer soltera mas joven, con " + edadMin + " años")
	}
	console.log("El viaje total sin descuento sale " + viajeSDesc)
	console.log("El viaje con descuento es de " + viajeCDesc)
	


}








