function mostrar()
{
var flag = 0;
var alumnos = 0;
var nota;
var sexo;
var canVarones = 0;
var acumulador = 0;
var pronotas;
var minimo;
var minsexo;

/*  for (var alumno = 0; alumno < 5; alumno++ ) {
        nota = parseInt(prompt("Ingrese nota"));
    while (nota < 0 || nota > 10 || isNaN(nota)) {
       nota = parseInt(prompt("Nota no valida. Reingrese sexo (0-10)"));
    }
    sexo = prompt("Ingrese sexo");
    while (sexo != 'm' && sexo != 'f') {
        sexo = prompt("Sexo no valido. Reingrese sexo (f-m): ");
    
    }*/


do {
    nota = parseInt(prompt("Ingrese nota"));
    while (nota < 0 || nota > 10 || isNaN(nota)) {
       nota = parseInt(prompt("Nota no valida. Reingrese sexo (0-10)"));
    }
    sexo = prompt("Ingrese sexo");
    while (sexo != 'm' && sexo != 'f') {
        sexo = prompt("Sexo no valido. Reingrese sexo (f-m): ");
    }
if (flag == 0 || nota < minimo) {
    minimo = nota;
    minsexo = sexo;
    flag = 1;
}

if (sexo == 'm' && nota>= 6) {
    canVarones++;
}    
alumnos = alumnos + 1;
acumulador = acumulador + nota;
    
} while (alumnos < 5);

pronotas = acumulador / alumnos;

alert("Promedio de notas: " + pronotas + "\n La nota más baja es " + minimo + " y su sexo es " + minsexo + "\n Cantidad de varones con nota mayor o igual a seis: " + canVarones);

}
