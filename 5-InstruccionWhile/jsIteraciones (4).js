function Mostrar()
{

	var numero = prompt("ingrese un número entre 0 y 10.");
while (numero < 0 || numero > 10 || isNaN (numero)){
/* isNaN intenta convertir el parámetro pasado a un número.
Si el parámetro no se puede convertir, devuelve true;
en caso contrario, devuelve false
*/
	alert ("ingreso incorrecto");
	numero = prompt("ingrese un número entre 0 y 10.");
}
alert("Ingreso correcto");
document.getElementById("Numero").value = numero;
}//FIN DE LA FUNCIÓN	