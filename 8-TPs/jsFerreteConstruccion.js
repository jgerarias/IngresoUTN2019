/*2.	Para el departamento de Construcción:
A.	 Mostrar la cantidad de alambre a comprar  si se ingresara
el largo y el ancho de un terreno rectangular y se debe alambra
con tres hilos de alambre.
B.	Mostrar la cantidad de alambre a comprar  si se ingresara
el radio  de un terreno circular y se debe alambra con tres hilos
de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas
de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan
de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{
var largo;
var ancho;
var perimetro;
var alambra;
var cantidad = 3;

largo = parseInt(document.getElementById("Largo").value);
ancho = parseInt(document.getElementById("Ancho").value);

perimetro = largo+ancho*2;
alambra = perimetro*cantidad

alert("La cantidad de alambre para dar "+ cantidad + " vueltas \n son "+ alambra +" metros")
}
function Circulo () 
{

var radio;
var diametro;
var circunferencia;
var alambre;
var cantidad = 3;

radio = parseInt(document.getElementById("Radio").value);
diametro = radio*2;
circunferencia = Math.PI*diametro;
alambre = circunferencia*cantidad;

alert("La cantidad de alambre para dar "+ cantidad + " vueltas \n son "+ alambre.toFixed(2) +" metros")

}
function Materiales () 
{
  
var largo;
var ancho;
var area;
var cemento =2;
var cal = 3;
    
largo = parseInt(document.getElementById("Largo").value);
ancho = parseInt(document.getElementById("Ancho").value);
        
area = largo*ancho;

cemento = cemento*area;
cal = cal*area;

alert("La cantidad de materiales son: \n" + cemento + " bolsas de cemento \n" +  cal +  " bolsas de cal");

}