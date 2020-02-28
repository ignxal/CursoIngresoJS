function mostrar()
{
var marca;
var peso;
var temperatura;
var respuesta = 'si';
var temperaturaPar = 0;
var productos = 0;
var productosBajoCero = 0;
var promPeso;
var marcapesoMax;
var pesoMax;
var pesoMin;
var pesoTotal = 0;
var flag = 0;

do {
    marca = prompt("Ingrese marca del producto");
    peso = parseInt(prompt("Ingrese peso del producto")); 
            while (peso>100 || peso<1) {
                peso = parseInt(prompt("Error, peso no valido"));
            }
    temperatura = parseInt(prompt("Ingrese temperatura de almacenamiento"));
            while (temperatura>30 || temperatura<-30) {
                temperatura = parseInt(prompt("Error, temperatura no valida"));
            }
            if (temperatura%2==0) {
                temperaturaPar = temperaturaPar + 1;
            }
            if (temperatura<0) {
                productosBajoCero = productosBajoCero + 1;
            }
            if (flag == 0 || peso>pesoMax) {
                marcapesoMax = marca;
                pesoMax = peso;
                }
            if (flag == 0 || peso<pesoMin) {
                pesoMin = peso;
                flag = 1;
                }

        
    productos = productos + 1;
    pesoTotal = pesoTotal + peso;
        
 
    respuesta = prompt("Desea ingresar otro producto?").toLowerCase();
} while (respuesta == 'si');

promPeso = pesoTotal / productos;

document.write("Cantidad de temperaturas pares: " + temperaturaPar +
"<br> Productos bajo cero grados: " + productosBajoCero +
"<br> Marca del producto más pesado: " + marcapesoMax + 
 "<br> Promedio de peso: " + promPeso +
 "<br> Peso maximo: " + pesoMax + 
 "<br> Peso minimo: " + pesoMin);
}
