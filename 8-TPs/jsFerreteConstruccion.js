/*2.	Para el departamento de Construcción:
A.	 Mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	Mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{
var largo;
var ancho;
var perimetro;
var alambre;

largo = parseFloat (document.getElementById("Largo").value);
ancho = parseFloat (document.getElementById("Ancho").value);
perimetro = 2*(largo+ancho);
alambre = perimetro*3

alert ("La cantidad de alambre es " + alambre)

}
function Circulo () 
{
/*para calcular la cantidad de alambre a comprar se nececita
comprar, se necesita saber la circunferencia de un redondo, esta 
se calcula haciendo pi * diametro y el diametro es dos veces el radio
por lo cual que el calculo queda 
diametro       = radio * 2 
circunferencia = pi * diametro
*/
var radio;
var alambre;
var diametro;
var circunferencia;

radio = parseFloat (document.getElementById("Radio").value);
diametro = 2 * radio;
circunferencia = Math.PI * diametro;
alambre = circunferencia * 3

    alert("La cantidad de alambre es " + alambre.toFixed(2))
}
function Materiales ()  
{

var largo;
var ancho;    
var cal = 3;
var cemento = 2;
var area;

largo = parseFloat (document.getElementById("Largo").value);
ancho = parseFloat (document.getElementById("Ancho").value);
area = largo*ancho;
cal = area *cal;
cemento = area * cemento

    alert("Las cantidad de materiales son " + cemento + " bolsas de cemento y " + cal + " bolsas de cal")

}