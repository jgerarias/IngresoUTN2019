/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{
    var num1;
    var num2;
    var num3;
    var suma;

    num1 = parseInt(document.getElementById("PrecioUno").value);
    num2 = parseInt(document.getElementById("PrecioDos").value);
    num3 = parseInt(document.getElementById("PrecioTres").value);

    suma = num1+num2+num3;

    alert("La suma es "+ suma);
}
function Promedio () 
{
    var num1;
    var num2;
    var num3;
    var promedio;

    num1 = parseInt(document.getElementById("PrecioUno").value);
    num2 = parseInt(document.getElementById("PrecioDos").value);
    num3 = parseInt(document.getElementById("PrecioTres").value);

    promedio = (num1+num2+num3)/3;

    alert("El promedio es " + promedio.toFixed(2));
}
function PrecioFinal () 
{
    
    var num1;
    var num2;
    var num3;
    var suma;
    var precioFinal;
    var iva = 0.21;

    num1 = parseInt(document.getElementById("PrecioUno").value);
    num2 = parseInt(document.getElementById("PrecioDos").value);
    num3 = parseInt(document.getElementById("PrecioTres").value);
  
    suma = num1+num2+num3;
    precioFinal = (suma*iva) + suma

    alert("El precio fina con el iva de "+ iva +"% es "+ precioFinal.toFixed(2))
}