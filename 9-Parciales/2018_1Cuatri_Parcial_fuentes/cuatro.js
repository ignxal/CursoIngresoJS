function mostrar()
{
var num1;
var num2;
var resultado2;
var resultado1;

num1 = prompt("Ingrese numero 1");
num2 = prompt("Ingrese numero 2");
resultado2 = parseInt(num1 + num2);
resultado1 = parseInt(num1 - num2);

if (num1 > num2) {
    alert("La resta es " + resultado1);
}
else if (num1 < num2) {
    alert("La suma es " + resultado2);
    if (resultado2>10) 
    alert("La suma es " + resultado2 + " y supero el 10");
}
else {
    alert("El numero " + num1 + " y el " + num2 + " son iguales");
}
}
