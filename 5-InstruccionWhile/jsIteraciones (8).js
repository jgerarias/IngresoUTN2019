function Mostrar()
{

	var contador=0;
	var positivo=0;
	var negativo=1;
	var numero;
	var respuesta;
	var flag=0;

	do{
		numero = parseInt(prompt(contador+1+ " Ingrese un numero"));
		while(isNaN(numero)){
			numero = parseInt(prompt(contador+1+ " Ingrese un numero"));
		}

			if (numero > 0){
			positivo = numero+positivo;
		}
			

			else {
			negativo = numero * negativo;
			flag=1;
		}
		contador++;
		respuesta = confirm("Desea continual");
		

	}while(respuesta);

document.getElementById('suma').value=positivo;

if (flag == 0){
	negativo=0;
}

document.getElementById('producto').value=negativo;

}//FIN DE LA FUNCIÓN