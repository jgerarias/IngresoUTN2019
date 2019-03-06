function Mostrar()
{
	// declarar variables
	var contador=0;
	var numero;
	var maximo;
	var minimo;
	var respuesta;
	var flag=0;
	//var respuesta='si';

	do{
		numero = parseInt(prompt(contador+1+ " Ingrese un numero"));
		while(isNaN(numero)){
			numero = parseInt(prompt(contador+1+ " No es un numero Ingrese un numero"));
		}
		if (flag ==0){
			minimo=numero;
			maximo=numero;
			flag =1;
		}

		if(numero > maximo ){
			maximo=numero;
		}
		else if(numero < minimo){
			minimo =numero;
		}
		contador++;
		respuesta = confirm("Desea continual");

	}
	//while(respuesta!='no')
	while(respuesta)
		
	document.getElementById("maximo").value = maximo;
	document.getElementById("minimo").value = minimo;

}//FIN DE LA FUNCIÓN