
/*Debemos realizar la carga de una compra de 5(cinco) productos de desinfección
de cada una debo obtener los siguientes datos:
el nombre del producto el tipo de producto (validar "ALCOHOL", "IAC" o "QUAT"),
el precio (validar entre 100 y 300),
la cantidad de unidades (no puede ser 0 o negativo y no debe superar las 1000 unidades),
el tipo de inflamable("ignífugo", "combustible", "explosivo" ) y la Marca.
Se debe Informar al usuario lo siguiente:
a) El promedio de cantidad por tipo de producto
b) El tipo de inflamable con más cantidad de unidades en total de la compra
c) Cuántas unidades de IAC con precios menos a 200 (inclusive) se compraron en total
d) la marca y tipo del más caro de los productos
*/function mostrar() {
	let tipo;
	let tipoMax;
	let price;
	let priceMax;
	let acum = 0;
	let acumTotal;
	let cont;
	let iacDos = 0;
	let maxAcum;
	let maxInf;
	let tipoInfla;
	let marca;
	let marcaMax;
	let flagT = 1;
	let promedio;
	let flagInf = 1;

	for (let i = 0; i < 5; i++) {
		tipo = prompt("Ingrese un tipo de producto  ALCOHOL/IAC/QUAT/").toLocaleLowerCase();
		while (tipo != "alcohol" && tipo != "iac" && tipo != "quat") {
			tipo = prompt("Dato invalido.Ingrese un tipo de producto  ALCOHOL/IAC/QUAT/").toLocaleLowerCase();
		}
		price = parseInt(prompt("Ingrese un precio entre 100 y 300"));
		while (price < 100 || price > 300 || isNaN(price)) {
			price = parseInt(prompt("Dato invalido.Ingrese un precio entre 100 y 300"));
		}
		acum = parseInt(prompt("Ingrese la cantidad del producto, el maximo de unidades es 1000"));
		while (acum <= 0 || acum > 1000 || isNaN(acum)) {
			acum = parseInt(prompt("Dato invalido.Ingrese la cantidad del producto, el maximo de unidades es 1000"));	
		}
		tipoInfla = prompt("Ingrese un tipo de inflamable ignífugo/combustible/explosivo").toLocaleLowerCase();
		while (tipoInfla != "ignifugo" && tipoInfla != "combustible" && tipoInfla != "explosivo") {
			tipoInfla = prompt("Dato invalido.Ingrese un tipo de inflamable ignífugo/combustible/explosivo").toLocaleLowerCase();

		}
		marca = prompt("Ingrese la marca del producto");
		
		acum+= acumTotal;

		if (tipo == "alcohol") {
			cont++
		}
		
		if (tipo == "iac") {
			if (precio <= 200) {
				iacDos++
				cont++
			}
			else{
				cont++
			}
		}
		
		else {
			cont++
		}
		if (flagT || price > priceMax) {
			priceMax = price
			tipoMax = tipo

		}
		
		if (flagInf || acum > maxAcum ) {
			maxAcum = acum;
			maxInf = tipoInfla;
			marcaMax = marca;
		}
		

	}
promedio = acumTotal / cont


	console.log("El promedio de cantidad por tipo de producto es de "+ promedio +"<br>");
	console.log("El tipo de inflamable con más cantidad de unidades en total de la compra es el "+ maxInf +"<br>");
	console.log("Se compraron " + iacDos + " unidades de IAC con precios menos a 200" +"<br>");
	console.log("El tipo del más caro de los productos es "+ tipoMax + " de la marca " + marcaMax +"<br>");









}
