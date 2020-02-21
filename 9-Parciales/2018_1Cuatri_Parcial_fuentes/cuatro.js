function mostrar()
{
var num1;
var num2;
var resultado2;
var resultado1;

num1 = parseInt(prompt("Ingrese numero 1"));
num2 = parseInt(prompt("Ingrese numero 2"));
resultado2 = (num1 + num2);
resultado1 = (num1 - num2);

if (num1 > num2) {
    alert("La resta es " + resultado1);
}
else if (num1 < num2) {
    if (resultado2>10) {
    alert("La suma es " + resultado2 + " y supero el 10");
    }
    else {
    alert("La suma es " + resultado2); 
    }
}
else {
    alert("El numero " + num1 + " y el " + num2 + " son iguales");
}
}
