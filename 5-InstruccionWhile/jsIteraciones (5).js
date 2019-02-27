function Mostrar()
{

var sexo = prompt("ingrese f ó m .").toLocaleLowerCase();
/*toLocaleLowerCase toma el caranter en mayuscula y lo 
convierte a minuscula
toUpperCase() para convertir a “mayúsculas”.
*/
while (!(sexo == "f" || sexo == "m")){

    alert ("incorrecto");
    sexo = prompt("ingrese f ó m .");

}

document.getElementById('Sexo').value=sexo;

}//FIN DE LA FUNCIÓN