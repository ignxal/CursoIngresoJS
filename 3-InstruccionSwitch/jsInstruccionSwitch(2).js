function mostrar()
{
//tomo la edad  
var mes = document.getElementById('mes').value;

switch (mes) {
    case "Julio":
    case "Agosto":
        alert("Abrigate que hace frio");
    break;
    case "Septiembre":
    case "Octubre":
    case "Noviembre":
    case "Diciembre":
        alert ("Ya paso el frío, ahora hace calor");
    break;
    default:
        alert("Falta para el invierno");

}




}//FIN DE LA FUNCIÓN