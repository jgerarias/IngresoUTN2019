function Mostrar()
{

	var contador=0;
	var acumulador=0;
	var numero;

while (contador <5 ){

	alert("Ingrese siguente numero");

	numero = parseInt( prompt ("ingrese numero"));
	acumulador = numero + acumulador;
	contador++;
}

document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/contador;

}//FIN DE LA FUNCIÓN