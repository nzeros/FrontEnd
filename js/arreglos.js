"use strict"
alert("arreglos")

const amigos = ["Anaís", "Max", "Thomas", "Silvana", 23, true]
//mostrar arregñp
console.log(amigos);
// acceder al primer elemento
console.log(amigos[0]);
//acceder ultimo elemento
console.log(amigos[amigos.length-1]);
//todos los arreglos almacenan su tamaño en la propiedad lenght


//para recorrer el arreglo utilizamos el bucle for

console.log("Los elementos del arreglo amigos son:")
for (let index = 0; index < amigos.length; index++) {
    console.log(index + " - " + amigos[index]);
    
}

//existe el for of dedicado a listar obejtos iterables
for (let listar of amigos){
    console.log(listar);
}

//para agregar elementos al final de un arreglo, usamos push()
let nuevoAmigo = "Juan";
let nuevaAmiga = "Gabriela";
amigos.push (nuevoAmigo)
amigos.push (nuevaAmiga)
console.log(amigos);
// para eliminar elementos del final de un arreglo usamos la función pop ()
amigos.pop()
console.log(amigos);

//para agregra elementos al principio utilizo unshift ()

let nueva_Amiga ="Daniela"
amigos.unshift(nueva_Amiga)
console.log(amigos);

//para eliminar elememtos al principio utilizo shift()
amigos.shift()
console.log(amigos);

//para encontrar el indice de un elemento usamos indexOf()
let indice = amigos.indexOf("Thomas")
console.log("El indice de thomas es: "+indice);
// si no lo encuentra el valor devuelve -1

// parar eleminar un elemento a partir de su indice
//se utiliza splice()
let indice1 = amigos.indexOf("Thomas")
amigos.splice(indice1,2);
console.log(amigos);

//para copiar un arreglo usamos la funcion slice()
let copia_arreglo = amigos.slice()
amigos.pop()
console.log("copia arreglos amigos" + copia_arreglo);
console.log("Original: " + amigos);

//concatenar o unir dos arreglos usamos cancat ()
let juegosAntiguos = ["Pacman", "Zelda","Mario Bros","Tetrix"]
let JuegosNuevos= ["Valorant", "Forza", "Resident Evil"]

let todos = juegosAntiguos.concat(JuegosNuevos)
console.log(todos);

//matrices
//para crear una matrix declaramos el arreglo principal y luego recorremos cada posicion creando sub-arreglos
const matrix = new Array(3)
for (let i = 0; index < matrix.length; i++) {
    matrix[1] = new Array(5);
}

console.log(matrix)