function Mostrar()
{
//tomo la edad  
// declarar las variables
var edad;

//siempre parciarlo para trabajar con cualquier operacion matematica
//indicarle que valor tomar a la variable, es este caso 
//el que ingrese el usuario en la caja de texto ID: "edad"
edad = parseInt(document.getElementById("edad").value);

//indicarle la condicion "si la variable es igual a 15"
if (edad == 15)
{
   alert ("Niña bonita")    
}

}//FIN DE LA FUNCIÓN