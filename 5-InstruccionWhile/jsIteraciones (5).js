function Mostrar()
{

var sexo = prompt("ingrese f ó m .");
sexo.toLocaleLowerCase();//pasa lo que tenemos
//en la variable lo pasa a minuscula.

while (sexo != "f" && sexo != "m"){

sexo = prompt("Reingrese f o m segun corresponda ")
}
document.getElementById('Sexo').value=sexo;

}//FIN DE LA FUNCIÓN