function mostrar() {
    //tomo la edad  
    var edad;

    edad = parseInt(document.getElementById("edad").value);

    if (edad >= 18) {
        alert("La persona es mayor de edad");
    }

    else {
        alert("La persona es menor de edad");
    }


}//FIN DE LA FUNCIÓN