function mostrar()
{
var numero;
var respuesta = 'si';
var AcuPositivo = 0;
var AcuNegativo = 0;
var ConPositivo = 0;
var ConNegativo = 0;    
var ConCeros = 0;
var ConPares = 0;
var ProPositivo;
var ProNegativo;
var Diferencia;

do {
    numero = parseInt(prompt("Ingrese un numero"));
    while (isNaN(numero)) {
    numero = parseInt(prompt("Error. Eso no es un numero"));
    }
if (numero >= 0) {
    ConPositivo = ConPositivo + 1;
    AcuPositivo = AcuPositivo + numero;
    if (numero == 0) {
        ConCeros = ConCeros + 1;
    }
}
else {
    ConNegativo = ConNegativo + 1;
    AcuNegativo = AcuNegativo + numero;
}

if (numero%2==0) {
    ConPares = ConPares + 1
}
respuesta = prompt("Desea ingresar otro numero?").toLowerCase();    
} while (respuesta == 'si');

ProPositivo = AcuPositivo / ConPositivo;
ProNegativo = AcuNegativo / ConNegativo;
Diferencia = AcuPositivo + AcuNegativo;

document.write("La suma de positivos es: " + AcuPositivo + 
"<br> La suma de negativos es: " + AcuNegativo + 
"<br> La cantidad de positivos es: " + ConPositivo +
"<br> La cantidad de negativos es: " + ConNegativo +
"<br> La cantidad de ceros es " + ConCeros + 
"<br> La cantidad de numeros pares es: " + ConPares + 
"<br> El promedio de positivos es: " + ProPositivo +
"<br> El promedio de negativos es: " + ProNegativo + 
"<br> La diferencia de positivos y negativos es " + Diferencia);

}