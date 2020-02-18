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
    var Pdescuento;
    var descuento;
    var PconD;
    var IIBB;
    var Pfinal;
    
    marca = document.getElementById("Marca").value;
    cantidad = parseInt(document.getElementById("Cantidad").value);

    switch (cantidad) {
        case 1:
        case 2: Pdescuento = 0
            break;
        case 3:
        if (marca== "ArgentinaLuz") {
            Pdescuento = 15 / 100;
        }
        else if (marca== "FelipeLamparas") {
            Pdescuento = 10 / 100;
        }
        else {
            Pdescuento = 5 / 100;
        }
        case 4:
        if (marca== "ArgentinaLuz" || marca== "FelipeLamparas") {
            Pdescuento = 25 / 100;
        }
        else {
            Pdescuento = 20 / 100;
        }
        break;
        case 5:
        if (marca == "ArgentinaLuz") {
            Pdescuento = 40 / 100;
        }
        else { 
            Pdescuento = 30 / 100;
        }
        break;
        default: 
        Pdescuento = 50 / 100
        break;
    }

    descuento = precio * Pdescuento;

    PconD = (precio - descuento);
    document.getElementById("precioDescuento").value = PconD;

    Pfinal = PconD * cantidad;

    if (Pfinal>120) {
    IIBB = Pfinal * 10 / 100;
    Pfinal = Pfinal + IIBB;
    alert("Usted pago $" + IIBB + " de IIBB. Total = $ " + Pfinal);
    }
    else {
    alert("Usted no paga IIBB. Total = $ " + Pfinal);
    }
}
