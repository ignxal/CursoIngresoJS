function mostrar()
{
	//Genero el número RANDOM entre 1 y 10 
	var numero;
	var maximo = 10;
	var minimo = 1;

	numero = Math.floor(Math.random() * ((maximo + 1) - minimo) + minimo);

	// if (numero > 8)
	if (numero == 9 || numero == 10) {
		alert("Excelente. Nota: " + numero);
	}
	// else if (numero < 4)
	else if (numero >= 4) {
		alert("Aprobó. Nota: " + numero);
	}
	else {
		alert("Vamos, la próxima se puede. Nota: " + numero);
	}


}//FIN DE LA FUNCIÓN