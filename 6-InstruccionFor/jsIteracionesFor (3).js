function Mostrar()
{

var repetciones = prompt("ingrese el número de repeticiones");
while (isNaN (repetciones)){
    var repetciones = prompt("ingrese el número de repeticiones");
}
for( i = 0 ; i< repetciones; i++){
    document.write ("Hola UTN FRA"+"<br>");
}

}//FIN DE LA FUNCIÓN