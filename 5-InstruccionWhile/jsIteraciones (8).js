function Mostrar()
{

	var contador=0;
	var positivo=0;
	var negativo=1;
	var numero;
	var respuesta;
	var flag=0

do{
	numero = parseInt( prompt ("Ingrese numero"));
	while (isNaN(numero)){
		numero = parseInt( prompt ("Ingrese numero"));
	}

	if(numero>=0){
	positivo = numero+positivo;	

	}
	else{
	flag =1	
	negativo = numero*negativo;
	}
respuesta = confirm ("Desea continuar");
}while(respuesta);

document.getElementById('suma').value=positivo;
if(flag==0){
	negativo=0;
}
document.getElementById('producto').value=negativo;

}//FIN DE LA FUNCIÓN