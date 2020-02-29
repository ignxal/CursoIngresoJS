function mostrar()

{

var kilos;
var sabor;
var promKilos;
var acuKilos = 0;
var livianoPeso;
var livianoSabor;
var canCarne = 0;
var acuCarne = 0;
var promCarne;
var flag = 0;

for (var i = 1; i < 6; i++){
    kilos = parseInt(prompt("Ingrese peso de bolsa (0-500)"));
    while (kilos<0 || kilos>500 || isNaN(kilos)) {
        kilos = parseInt(prompt("Peso no valido. Reingrese peso (0-500)"));
    }
    sabor = prompt("Ingrese sabor");
    while (sabor!= "carne" && sabor!= "vegetales" && sabor != "pollo") {
        sabor = prompt("Sabor no valido. Reingrese sabor")
    }

    acuKilos = acuKilos + kilos;

    if (flag == 0 || livianoPeso > kilos) {
        livianoPeso = kilos;
        livianoSabor = sabor;
        flag = 1;
    }

    if (sabor == "carne") {
        canCarne++;
        acuCarne = acuCarne + kilos;
    }

}

promKilos = acuKilos / 5;
promCarne = acuCarne / canCarne;

alert("Promedio de kilos totales: " + promKilos +
"\n Peso mas liviano: " + livianoPeso + ". Sabor:" + livianoSabor +
"\n La cantidad de bolsas de carne es: " + canCarne + " y su promedio de peso: " + promCarne );

}
