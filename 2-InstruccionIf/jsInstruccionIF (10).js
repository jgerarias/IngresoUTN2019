function Mostrar()
{
/* Al presionar el Botón, asignar una nota RANDOM 
al examen y mostar: "EXCELENTE" para notas igual a 9 o 10,
"APROBÓ" para notas mayores a 4, "Vamos, la proxima
se puede" para notas menores a 4nero el número RANDOM
entre 1 y 10 
*/	
	var nota = Math.floor(Math.random() * 10 + 1);
	
	if (nota >= 9){
	alert(nota +" EXELENTE");
	}
	else if (nota <= 4){
		alert (nota +" VAMOS la proxima se puede");	
	}

	else{
		alert(nota +" APROBÓ");
	}
}

//FIN DE LA FUNCIÓN