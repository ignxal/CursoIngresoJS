/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{
    var proda;
    var prodb;
    var prodc;
    var sumatotal;

    proda = parseInt(document.getElementById("PrecioUno").value);
    prodb = parseInt(document.getElementById("PrecioDos").value);
    prodc = parseInt(document.getElementById("PrecioTres").value);
    sumatotal = (proda + prodb + prodc);
    
    alert("La suma total es " + sumatotal);
}
function Promedio () 
{
    var proda;
    var prodb;
    var prodc;
    var promedio;

    proda = parseInt(document.getElementById("PrecioUno").value);
    prodb = parseInt(document.getElementById("PrecioDos").value);
    prodc = parseInt(document.getElementById("PrecioTres").value);
    promedio = ((proda + prodb + prodc)/3);
    
    alert("El promedio es " + promedio);
}
function PrecioFinal () 
{
    var proda;
    var prodb;
    var prodc;
    var prefinal;

    proda = parseInt(document.getElementById("PrecioUno").value);
    prodb = parseInt(document.getElementById("PrecioDos").value);
    prodc = parseInt(document.getElementById("PrecioTres").value);
    prefinal = ((proda + prodb + prodc)*1.21);

    alert("El precio final es " + prefinal);
}