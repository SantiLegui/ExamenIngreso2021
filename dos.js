
/*Realizar el algoritmo que permita ingresar los datos de los alumnos de una division de la UTN FRA, los datos solicitados son:
nombre
Tipo cursada("libre";"presencial";"remota")
cantidad de materias( mas de cero y menos de 8)
Sexo ( femenino , masculino , no binario)
Nota promedio (entre 0 y 10)
edad (validar)
se debe informar de existir, o informar que no existe , en el caso que corresponda.
a) El nombre del mejor promedio que no sea masculino
b) El nombre del mas joven de los alumnos entre los que la dan libre
c) El promedio de nota por sexo
d) La edad y nombre del que cursa mas materias que no sean en forma remota*/
function mostrar() {
  let nombre;
  let nombreRemot;
  let cursada;
  let materias;
  let sexo;
  let contM = 0;
  let contF = 0;
  let contNB = 0;
  let notaProm;
  let promMax;
  let flagP = 1;
  let nombrePromMax;
  let nombreEdadMin;
  let edad;
  let edadRemot;
  let edadMin;
  let notapromF = 0;
  let notapromM = 0;
  let notapromNB = 0;
  let promF = 0;
  let promM = 0;
  let promNB = 0;
  let flagE = 1;
  seguir = "s"


  do {
    nombre = prompt("Ingrese su nombre");
    cursada = prompt("Ingrese su cursada       libre/presencial/remota").toLocaleLowerCase();
    while (cursada != "libre" && cursada != "presencial" && cursada != "remota") {
      cursada = prompt("Dato invalido.Ingrese su cursada       libre/presencial/remota").toLocaleLowerCase();
    }
    materias = parseInt(prompt("Ingrese la cantidad de materias"));
    while (materias <= 0 || materias > 8 || isNaN(materias)) {
      materias = parseInt(prompt("Dato invalido.Ingrese la cantidad de materias"));
    }
    sexo = prompt("Ingrese su sexo: femenino/masculino/ no binario").toLocaleLowerCase()
    while (sexo != "femenino" && sexo != "masculino" && sexo != "no binario") {
      sexo = prompt("Dato invalido.Ingrese su sexo: femenino/masculino/ no binario").toLocaleLowerCase()
    }
    notaProm = parseInt(prompt("Ingrese su nota promedio"))
    while (notaProm < 0 || notaProm > 10 || isNaN(notaProm)) {
      notaProm = parseInt(prompt("Dato invalido.Ingrese su nota promedio"))
    }
    edad = parseInt(prompt("Ingrese su edad"))
    while (isNaN(edad)) {
      edad = parseInt(prompt("Dato invalido.Ingrese su edad"))
    }
    if (sexo != "masculino") {
      if (sexo == "femenino") {
        if (flagP || notaProm > promMax) {
          promMax = prom
          nombrePromMax = nombre
        }
        contF;
        notapromF += nota


      }
      else if (sexo == "no binario") {
        if (flagP || notaProm > promMax) {
          promMax = notaProm
          nombrePromMax = nombre
        } contNB++
        notapromNB += notaProm
      }
      else {
        contM++
        notapromM += notaProm
      }



      if (flagP || notaProm > promMax) {
        promMax = notaProm
        nombrePromMax = nombre
      }
    }
    if (cursada == "libre") {
      if (flagE || edad < edadMin) {
        edadMin = edad
        nombreEdadMin = nombre
      }
    }
    if (cursada != "remota") {
      nombreRemot = nombre
      edadRemot = edad
    }
    seguir = prompt("Desea seguir ingresando datos?  s/n");

  } while (seguir == "s");


  promF = notapromF / contF
  promM = notapromM / contM
  promNB = notapromNB / contNB

  if (isNaN(promF)) {
    promF = 0
  }

  if (isNaN(promM)) {
    promM = 0
  }

  if (isNaN(promNB)) {
    promNB = 0
  }



  console.log("El mejor promedio que no sea masculino es " + nombrePromMax);
  console.log("El alumno mas joven que da libre es " + nombreEdadMin);
  console.log("El promedio de nota de las mujeres es de " + promF);
  console.log("El promedio de nota de los hombres es de " + promM);
  console.log("El promedio de nota de los no binarios es de " + promNB);
  console.log("El alumno que cursa de forma remota es " + nombreRemot + " y tiene " + edadRemot + " años");










}







