/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 */
function CalcularPrecio () 
{
 	var cantidad;
    var lampara;
    var precio =35;
    var descuento;
    var preciocondescuento;
    var importefinal;
    var mensaje = " el importe final es $ "
    var iibb
    var flag = false

    cantidad = parseInt (document.getElementById("Cantidad").value);
    lampara = document.getElementById("Marca").value;

    if ( cantidad > 6 )
    {
     descuento = precio * 0.5;
    }

    else if (cantidad == 5 )
        {
        if ( lampara == "ArgentinaLuz")
        
                descuento = precio * 0.4;
        }
        
        else lampara != "ArgentinaLuz"
        {
           descuento = precio *0.3; 
        }
    

     else if (cantidad == 4)
        {
        if ( lampara == "ArgentinaLuz" || lampara == "FelipeLamparas"
        
        descuento = precio * 0.25;
        }
        else ( lampara != ( lampara = "ArgentinaLuz" || lampara = "FelipeLamparas") )
        {
           descuento = precio *0.3; 
        }

     else if (cantidad == 3)
    {
        
    }

    else (resultado > 120)
}

// en este punto ya se cual es el descuento

preciocondescuento = cantidad * preciocondescuento
importefinal = cantidad * preciocondescuento

if ( importefinal > 120)
{
    iibb = importefinal * 10/100;

    importefinal= importefinal + iibb;
    flag = true;
}
document.getElementById("precioDescuento").value = preciocondescuento

mensaje = "importefinal $" + importefinal
 if (flag)
 {

 }

