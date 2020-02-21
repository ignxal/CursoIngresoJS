function mostrar()
{

	var contador=0;
	var acumulador=0;
	var numero;
	var seguir;
	var promedio;

	do {
		numero = parseInt(prompt("Ingrese un numero"));
		while (isNaN(numero)) {
			numero = parseInt(prompt("Eso no es un numero. Ingrese nuevamente ")); 
		}
		contador = contador + 1;
		acumulador = acumulador + numero;
		seguir = prompt("Desea Ingresar otro número?").toLowerCase();	
	} while (seguir=='Si');

	promedio = (acumulador/contador);
document.getElementById('suma').value= acumulador;
document.getElementById('promedio').value= promedio;

}//FIN DE LA FUNCIÓN