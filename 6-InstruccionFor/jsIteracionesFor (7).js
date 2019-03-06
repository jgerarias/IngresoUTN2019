function Mostrar()
{
    var numero;
    var contarDiv=0;
    
    numero = parseInt(prompt("Ingrese un numero"));
    while(isNaN(numero)){
        numero = parseInt(prompt("Eso no es un numero. Ingrese un numero"));
    }
    
    for(var i=1; i <=numero;i++){
    
        if (numero % i == 0){
            contarDiv++;
            console.log(i);	
        }
    }
    alert("La cantidad de numeros divisibles encontrados son "+contarDiv);


}//FIN DE LA FUNCIÓN