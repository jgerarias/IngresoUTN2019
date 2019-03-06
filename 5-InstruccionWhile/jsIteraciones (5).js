function Mostrar()
{

var sexo = prompt("ingrese f ó m .").toLocaleLowerCase();

    while(sexo != "f" && sexo != "m"){
        alert("Ingrese m para masculino y f para femenino");
        sexo = prompt("ingrese f ó m .").toLocaleLowerCase();
    }
    alert("correcto");
document.getElementById('Sexo').value=sexo;

}//FIN DE LA FUNCIÓN