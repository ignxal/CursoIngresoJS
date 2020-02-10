function mostrar() {
    //tomo la edad  
    var edad;

    edad = parseInt(document.getElementById("edad").value);

    /* if ( !(edad < 13) || edad > 17)) {
    alert("Es adolescente");
}*/

    if (edad >= 13 && edad <= 17) {
        alert("La persona es adolescente");
    }
}//FIN DE LA FUNCIÓN