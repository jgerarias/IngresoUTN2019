function Mostrar()
{
//tomo la edad  
var edad;

edad = parseInt(document.getElementById("edad").value);

/*if (!(edad >= 13 && edad <= 17)){
      alert ("No es adolecente")
} cualquiera de los dos metodos son correctos
ya en la primera esta negando el rango de edad
y en la segunda selecciona el otro rango de edad
*/
if (edad < 13 || edad > 17){
    alert("No es adolecente");
}

}//FIN DE LA FUNCIÓN