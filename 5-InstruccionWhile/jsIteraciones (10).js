function mostrar()
{
var numero;
var respuesta = 'si';
var acuPositivo = 0;
var acuNegativo = 0;
var conPositivos = 0;
var conNegativos = 0;    
var conCeros = 0;
var conPares = 0;
var proPositivo;
var proNegativo;
var diferencia;

do {
    numero = parseInt(prompt("Ingrese un numero"));
    while (isNaN(numero)) {
    numero = parseInt(prompt("Error. Eso no es un numero"));
    }
if (numero >= 0) {
    conPositivos = conPositivos + 1;
    acuPositivo = acuPositivo + numero;
    if (numero == 0) {
        conCeros = conCeros + 1;
    }
}
else {
    conNegativos = conNegativos + 1;
    acuNegativo = acuNegativo + numero;
}

if (numero%2==0) {
    conPares = conPares + 1
}
respuesta = prompt("Desea ingresar otro numero?").toLowerCase();    
} while (respuesta == 'si');

proPositivo = acuPositivo / conPositivos;
proNegativo = acuNegativo / conNegativos;
diferencia = acuPositivo - acuNegativo;

document.write("La suma de positivos es: " + acuPositivo + 
"<br> La suma de negativos es: " + acuNegativo + 
"<br> La cantidad de positivos es: " + conPositivos +
"<br> La cantidad de negativos es: " + conNegativos +
"<br> La cantidad de ceros es " + conCeros + 
"<br> La cantidad de numeros pares es: " + conPares + 
"<br> El promedio de positivos es: " + proPositivo +
"<br> El promedio de negativos es: " + proNegativo + 
"<br> La diferencia de positivos y negativos es " + diferencia);

}