function mostrar()
{
var flag = 0
var altura;
var sexo;
var alturaAcu = 0;
var alturaProm;
var alturaMin;
var sexoMin;
var mujeres190 = 0;

for (var i = 1; i < 6; i++) {
    altura = parseInt(prompt("Ingrese altura en centimetros"));
    while (altura>250 || altura<0 || isNaN(altura)) {
        altura = parseInt(prompt("Altura no valida. Reingrese altura (250-0cm)"));
    }
    alturaAcu = alturaAcu + altura;

    sexo = prompt("Ingrese sexo").toLowerCase();
        while (sexo != 'f' && sexo!= 'm') {
            sexo = prompt("Sexo no valido. Reingrese sexo (f-m)").toLowerCase();
        }
    if (flag == 0 || alturaMin>altura) {
        alturaMin = altura;
        sexoMin = sexo;
        flag = 1;
    }
    if (sexo == 'f' && altura>190) {
        mujeres190++;
    }
    
    }

    alturaProm = alturaAcu / 5

    alert("Promedio de las alturas totales: " + alturaProm + 
    "\n altura más baja y el sexo: " + alturaMin + sexoMin +
    "\n cantidad de mujeres que supera 190cm: " + mujeres190);

}

