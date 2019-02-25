function Mostrar()
{

	var contador=1;
	var acumulador;

	acumulador = prompt ("ingrese numero");
while (contador < 5){

	alert("Ingrese siguente numero");

	acumulador = prompt ("ingrese numero");
	contador = contador +1;

}


document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/5;

}//FIN DE LA FUNCIÓN