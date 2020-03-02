function mostrar()
{
var seguir = 's';
var letra;
var numero;
var canPar = 0;
var canImpar = 0;
var canCero = 0;
var acuPositivo = 0;
var canPositivo = 0;
var promPositivo = 0;
var acuNegativo = 0;
var numeroMax;
var letraMax;
var numeroMin;
var letraMin;
var flag = 0;

do {
    letra = prompt("Ingrese una letra");
    numero = parseInt(prompt("Ingrese un numero entre -100 y 100"));
    while (numero>100 || numero<-100 || isNaN(numero)) {
        numero = parseInt(prompt("Numero invalido. Reingrese numero (-100-100)"));
    }
    if (numero%2== 0) {
        canPar++; 
    }
    else {
        canImpar++;
    }

    if (numero>0){
        acuPositivo = acuPositivo + numero;
        canPositivo++;
    }
    else if (numero==0) {
        canCero++;
    }
    else {
        acuNegativo = acuNegativo + numero;
    }

    if (flag == 0 || numero>numeroMax) {
        numeroMax = numero;
        letraMax = letra;
    }
    if (flag == 0 || numero<numeroMin) {
        numeroMin = numero;
        letraMin = letra;
        flag = 1;
    }
    

seguir = prompt("Desea ingresar otro dato?").toLowerCase();    
} while (seguir =='s');

if (canPositivo!= 0) {
promPositivo = acuPositivo / canPositivo;
}

document.write("Cantidad numeros par: " + canPar +
"</br> Cantidad numeros impar: " + canImpar + 
"</br> Cantidad ceros: " + canCero +
"</br> Promedio positivo: " + promPositivo +
"</br> Suma negativos: " + acuNegativo +
"</br> Numero y letra max: " + numeroMax + letraMax +
"</br> Numero y letra min: " + numeroMin + letraMin);
}
