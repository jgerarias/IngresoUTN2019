/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resto entre el dividendo y el divisor.
ej.: "El resto es 0 ."*/
function SacarResto()
{
	var num1;
    var num2;

    num1 = document.getElementById("numeroDividendo").value;
    num2 = document.getElementById("numeroDivisor").value;
    resultado = num1%num2;
    
    alert ("el resto es: "+ resultado);
}
