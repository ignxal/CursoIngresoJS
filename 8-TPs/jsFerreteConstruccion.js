/*2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{
var largo;
var ancho;
var treshilo; 

largo = parseInt(document.getElementById("Largo").value);
ancho = parseInt(document.getElementById("Ancho").value);
treshilo = (2 * (largo + ancho) * 3);

alert("Se debe comprar " + treshilo + "de alambre");

}
function Circulo () 
{
var radio; 
var treshilo;

radio = parseInt(document.getElementById("Radio").value);
treshilo = ((radio / 6.28)*3);

alert("Se debe comprar " + treshilo + "de alambre");
}
function Materiales () 
{
/*var cemento;
var cal;
var total;

cemento = 1:2
cal = 1:3  */
var largo;
var ancho;
var terreno; 
var cemento;
var cal;

largo = parseInt(document.getElementById("Largo").value);
ancho = parseInt(document.getElementById("Ancho").value);

terreno = (largo * ancho);
cemento = (2 * terreno);
cal = (3 * terreno);

alert("Se debe comprar " + cemento + " bolsas de cemento y " + cal + " bolsas de cal");
}