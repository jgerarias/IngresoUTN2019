function Mostrar()
{

	var contador=0;
	var acumulador=0;
	var numero;
	var cantidad =5
	


	while(contador < cantidad){
		numero = parseInt(prompt(contador+1+ " Ingrese numero"));
		acumulador = numero+acumulador;
		contador++
	
	}


document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/cantidad.toFixed(2);

}//FIN DE LA FUNCIÓN