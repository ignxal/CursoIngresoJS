function mostrar()
{
var flag = 0;
var alumnos = 0;
var nota;
var sexo;
var Canvarones = 0;
var acumulador = 0;
var pronotas;
var minimo;
var minsexo;

do {
    nota = parseInt(prompt("Ingrese nota"));
    while (nota < 0 || nota > 10 || isNaN(nota)) {
       nota = parseInt(prompt("Error, nota no valida"));
    }
    sexo = prompt("Ingrese sexo");
    while (sexo != 'm' && sexo != 'f') {
        sexo = prompt("Error, sexo no valido");
    }
if (flag == 0 || nota < minimo) {
    minimo = nota;
    minsexo = sexo;
    flag = 1;
}

if (sexo == 'm' && nota>= 6) {
    Canvarones = Canvarones + 1;
}    
alumnos = alumnos + 1;
acumulador = acumulador + nota;
    
} while (alumnos < 5);

pronotas = acumulador / alumnos;

alert("Promedio de notas: " + pronotas + "\n La nota más baja es " + minimo + " y su sexo es " + minsexo + "\n Cantidad de varones con nota mayor o igual a seis: " + Canvarones);

}
