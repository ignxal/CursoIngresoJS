function mostrar()
{

var sexo;
sexo = prompt("ingrese f ó m .").toLowerCase();

// while (sexo != 'm' && sexo != 'f')
while (!(sexo == 'f' || sexo == 'm')) {
sexo = prompt("Error. Dato no válido").toLowerCase();
}

document.getElementById('Sexo').value=sexo;

}//FIN DE LA FUNCIÓN