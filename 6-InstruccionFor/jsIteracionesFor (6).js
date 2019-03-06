function Mostrar()
{
var numero;
var contarPar=0;

numero = parseInt(prompt("Ingrese un numero"));
while(isNaN(numero)){
    numero = parseInt(prompt("Eso no es un numero. Ingrese un numero"));
}

for(var i=1; i <=numero;i++){

    if (i % 2 == 0){
        contarPar++;
        console.log(i);	
    }
}
alert("La cantidad de numeros pares encontrados es "+contarPar);
}//FIN DE LA FUNCIÓN