function Mostrar()
{
	// declarar variables
	var contador=0;
	var numero;
	var maximo;
	var minimo;
	var respuesta='si';

	//while(respuesta!='no')
do{
	numero = parseInt( prompt ("Ingrese numero"));
	while (isNaN(numero)){
		numero = parseInt( prompt ("Ingrese numero"));
	}
	if (contador ==0){
		maximo=numero;
		minimo=numero;
	}
contador++
	if (numero >maximo){
		maximo=numero;
	}

	if(numero<minimo){
		minimo=minimo;
	}

respuesta = confirm ("Desea continuar");
}while(respuesta!='no')

document.getElementById("maximo").value =maximo	
document.getElementById("minimo").value =minimo	




}//FIN DE LA FUNCIÓN