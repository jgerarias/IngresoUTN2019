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
    if (contarDiv <=2){
        alert( numero +" Es un numero Primo");
    }
    else{
        alert(numero+" No es un numero primo");
    }


}//FIN DE LA FUNCIÓN