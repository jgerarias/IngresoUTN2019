function Mostrar()
{

var numero = parseInt( prompt("ingrese un número entre 0 y 10."));

while (!(numero >= 0 && numero <= 10)){
//while (numero < 0 || numero > 10) otra forma
numero = parseInt ( prompt ("Numero Incorrecto. Reingrese"));

}
document.getElementById("Numero").value = numero
	//alert ("Numero Correcto")

}//FIN DE LA FUNCIÓN