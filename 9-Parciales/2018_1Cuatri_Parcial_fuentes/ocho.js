function mostrar()
{
var letra;
var numero;
var respuesta = 'si';
var canPares = 0;
var canInpares = 0;
var canCeros = 0;
var canPositivos = 0;
var promPositivos;
var sumaPositivos = 0;
var sumaNegativos = 0;
var maximo;
var letraMax;
var minimo;
var letraMin;
var flag = 0;

do {
    letra = prompt("Ingrese una letra");

    numero = parseInt(prompt("Ingrese un número"));
         while (numero < -100 || numero > 100 || isNaN(numero)) {
         numero = parseInt(prompt("Error. Numero no válido"));
    }
    if (numero%2==0) {
         canPares = canPares + 1;
    }
    else {
         canInpares = canInpares +1;
    }
    if (numero == 0) {
         canCeros = canCeros + 1;
    }
    if (flag == 0 || numero>maximo) {
         maximo = numero;
         letraMax = letra;
    }
    if (flag == 0 || numero<minimo) {
         minimo = numero;
         letraMin = letra;
         flag = 1;
    }
    if (numero>= 0) {
        canPositivos = canPositivos + 1;
        sumaPositivos = sumaPositivos + numero;
        }
    else {
        sumaNegativos = sumaNegativos + numero;
    }

    respuesta = prompt("Desea continuar ingresando datos?").toLowerCase();
} while (respuesta == 'si');

promPositivos = sumaPositivos / canPositivos;

document.write("Cantidad de pares " + canPares + 
"<br>Cantidad de inpares " + canInpares +
"<br>Cantidad de ceros " + canCeros + 
"<br>Promedio de positivos: " + promPositivos +
"<br>Suma de negativos: " + sumaNegativos +
"<br>Numero y letra del maximo: " + maximo + letraMax +
"<br>Numero y letra del minimo: " + minimo + letraMin
);
}