function mostrar()
{
var pais;
var habitantes;
var temperatura;
var seguir = 's';
var flag = 0;
var canTemperaturaPar = 0;
var habitantesMin;
var paisHabMin;
var pais40 = 0;
var canPais = 0;
var acuHabitantes = 0;
var promHabitantes;
var temperaturaMin;
var paisTempMin;

do {
    pais = prompt("Ingrese nombre del pais");

    canPais++;

    habitantes = parseInt(prompt("Ingrese cantidad(millones) de habitantes"));
    while (habitantes<1 || habitantes>7000 || isNaN(habitantes)) {
        habitantes = parseInt(prompt("Cantidad invalida. Reingrese dato(1-7000):"));
    }
    if (flag == 0 || habitantesMin>habitantes) {
        habitantesMin = habitantes;
        paisHabMin = pais;
    }

    acuHabitantes = acuHabitantes + habitantes;

    temperatura = parseInt(prompt("Ingrese temperatura minima registrada (-50-50)"));
    while (temperatura<-50 || temperatura>50 || isNaN(temperatura)) {
        temperatura = parseInt(prompt("Dato Invalido. Reingrese temperatura(-50-50)"));
    }
    if (temperatura%2==0) {
        canTemperaturaPar++;
    }
    
    if (temperatura>40) {
        pais40++;
    }
    if (flag == 0 || temperaturaMin > temperatura) {
        temperaturaMin = temperatura;
        paisTempMin = pais;
        flag = 1;
    }
    
    seguir = prompt("Desea continuar ingresando datos?");    
} while (seguir == 's');

promHabitantes = acuHabitantes / canPais;

document.write("Cantidad de temperaturas pares: " + canTemperaturaPar +
"</br>Nombre de pais con menos habitantes " + paisHabMin +
"</br>Cantidad de paises con temperatura mayor a 40: " + pais40 +
"</br>Promedio habitantes entre paises: " + promHabitantes + " millones" +
"</br>Temperatura minima de paises ingresados: " + temperaturaMin + paisTempMin);
}
