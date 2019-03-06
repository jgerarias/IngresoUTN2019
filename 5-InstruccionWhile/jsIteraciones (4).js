function Mostrar()
{

	var numero = prompt("ingrese un número entre 0 y 10.");
while(numero < 0 || numero > 9 || isNaN(numero)){
	alert(numero+ " ERROR");
	numero = prompt("REINGRESE numero del 0 al 10.")
}
alert(numero +" ES CORRECTO")
}//FIN DE LA FUNCIÓN