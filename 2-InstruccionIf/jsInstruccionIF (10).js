function mostrar()
{
	//Genero el número RANDOM entre 1 y 10 
	var numero;
	var maximo = 10;
	var minimo = 1;

	numero = Math.floor(Math.random() * ((maximo + 1) - minimo) + minimo);

	if (numero == 9 || numero == 10) {
		alert("EXCELENTE");
	}
	else if (numero >= 4) {
		alert("APROBÓ");
	}
	else {
		alert("Vamos, la próxima se puede");
	}


}//FIN DE LA FUNCIÓN