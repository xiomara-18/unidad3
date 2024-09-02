// Mini proyecto

const cars = ["bmw", "volvo", "saab", "ford", "fiat", "audi"];
//Con un cucle, agregamos las imagenes al html
let text = "";

for (let car of cars); {
    text += '<img src="./assets/img${car}.png" alt= "${car}" width ="100" /> ';
}

document.getElementById("demo").innerHTML = text;

//Métodos de array
let btnPush = document.getElementById("btn-push");
//Asignamos la función al botón 
btnPush.onclick = funcionPush;


