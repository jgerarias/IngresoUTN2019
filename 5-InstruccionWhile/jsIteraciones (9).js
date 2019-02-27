function Mostrar()
{
	// declarar variables
	var contador=0;
	var maximo;	
	var minimo;
	var numero;
	var respuesta;

	//valido si lo ingresado es numero

	do{
		numero = parseInt( prompt (contador+1+") Ingrese numero"));
		while (isNaN(numero)){
			numero = parseInt( prompt (contador+1+") Solo ingrese numero"));
		}
		if (contador == 0){
			maximo = numero;
			minimo = numero;
		}
		contador++;
				
			if (numero > maximo){
			maximo = numero;
			}

			else if (numero < minimo){
			minimo = numero;
		
			}
			else{

			}
		respuesta = confirm ("Desea continuar");

	}while(respuesta);
	
document.getElementById("maximo").value = maximo;
document.getElementById("minimo").value = minimo;		
	
	



}//FIN DE LA FUNCIÓN