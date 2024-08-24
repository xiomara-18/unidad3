// Métodos de arrays
let nums = [1, 2, 3, 4, 5];
console.log(nums);
//array.push(e) Añade el elemento e al final del array
nums.push(6);
nums.push(7);
nums.push("HOLAAA");
console.log(nums);
// array.pop() Elimina el último elemento del array y lo retorna
let elementoEliminado = nums.pop();
console.log(nums);
// Mostramos el elemento eliminado que guardamos
console.log(elementoEliminado);
//Eliminamos otros dos elementos
nums.pop();
nums.pop();
console.log(nums);

