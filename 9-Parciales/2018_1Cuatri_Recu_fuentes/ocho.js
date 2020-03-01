function mostrar()
{
var letra;
var numero;
var seguir = 's';
var canPares = 0;
var canImpares = 0;
var canCeros = 0;
var canPositivos = 0;
var acuPositivos = 0;
var promPositivos;
var acuNegativos = 0;
var maxLetra;
var maxNumero;
var minLetra;
var minNumero;
var flag = 0;

do {
    letra = prompt("Ingrese una letra");
    numero = parseInt(prompt("Ingrese un numero"));
    while (numero>100 || numero<-100 || isNaN(numero)) {
        numero = parseInt(prompt("Numero invalido. Reingrese numero (-100-100"));
    }

    if (numero%2==0) {
        canPares++;
    }
    else {
        canImpares++;
    }

    if (numero>0){
        canPositivos++;
        acuPositivos = acuPositivos + numero;
    }
    else if (numero == 0){
        canCeros++;
    }
    else {
        acuNegativos = acuNegativos + numero;
    }

    if (flag == 0 || numero<minNumero) {
        minNumero = numero;
        minLetra = letra;
    }
    if (flag == 0 || numero>maxNumero ) {
        maxNumero = numero;
        maxLetra = letra;
        flag = 1;
    }

    seguir = prompt("Desea ingresar otro dato?");
} while (seguir =='s');

promPositivos = acuPositivos / canPositivos;

document.write("Cantidad Pares: " + canPares +
"</br>Cantidad Impares: " + canImpares +
"</br>Cantidad Ceros: " + canCeros +
"</br>Promedio Positivos: " + promPositivos +
"</br>Suma negativos: " + acuNegativos +
"</br>Numero maximo: " + maxNumero + " y su letra es: " + maxLetra + 
"</br>Numero minimo: " + minNumero + " y su letra es: " + minLetra);

}
