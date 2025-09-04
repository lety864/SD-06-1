// Type your code below this line!
const prompt = require("prompt-sync")();
let amigoList = [];

function friends (friendsList){
    this.friendsList = friendsList;
}

const numAmigo = +prompt("Ingresa un numero para enlistar nombres: ");
console.log(numAmigo);

for(let i=1; i <= numAmigo; i++){
    let amigo = prompt(`Ingresa el nombre de tu amigo ${i}: `);
    amigoList.push(amigo);
}

const newAmigo = new friends(amigoList);
console.log(newAmigo.friendsList);
        
// Type your code above this line!

