function Mostrar()
{

var numero;
var contarPar=0;

    numero = parseInt( prompt ( " Ingrese numero"));
	
    while (isNaN(numero)){
	    numero = parseInt( prompt ( " Ingrese numero"));
		}
for (i=1; i<=numero;i++){

    if ( i%2 ==0 ){
        contarPar++;
        console.log(i);
    
    }
}
alert("Numeros pares encontrados "+ contarPar)

}//FIN DE LA FUNCIÓN