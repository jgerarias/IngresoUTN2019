/*7- realizar el algoritmo que permita el ingreso por prompt de las notas (validar entre 0 y 10) y el sexo
(validar el sexo “f” o “m”) de 100 alumnos, informar por alert:
a) el promedio de las notas totales.
b) la nota más baja.
c) la cantidad de varones que su nota haya sido mayor o igual a 6.7- realizar el algoritmo que permita el ingreso por prompt de las notas (validar entre 0 y 10) y el sexo
(validar el sexo “f” o “m”) de 100 alumnos, informar por alert:
a) el promedio de las notas totales.
b) la nota más baja.
c) la cantidad de varones que su nota haya sido mayor o igual a 6.
*/

function Mostrar()
{
var nota;
var sexo;
var promedio;
var notaBaja;
var contadorVaronesMas5 = 0;
var acumuludar = 0;
var flag = 0;
var sexoNotaBaja = 0;
var cantidad = 3;

for (var i = 0 ; i < cantidad; i++ ){
	nota = parseInt (prompt("Ingrese nota: "));
	while (nota < 0 || nota > 10 || isNaN (nota)){
		nota = parseInt (prompt("Error. Reingrese nota: "));
	
		}

	sexo = prompt( "Ingrese sexo: ");
	while ( sexo != "f" && sexo != "m"){
		sexo = prompt( "Ingrese sexo: ");
		}
	acumuludar = acumuludar+nota;

	if ( sexo == "m" && nota > 6){
		contadorVaronesMas5++;
		}

	if (nota < notaBaja || flag == 0){
		notaBaja = nota;
		sexoNotaBaja = sexo;
		flag = 1;
		}

	}
	promedio = acumuludar/cantidad;

	alert("Promedio de las notas: "+ promedio.toFixed(2) + "\n Varones con nota mayores: " + contadorVaronesMas5 + "\n nota mas baja: " + notaBaja + "\n sexo de la nota mas baja: " +sexoNotaBaja)
} 