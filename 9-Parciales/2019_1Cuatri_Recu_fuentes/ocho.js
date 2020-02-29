function mostrar()
{

var color;
var valor;
var canRojo = 0;
var canRojo5000 = 0;
var inferior = 0;
var promVehiculo;
var acuVehiculo = 0;
var canVehiculo = 0;
var maxVehiculo;
var maxColor;
var seguir = 's';
var flag = 0;

do {
    color = prompt("Ingrese color de vehiculo (Rojo-verde-amarillo)")
    while (color != "rojo" && color != "verde" && color != "amarillo") {
        color = prompt("Color no valido. Reingrese dato:")
    }
    valor = parseInt(prompt("Ingrese valor del vehiculo (0-10000)"))
    while (valor<0 || valor>10000 || isNaN(valor)) {
        valor = parseInt(prompt("Valor no valido. Reingrese dato:"))
    }

    if (color == "rojo") {
        canRojo++;
        if (valor>5000) {
            canRojo5000++;
        }
    }
    
    if (valor<5000) {
        inferior++; 
    }

    acuVehiculo = acuVehiculo + valor;
    canVehiculo++;

    if (flag == 0 || valor>maxVehiculo) {
        maxVehiculo = valor
        maxColor = color;
        flag = 1;
    }

    seguir = prompt("Desea ingresar otro vehiculo?");
} while (seguir == 's');

promVehiculo = acuVehiculo / canVehiculo;

document.write("Cantidad rojos: " + canRojo + 
"</br>Cantidad rojos con precio mayor a 5000: " + canRojo5000 + 
"</br>Cantidad de vehiculos precio<5000: " + inferior +
"</br>Promedio vehiculos: " + promVehiculo +
"</br>Valor vehiculo mas caro: " + maxVehiculo + " color: " + maxColor);

}
