function Mostrar()
{

	var contador=0;
	var acumulador=0;
	var respuesta;
	var numero;
	
	do{

			numero = parseInt( prompt (contador+1+") Ingrese numero"));//pide ingrese numero
			
			while (isNaN(numero)){//valida si  lo ingresado es numero
				
				numero = parseInt( prompt (contador+1+") Eso no es un numero, ingrese numero"));
			}
				respuesta = confirm ("Desea continuar");	
				acumulador = numero+acumulador;
				contador++;
			
		
		}while(respuesta)
	
	
	
	/*while (respuesta == "si" || isNaN(numero)){
		numero = parseInt(prompt(contador+1+ " Ingrese numero"));
		respuesta = prompt("Desea seguir").toLocaleLowerCase();
		acumulador = numero+acumulador;
		contador++
	*/
	


document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/contador.toFixed(2);

}//FIN DE LA FUNCIÓN