function Mostrar()
{
//tomo la edad  

var edad;

edad = parseInt (document.getElementById("edad").value);

if (!(edad >=13 && edad <= 18))

{
    alert ("La persona NO es adolecente")
}

}//fin de la funcion
