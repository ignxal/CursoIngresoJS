function mostrar()
{
var nombre;
var edad;
var sexo;
var nota;
var seguir = 's';
var canVaronesAprobados = 0;
var promNotaMenores;
var acuNotaMenores = 0;
var conNotaMenores = 0;
var promNotaAdolescentes = 0;
var acuNotaAdolescentes = 0;
var conNotaAdolescentes = 0;
var promNotaMayores = 0;
var acuNotaMayores = 0;
var conNotaMayores = 0;
var promNotaMasculino = 0;
var acuNotaMasculino = 0;
var conNotaMasculino = 0;
var promNotaFemenino = 0;
var acuNotaFemenino = 0;
var conNotaFemenino = 0;

do {
    nombre = prompt("Ingrese nombre de estudiante");
    sexo = prompt("Ingrese sexo (f-m)");
    while (sexo != 'f' && sexo != 'm') {
        sexo = prompt("Sexo no valido. Reingrese dato");
    }
    edad = parseInt(prompt("Ingrese edad"));
    while (edad<1 || edad> 99 || isNaN(edad)) {
        edad = parseInt(prompt("Dato no valido. Reingrese edad"));
    }
    nota = parseInt(prompt("Ingrese nota del final"));
    while (nota<0 || nota>10 || isNaN(nota)) {
        nota = parseInt(prompt("Nota no valida. Reingrese nota"));
    }
    
    if (edad<13) {
        acuNotaMenores= acuNotaMenores + nota;
        conNotaMenores++;
    }
    else if (edad>=13 && edad<18) {
        acuNotaAdolescentes= acuNotaAdolescentes + nota;
        conNotaAdolescentes++;
    } 
    else {
        acuNotaMayores= acuNotaMayores + nota;
        conNotaMayores++;
    }
    if (sexo == 'm') {
        acuNotaMasculino = acuNotaMasculino + nota;
        conNotaMasculino++;
        if (nota>=4) {
            canVaronesAprobados++;
        }
    } else {
        acuNotaFemenino = acuNotaFemenino + nota;
        conNotaFemenino++;
    }

    /*Informar el sexo de la persona con la mayor nota adolescentes
    else if (edad>=13 && edad<18) {
        acuNotaAdolescentes= acuNotaAdolescentes + nota;
        conNotaAdolescentes++;
        if (flag == 0 || nota>notaMax)
        notaMax = nota;
        nombreMax = nombre;
        sexoMax = sexo;
        flag = 1;

        if (contadorAdolescente == 0) ´{
            document.write("No se ingresaron adolescentes");
        }
            else {
                document.write("")
        }
*/
    seguir = prompt("Desea ingresar otro dato?");
} while (seguir == 's');

if (conNotaMenores != 0) {
promNotaMenores = acuNotaMenores / conNotaMenores;
}
if (conNotaAdolescentes != 0) {
promNotaAdolescentes = acuNotaAdolescentes / conNotaAdolescentes;
}
if (conNotaMayores != 0) {
promNotaMayores = acuNotaMayores / conNotaMayores;
}
if (conNotaMasculino !=0) {
promNotaMasculino = acuNotaMasculino / conNotaMasculino;
}
if (conNotaFemenino != 0) {
promNotaFemenino = acuNotaFemenino / conNotaFemenino;
}
document.write("Cantidad de varones aprobados: " + canVaronesAprobados +
"</br>Promedio nota menores: " + promNotaMenores + 
"</br>Promedio nota adolescentes: " + promNotaAdolescentes +
"</br>Promedio nota mayores: " + promNotaMayores +
"</br>Promedio nota masculino: " + promNotaMasculino +
"</br>Promedio nota femenino: " + promNotaFemenino);

}
