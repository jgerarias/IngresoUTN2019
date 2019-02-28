/*Debemos lograr tomar un nombre con 'prompt' 
y luego mostrarlo por 'alert' al presionar el botón  'MOSTRAR'*/
function Mostrar()
{
	//var nombre;    

   //nombre =  prompt("Ingrese su nombre");

    //alert(nombre);

/*8-realizar el algoritmo que permita ingresar números positivos 
(validar que sea positivo) hasta que el
usuario quiera e informar al terminar el ingreso por document.write:
a) la cantidad de números pares.
b) el promedio de todos los números ingresados.
c) la suma de todos los números.
d) El número máximo y el mínimo.*/

var numero;
var pares =0;
var promedio;
var suma;
var maximo;
var minimo;

do{
	numero = parseInt (prompt("Ingrese numeros positivos: "));
    }while (numero < 0 || isNaN (numero)){
		numero = parseInt (prompt("Error. Reingrese un numero positivo: "));
	
		}



}   

