function mostrar()
{
var notas;
var sexo;
var promNotas;
var acuNotas = 0;
var minNota;
var minSexo;
var canVaronesM6 = 0;
var flag = 0;
    
    for (var i = 1; i < 6; i++) {
        notas = parseInt(prompt("Ingrese nota"));
        while (notas>10 || notas<0 || isNaN(notas)) {
            notas = parseInt(prompt("Nota invalida. Reingrese dato (0-10)"));
        }
        sexo = prompt("Ingrese sexo");
        while (sexo!='f' && sexo!='m') {
            sexo = prompt("Sexo invalido. Reingrese dato (f-m)").toLowerCase();
        }

        acuNotas= acuNotas + notas;
        
        if (flag == 0 || notas < minNota) {
            minNota = notas;
            minSexo = sexo;
            flag = 1;
        }

        if (sexo=='m' && notas>=6) {
            canVaronesM6++;
        }

    }

    promNotas = acuNotas / 5;

    alert("Promedio notas: " + promNotas +
    "\nNota mas baja: " + minNota + ". Sexo: " + minSexo +
    "\nCantidad varones nota >=6: " + canVaronesM6);
}