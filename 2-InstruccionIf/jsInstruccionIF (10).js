function Mostrar()
{
	//Genero el número RANDOM entre 1 y 10 
var nota = Math.floor(Math.random()* ((11)-1)+1);

if (nota >8) {
	alert (nota + " Excelente")
}	

	else if ( nota > 4){
		alert ( nota +" Aprobó")
	}
	else {
		alert ( nota +" Vamos la proxima se puede")
	}

}//FIN DE LA FUNCIÓN