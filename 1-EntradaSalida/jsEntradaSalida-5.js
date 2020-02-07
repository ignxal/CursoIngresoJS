/*Debemos lograr tomar nombre y edad por ID y mostrarlos concatenados 
ej.: "Usted se llama José y tiene 66 años" 	*/
function mostrar()
{	
    // paso 1
    var nombre;
    var edad;

    // paso 2 - Cargo varibles con datos ingresados
    nombre = document.getElementById("elNombre").value;
    edad = document.getElementById("laEdad").value;

    // paso 3 - Muestro información 
    alert("Usted se llama " + nombre + " y tiene " + edad + " años.");
}

