function mostrar()
{
var animal;
var peso;
var temperatura;
var seguir = 's';
var paresTemperatura = 0;
var nombreMax;
var pesoMax;
var tempMax;
var bajoceroAnimal = 0;
var bajoceromaxPeso = 0; //asi funciona pero esta mal
var bajocerominPeso = 1001; //asi funciona pero esta mal
var promPeso;
var acuPeso = 0;
var canAnimal = 0;
var flag = 0;

do {
    animal = prompt("Ingrese nombre del animal");
    peso = parseInt(prompt("Ingrese peso"));
    while (peso<1 || peso>1000 || isNaN(peso)) {
        peso = parseInt(prompt("Dato invalido. Reingrese peso (1-1000)"));
    }
    temperatura = parseInt(prompt("Ingrese temperatura del habitat"));
    while (temperatura<-30 || temperatura>30 || isNaN(temperatura)) {
        temperatura = parseInt(prompt("Dato invalido. Reingrese temperatura (-30-30)"));
    }
    
    // a)
    if (temperatura%2==0) {
        paresTemperatura++;
    }

    // b)
    if (flag == 0 || pesoMax<peso) {
        nombreMax = animal;
        tempMax = temperatura;
        flag = 1;
    }
//preguntar como se hace asi funciona pero esta mal porque si no hay bajocero quedan def como 0 y 1001.
    // c) y f)
    if (temperatura<0) {
        bajoceroAnimal++;
        if (peso>bajoceromaxPeso) {
            bajoceromaxPeso = peso;
        }
        if (peso<bajocerominPeso) {
            bajocerominPeso = peso;
        }
   /* asi NO funciona porque si la temp es mayor a 0 no cancela flag
   if (flag == 0 || pesoMax<peso) {
        nombreMax = animal;
        tempMax = temperatura;
    }
    if (temperatura<0) {
            bajoceroAnimal++;
            if (flag == 0 || peso>bajoceromaxPeso) {
                bajoceromaxPeso = peso;
            }
            if (flag == 0 || peso<bajocerominPeso) {
                bajocerominPeso = peso;
                flag = 1
                */

    }
    
    // d)
    acuPeso = acuPeso + peso;
    canAnimal++;

    seguir = prompt("Desea ingresar otro dato?")
} while (seguir == 's');

promPeso = acuPeso / canAnimal;

document.write("Cantidad de temperaturas pares: " + paresTemperatura +
"</br>Nombre animal mas pesado: " + nombreMax + " y su temperatura: " + tempMax +
"</br>Cantidad animales bajo cero: " + bajoceroAnimal + 
"</br>Promedio peso: " + promPeso +
"</br>Peso max bajo cero: " + bajoceromaxPeso +
"</br>Peso min bajo cero: " + bajocerominPeso);

}
