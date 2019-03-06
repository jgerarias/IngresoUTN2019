function Mostrar()
{
//tomo el mes 
var mesDelAño = document.getElementById('mes').value;

//alert (mesDelAño);
	
switch(mesDelAño){
    case "Febrero":
        alert(mesDelAño+": Este mes tiene 28 dias");
        break;

    case "Abril":
    case "Junio":
    case "Septiembre":
    case "Noviembre":
        alert(mesDelAño+": Este mes tiene 30 días");
        break;

    default:
        alert(mesDelAño+": Este mes tiene 31 días");
        break;
}		



}//FIN DE LA FUNCIÓN