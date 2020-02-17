/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un porcDescuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un porcDescuento del 40 % y si es de otra marca el porcDescuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un porcDescuento del 25 % y si es de otra marca el porcDescuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el porcDescuento es del 15%, si es  “FelipeLamparas” se hace un porcDescuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con porcDescuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 */
function CalcularPrecio () 
{
     var precio = 35;
     var cantidad;
     var marca;
     var porcDescuento;
     var descuento;
     var PconD;
     var importefinal;
     var IIBB;

     cantidad = parseInt(document.getElementById("Cantidad").value);
     marca = parseInt(document.getElementById("Marca").value);

     switch (cantidad) {
         case 1:
         case 2:
             porcDescuento = 0;
             break;
         case 3:
             if (marca == "ArgentinaLuz") {
                 porcDescuento = 15;
             }
             else if (marca == "FelipeLamparas") {
                 porcDescuento = 10;
             }
             else {
                 porcDescuento = 5;
             }
             break;
         case 4:
             if (marca == "ArgentinaLuz" || marca == "FelipeLamparas") {
                 
             }
             break;
         case 5:
         if (marca == "ArgentinaLuz") {
             porcDescuento = 40;
         }
         else {
             porcDescuento = 30;
         }
             break;
         default:
             porcDescuento = 50;
             break;
     }
    
    descuento = precio * porcDescuento / 100;

    // calculo precio final
    PconD = precio - descuento;
    document.getElementById("precioDescuento").value = PconD;

    importefinal = PconD * cantidad;

    if (importeFinal > 120){
        IIBB = importeFinal * 10 / 100;
        importeFinal = importeFinal + IIBB;
        alert("El importe final es $ " + importeFinal + " \nIngresos brutos. Usted pago $ " + IIBB);
    }
    else {
        alert("El importe final es $ " + importeFinal);
    }

}
