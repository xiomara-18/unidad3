
//Modificación de arrays

// .map(función)
//El método map() crea un nuevo array con los resultados de la llamada a la función indicada aplicados a cada uno de sus MediaElementAudioSourceNode.
/*
// 1 -> Dado el siguiente array de números, crear un nuevo array con cada uno de los números multiplicados por doa 
let nums  = [1, 2, 3, 4, 5];
console.log(nums);
// Con bucles
/*let numsPorDos = [];
for (let nums of nums){
    numsPorDos.push(nums *2 );
}*/
/*
//Usando map 
let numsPorDos = nums.map((n) => n * 2);

console.log(numsPorDos);
console.log(nums);

// 2 -> Dado el seguiente array de string, crear un array indicando que los elementos están en mayusculas (true) y cuales en minuscula (false)
/* 
console.log(2);
let letras = ["a", "B", "c", "D", "e"]; // {}

let sonMayusculas = letras.map(c => c.toUpperCase() == c);

console.log(sonMayusculas);
/*
// 3 -> Del arreglo de strings, crear un nuevo arreglo con la siguiente pauta: Si la palabra tiene más de 7 letras se pondrá "palabra larga", en caso contrario se pondrá "palabra corta"
console.log(3);
let palabras = [
"hola",
"computadora",
"casa",
"programacion",
"javascript",
"ciclo",
];
// ["palabra corta", "palabra larga", "palabra corta", "palabra larga", "palabra larga", "palabra corta"]

/* 
//manera corta
let palabrasSize = palabras.map((p) =>
    p.length > 7 ? "palabra larga" : "palabra corta"
);

//otra manera corta
let palabrasSIze = palabras.map(
(p)  => ` palabra ${p.length >7 ? "larga" : "corta"}`
);

*/

//manera normal
/*
let palabrasSize = palabras.map((palabra) => {
    if (palabra.length > 7){
        return "palabra Larga";
    }
    return "palabra Corta";

});
*/

 // console.log(palabraSize);
/*
// 4 -> Dado el sigueinte array de números, sumar todos los números
const nums = [1, 2, 3, 4, 5];
console.log(nums);
//Agregamos el elemento neutro para iniciar la suma
let suma = nums.reduce((a, b) => a + b, 0);

console.log(suma);

// 5-> Uasando el mismo array, multiplicar todos los números
let multiplicacion = nums.reduce((a, b) => a * b, 1);
console.log(multiplicacion);
*/
/*
let puntos = [11, 2, 1, 21, 23, 10];
console.log(puntos);

//Ordeno el arreglo por defecto
puntos.sort ();
console.log("Ordenamiento por defecto");
console.log(puntos);

//Ordenamiento numérico estricto
puntos.sort ((a, b) => a - b);
console.log("Ordenamiento numérico estricto");
console.log(puntos);
*/
/*
const arr = [true, 1, "hola", 54.76, "a" ];
console.log(arr);

//Revertimos el arreglo
arr.reverse();
console.log(arr);

*/
//split()
//El metodo split() divide se objeto de tipo String en un array(vector)
//de cadenas mediante la separación de la cadena en subcadenas.

console.log ("split");
const frase = "Boa noite pra voces";
console.log(frase);

//Creamos el array usando el espacio como separador
let palabras = frase.split(" ");
console.log(palabras);

const csv = "Peru,Argentina,Chile,Colombia";
console.log(csv);

//Creamos el array usando la coma (,) como separador
let paises = csv.split(",");
console.log(paises);

//join()
//El metodo join() une a todos los elementos de un array en una 
//cadena y devuekve esta cadena. Por defecto
//los elementos se separan con una coma (",").
console.log("join");

let strPalabras = palabras.join(" ");
console.log(strPalabras);

let strPaises = paises.join();

console.log(strPaises);






















