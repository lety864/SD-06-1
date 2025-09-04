// Type your code below this line!
const prompt = require("prompt-sync")();

function Car(marca, modelo, año, color, puertas, kilometraje, tipo) {
    this.marca = marca;
    this.modelo = modelo;
    this.año = año;
    this.color = color;
    this.puertas = puertas;
    this.kilometraje = kilometraje;
    this.tipo = tipo; 

    this.mostrarInfo = function() {
        console.log("\nInformación del coche:");
        console.log(`Marca: ${this.marca}`);
        console.log(`Modelo: ${this.modelo}`);
        console.log(`Año: ${this.año}`);
        console.log(`Color: ${this.color}`);
        console.log(`Número de puertas: ${this.puertas}`);
        console.log(`Kilometraje: ${this.kilometraje} km`);
        console.log(`Tipo: ${this.tipo}`);
    };
}


const marca = prompt("Ingresa la marca del coche: ");
const modelo = prompt("Ingresa el modelo del coche: ");
const año = +prompt("Ingresa el año del coche: ");
const color = prompt("Ingresa el color del coche: ");
const puertas = +prompt("Número de puertas: ");
const kilometraje = +prompt("Kilometraje del coche: ");
const tipo = prompt("Tipo de coche (Combustión/Eléctrico): ");


const miCoche = new Car(marca, modelo, año, color, puertas, kilometraje, tipo);


miCoche.mostrarInfo();

// Type your code above this line!

