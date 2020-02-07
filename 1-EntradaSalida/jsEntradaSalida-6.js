/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar()
{
var numerouno;
var numerodos;
var resultado;

numerouno = document.getElementById("numeroUno").value;
numerouno = parseInt(numerouno);

numerodos = document.getElementById("numeroDos").value;
numerodos = parseInt(numerodos);

resultado = (numerouno + numerodos);

alert("la suma es " + resultado);
}

