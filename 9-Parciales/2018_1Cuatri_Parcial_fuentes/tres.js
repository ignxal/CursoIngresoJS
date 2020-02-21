function mostrar()
{
    var Precio;
    var PorDescuento;
    var Descuento;
    var PrecioFinal;

    Precio = prompt("Ingrese precio");
    PorDescuento = prompt("Ingrese porcentaje de descuento");

    Descuento = Precio * PorDescuento / 100;
    PrecioFinal = Precio - Descuento;

    document.getElementById("elPrecioFinal").value = PrecioFinal;
}
