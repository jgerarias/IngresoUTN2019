function Mostrar()
{
	//declarar contadores y variables 
	
	var numero;
	var sumaPos=0;
	var sumaNeg=0;
	var contarPos=0;
	var contarNeg=0;
	var contarCero=0;
	var contarPar=0;
	var promedioPos;
	var promedioNeg;
	var respuesta;
	var contador=0;
	var diferecia;
	
	
	do{
		numero = parseInt(prompt(contador+1+ " Ingrese un numero"));
		while(isNaN(numero)){
			numero = parseInt(prompt(contador+1+ " No es un numero Ingrese un numero"));
		}
		if(numero > 0){
			sumaPos=numero+sumaPos;
			contarPos++;
			promedioPos= sumaPos/contarPos;
		
		}

		else if (numero < 0){
			sumaNeg=numero+sumaNeg;
			contarNeg++;
			promedioNeg=sumaNeg/contarNeg;
		
		}

		else{
			contarCero++;
		}
		if (numero % 2 == 0){
			contarPar++;	
		}   



		diferecia=sumaPos-sumaNeg;
		contador++;
		respuesta = confirm("Desea continual");
	}while(respuesta)
	alert("La suma de Positivos es "+sumaPos+" \n La suma de Negativos es "+ sumaNeg +"\n La cantidad de Positivos es "+ contarPos+" \n La cantidad de Negativos es "+contarNeg+ " \n La cantidad de ceros "+ contarCero+ "\n La cantidad de Pares son "+contarPar+" \n Promedio de positivos "+promedioPos+" \n Promedio Negativos "+promedioNeg+" \n La diferencia es "+diferecia)
}//FIN DE LA FUNCIÓN