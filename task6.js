// Type your code below this line!
const prompt = require("prompt-sync")();

const artiuloList = [];
const precioList = [];
const cantidadList = [];

function listSHop(articulos, cantidad, precio){
    this.articulos = articulos;
    this.cantidad = cantidad;
    this.precio = precio;

    this.total = function (){
        let sum = 0;
        for(let i=0; i< this.precio.length; i++){
            sum += this.cantidad[i] * this.precio[i];
        }
        return sum;
    };
}


let continuar = true; 
while(continuar) {
    const producto = prompt("Ingresa el nombre del articulo a comprar: ");
    artiuloList.push(producto);
    const cant = +prompt("Cual es la cantidad de ese producto: ");
    cantidadList.push(cant);
    const price = +prompt("Ingrese el precio del producto: ");
    precioList.push(price);

    var shop = new listSHop(artiuloList, cantidadList,precioList);

    const seguir = prompt("¿Deseas agregar otro producto? (s/n): ");
    if (seguir.toLowerCase() !== 's') continuar = false;
}

console.log("\nTu lista de compras:");
console.log(shop);
console.log(`Total a pagar: $${shop.total()}`);

// Type your code above this line!

