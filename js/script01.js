"use strict" //previene errores de declaración de variables
//variables de tipo var
var nombre = "Anaís";
console.log("hola mi nombre es: " + nombre);
var a = 10;
var b = 12.5;
console.log("valor de a: " + a);

//variables mal definidas
/*
var 1nombre = "Juan";
var gato 1 = "Mishi";
var gato# = "Mishi2";
*/
var $gato3 = "Mishi3";

alert("Bienvenidos a JS")

//Contenedores de tipo let
//Se usa para variables locales
//dentro de if, while, Funciones
function saludo(){
    let nombre = "Saludando..."
    console.log("Mensaje de función: " + nombre);
}
saludo();

//Contenedores de tipo const
//variables que no pueden ser modificadas
const pi = 3.14
console.log(pi);

//Tipo de datos numericos
var edad = 30
var nota = 5.5
var cantidad = "100"
console.log(edad);
console.log(nota);
console.log(cantidad);
var nuevaCantidad = Number(cantidad)
console.log(nuevaCantidad);
var nuevaCantidad2 = parseInt(cantidad)
console.log(nuevaCantidad2);

//Tipo de Datos String
var comida = "Sushi"
var bebida = "Jugo Shop"
var plato = "El 'Sushi' es lo mejor" 
var plato2 = 'El "Shop" me refresca'
console.log(plato)
console.log(plato2);
//Convertir numero a texto
var edadtxt = String(edad)
console.log(edadtxt);
//Booleanos
var activo = true
var estado = Boolean(10 < 3)
console.log(activo);
console.log(estado);
 //Objetos
var persona = {nombre: "Marcelo", email:"mar@gmail.com"}
console.log(persona);
//arreglo de objetos
var personas = [{nombre:"Andrés",email:"andres@gmail.com"},
                {nombre:"Jacinto",email:"jaci@gmail.com"},
                {nombre:"Andrea",email:"andreaT@gmail.com"},
                persona]
console.log(personas);
var perro = {nombre: "Cachito", raza: "kiltro",ladrar: function(){console.log("Guau Guau!!")}}; 
console.log(perro);
//Uso de Fechas
var fecha = new Date()
var hora = new Date()
console.log(fecha);
hora.getHours()
console.log(hora.getHours());
//Estructuras condicionales
var encendido = true
if (encendido) {
    alert("Prendido")
    console.log(encendido);
}else{
    alert("Apagado")
}
//ingreso por prompt
var curso;
curso = prompt("ingrese nombre del curso:")
if(curso == "javascript"){
    alert("Excelente curso")
    console.log("Excelente lenguaje");
}else{
    alert("Deberias cambiarte de curso")
    console.log("Deberias cambiarte de curso");
}
//Operadores de Incremento y decremento
var numero = 15
numero = ++numero
console.log(numero)
var numero2 = 16
numero2++
console.log(numero2);
var numero3 = 17
numero3 = numero3 + 1
console.log(numero3);

//Decremento
var numero4 = 20
--numero4;
console.log(numero4);

var numero5 = 40
numero5--
console.log(numero5);



//operadores logicos
// and


var valor1= true
var valor2= false
var resultadoAND= (valor1 && valor2)


//ejemplo or
var fiebre = true
var tos= false
if (fiebre || tos){
    console.log("Estas enfermo!, posibilidad de covid, debes ir al medico");
} else{
    console.log("No debes ir al medico")

}



var edad = 25
var resultado2 = ""

switch (edad){
    case 15:
        resultado2 ="La edad es de 15 años"
        break;
        case 25:
        resultado2 ="La edad es de 25 años"
        break;
        case 35:
        resultado2 ="La edad es de 35 años"
        break;
    default:
        resultado2 = "ningun valor concuerda"
        break;
}
console.log ("El resultado de la evaluacion es:" + resultado);
// ciclos, bucle, iteradores
//ciclo FOR 

var cantidad = 10
for (let index = 0; index <= cantidad; index++) {
    console.log (index);   
}

var productos = 5
for (let contador= 0; contador < productos; contador++) {
    console.log ("productos #" + contador);
    //debugger
    
}

// ciclo while indefenido
//primero pregunta despues ejecuta

var contador2 = 0
while (contador2 < 5) {
    console.log(contador2);
    contador2++
}
var producto = 7
while (producto > 0) {
    console.log("Producto vendido!");
    producto--
    
}

var num =2
var resultado = ""

switch (num){
    case 1:
        resultado ="enero"
        break;
        case 2:
        resultado ="Febrero"
        break;
        case 3:
        resultado ="Marzo"
        break;
        case 4:
        resultado ="Abril"
        break;
        case 5:
        resultado ="Mayo"
        break;
        case 6:
        resultado ="Junio"
        break;
        case 7:
        resultado ="Julio"
        break;
        case 8:
        resultado ="Agosto"
        break;
        case 9:
        resultado ="Septiembre"
        break;
        case 10:
        resultado ="Octubre"
        break;
        case 11:
        resultado ="Noviembre"
        break;
        case 12:
        resultado ="Septiembre"
        break;                        
    default:
        resultado = "Error"
        break;
}
console.log ("El mes es:" + resultado);



var num1;
num1 = prompt("ingrese numero:")
if(num1 == "1"){
    alert("Enero")}
    else if (num1 == "2")
        alert("febrero")
        else if (num1 == "3")
        alert("marzo")
        else if (num1 == "4")
        alert("abril")
        else if (num1 == "5")
        alert("mayo")
        else if (num1 == "6")
        alert("junio")
        else if (num1 == "7")
        alert("julio")
        else if (num1 == "8")
        alert("Agosto")
        else if (num1 == "9")
        alert("Septimbre")
        else if (num1 == "10")
        alert("Octubre")
        else if (num1 == "11")
        alert("Noviembre")
        else if (num1 == "12")
        alert("Diciembre")
else{
            alert("Error")
        }
    

//ejemplo do while
//caracteristicas: primero ejecuto despues pregunta
var contador3 = 0;
do {
    //ejecuta
    console.log(contador3);
    contador3++
} while (contador3 < 10);

//ejemplo2

do {
    console.log("producto vendido!");
    productos--
} while (productos > 0);