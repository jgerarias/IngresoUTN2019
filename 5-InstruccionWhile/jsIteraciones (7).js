function Mostrar()
{

	var contador=0;
	var acumulador=0;
	var respuesta='si';
	var numero;

	/*
	solo con while sin validar si es numero o letra
	while(respuesta=="si"){

	numero = parseInt( prompt (contador+1+") ingrese numero"));
	acumulador = numero+acumulador;
	contador++
	respuesta = prompt("Quiere seguri ingresando numeros ")	
	}
*/

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

numero = parseInt( prompt (contador+1+") Ingrese numero"));//pide ingrese numero
	
	while (isNaN(numero)){//valida si  lo ingresado es numero
		
		numero = parseInt( prompt (contador+1+") Ingrese solo numero"));
	}
		respuesta = confirm ("Desea continuar");	
		acumulador = numero+acumulador;
		contador++;
	

}while(respuesta)


/*while(respuesta == "si")
{
numero = parseInt( prompt ("Ingrese numero"));
respuesta = prompt ("Desea continuar").toLocaleLowerCase();
acumulador = numero+acumulador;
contador++;
}
*/

document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/contador;

}//FIN DE LA FUNCIÓN