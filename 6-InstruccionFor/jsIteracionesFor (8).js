function mostrar()
{
var numero;
var conPrimo=0;

numero = parseInt(prompt("Ingrese un numero"));
while (isNaN(numero) || numero<1) {
    numero = parseInt(prompt("Dato invalido. Ingrese un numero"));
}
for (var i = 0; i <= numero; i++) {
    if (numero%i==0) {
        console.log(i);
        conPrimo++;
    }
}

if (conPrimo == 2) {
    alert("El numero es primo");
}
else {
    alert("El numero no es primo");
}

}//FIN DE LA FUNCIÓN