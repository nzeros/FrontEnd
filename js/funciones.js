"use strict"
alert("Funciones en js")
// funcion sin parametro y sin retorno
function saludar() {
    let saludo="Saludando..."
    console.log(saludo);
    alert("saludo")
}

//tambien puedo llamar a la funciones solo con botones
//console.log(saludar)



//funcion con parametro y retorno
function sumar(num1=30,num2=20) {
    let resultado = num1+num2
    console.log("La suma entre num1 y num2 es: "+resultado);
    alert("La suma entre num1 y num2 es: "+resultado)
    return resultado
}
//llamar la funcion
//sumar()



function persona(nombre="Pedro", edad=27) {
    let mensaje= nombre + " tiene " + edad + " años"
    console.log(mensaje);
    alert(nombre +  " tiene "  + edad +  " años")
    return mensaje
}
persona()

//captura de datos
var elemento1 = document.getElementById("texto")
var contenido1= elemento1.innerHTML

var textoMod = "texto modificado"
var elemento2 = document.getElementById("texto2")


function recibir() {
    let valor1 = document.getElementById("nombre").value
    let valor2 = document.getElementById("apellido").value
    document.getElementById("mostrar").innerHTML = valor1 + " " + valor2
    console.log(valor1 + " " + valor2)

}
