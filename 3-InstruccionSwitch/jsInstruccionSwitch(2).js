function Mostrar()
{
//tomo el mes 
var mesDelAño = document.getElementById('mes').value;

switch(mesDelAño){
    case "Julio":
    case "Agosto":
        alert(mesDelAño + ": Abrigate que hace frio")
        break;

    case "Septiembre":
    case "Octubre":
    case "Noviembre":
    case "Diciembre":
        alert(mesDelAño +": Ya pasamos el frio, ahora calor!!!")
        break;

    default:
    alert( mesDelAño + ": Falta para el invierno.");

}






}//FIN DE LA FUNCIÓN