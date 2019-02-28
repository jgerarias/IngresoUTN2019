function Mostrar()
{
var numero;
var contarPar=0;

    numero = parseInt( prompt ( " Ingrese numero"));
	
    while (isNaN(numero)){
	    numero = parseInt( prompt ( " Ingrese numero"));
		}
for (i=1; i<=numero;i++){

    if ( numero % i == 0 ){
        contarPar++;
        console.log(i);
    
    }
}
alert("Numeros divisibles    encontrados "+ contarPar)



}//FIN DE LA FUNCIÓN