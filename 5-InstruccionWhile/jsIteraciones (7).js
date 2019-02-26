function Mostrar()
{
/*do while, primero ingresa y evalua
la condicion al final, por lo menos 
un ves.
do
la operacion a realizar

whiler (condicion)
la manera de escribir el codigo
*/
	var contador=0;
	var acumulador=0;
	var respuesta;
	var numero;

do{
	numero = parseInt( prompt ("Ingrese numero"));
	while (isNaN(numero)){
		numero = parseInt( prompt ("Ingrese numero"));
	}
	respuesta = confim ("Desea continuar").toLocaleLowerCase();
	acumulador = numero+acumulador;
	contador++;
}
while(respuesta == "si")


/*while(respuesta == "si")
{
	numero = parseInt( prompt ("Ingrese numero"));
	respuesta = prompt ("Desea continuar").toLocaleLowerCase();
	acumulador = numero+acumulador;
	contador++;
}
*/
alert("Fin de la funcion");
document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/contador;

}//FIN DE LA FUNCIÓN
//los acumuladores guardan datos variables
//los contadores guardan valores constantes