function Mostrar()
{
/*tomo la hora
Al ingresar una hora, informar: 
si está entre las 7 y las 11 : "Es de mañana.".
si está entre las 12 y las 19 : "Es de tarde.". 
si está entre las 20 y las 24 o entre las 0 y las 6 :
"Es de noche.". si NO está entre las 0 y las 24 :
 "la hora no existe.".
*/

var laHora = document.getElementById('hora').value;

switch(laHora){
    case laHora: 
        if (laHora >= 7 && laHora <= 11){
            alert("Es de mañana");}
           

            else if (laHora >= 12 && laHora <= 19){
            alert("Es de tarde");}
           
            
            else if (laHora >= 20 && laHora <=24 || laHora >= 0 && laHora <= 6){
            alert("Es de noche");}
            
            if (laHora < 0 || laHora > 24){
                alert("la hora no existe");}
        
         break;
            

        
        
}

}//FIN DE LA FUNCIÓN