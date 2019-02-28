function Mostrar()
{
//declarar contadores y variables 
	var contador=0;
	var numero;
	var seguir;
	var respuesta;
	var acumuladorNeg =0;
	var acumuladorPos =0;
	var contarPos;
	var contarNeg;
	var contadorCeros=0;
	var contadorPares =0;
	var prompos;
	var promneg;
	var diferencia;

do {
	numero = parseInt(prompt ("Ingrese numero"));
}	while (isNaN(numero)){
	numero = parseInt(prompt ("Eso no es un numero. Ingrese un numero: "));
}



if (numero > 0){
//positivo	
acumuladorPos = acumuladorPos+ numero;
contarPos++;

}
	else if (numero ==0){
		//cero
		contadorCeros++;
		}else {
			//negativos
			acumuladorNeg = acumuladorNeg+numero;
			contarNeg++;
		
	}
if (numero%2 == 0){
	contadorPares++;	
}   
//condicion que tiene que cumplir el numero si es par

	while(respuesta);
if (contarNeg !=0){
prompos = acumuladorPos/contarPos;
}

diferencia = contarPos-contarNeg;

document.write("1-Suma de los negativos."+ acumuladorNeg + "<br>" );
document.write("2-Suma de los positivos." + acumuladorNeg + "<br>");
document.write("3-Cantidad de positivos." + contarPos + "<br>" );
document.write ("4-Cantidad de negativos." + contarNeg + "<br>");
document.write ("5-Cantidad de ceros." + contadorCeros + "<br>");
document.write ("6-Cantidad de números pares." + contadorPares + "<br>");
document.write ("7-Promedio de positivos." + promneg + "<br>");
document.write ("8-Promedios de negativos." + promneg + "<br>");
document.write ("9-Diferencia entre positivos y negativos, (positvos-negativos)."+ diferencia +"<br>" )	

}//FIN DE LA FUNCIÓN

//1-Suma de los negativos. 2-Suma de los positivos. 3-Cantidad de positivos. 4-Cantidad de negativos. 5-Cantidad de ceros. 6-Cantidad de números pares. 7-Promedio de positivos. 8-Promedios de negativos. 9-Diferencia entre positivos y negativos, (positvos-negativos).

/* sacar un porcentaje
sacar un aumento
pedir un numero 
sacar maximo y minimo
saver setear un for ()
validar
numero en un rango
setear un seño 
setear una respuesta

*/	
}