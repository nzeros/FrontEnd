"use strict"



////////////////////////////-----------------Calculadora ----------------------///////////////////////////////////////////
function sumar() {
    let valor3 = document.getElementById("n1").value
    let valor4 = document.getElementById("n2").value
    document.getElementById("sumar").innerHTML = "resultado suma : " + (parseInt(valor3) + parseInt(valor4))
}
function dividir() {
    let valor3 = document.getElementById("n1").value
    let valor4 = document.getElementById("n2").value
    document.getElementById("dividir").innerHTML = "resultado division: " +(parseInt(valor3) / parseInt(valor4))

}

function restar() {
    let valor3 = document.getElementById("n1").value
    let valor4 = document.getElementById("n2").value
    document.getElementById("restar").innerHTML ="resultado resta: " + (parseInt(valor3) - parseInt(valor4))

}
function multiplicar() {
    let valor3 = document.getElementById("n1").value
    let valor4 = document.getElementById("n2").value
    document.getElementById("multiplicar").innerHTML = "resultado multiplicación : " + (parseInt(valor3) * parseInt(valor4))

}
////////////////////////////-----------------Calculadora promedio----------------------///////////////////////////////////////////

function promedio() {
    let valor5 = document.getElementById("num1").value
    let valor6 = document.getElementById("num2").value
    let valor7 = document.getElementById("num3").value
    let prom =(Number(valor5)+Number(valor6)+Number(valor7))/3
    document.getElementById('promedio').innerHTML = prom.toFixed(1)

}
//    document.getElementById('promedio').innerHTML = "El promedio es: " + (parseFloat(valor5)+parseFloat(valor6)+parseFloat(valor7))/3


////////////////////////////////////////////calcular area de un tringulo/////////////////////////////////
function areatringulo() {
    let nb = document.getElementById("base").value
    let na = document.getElementById("altura").value
    let area =(nb*na)/2
    document.getElementById('areatringulo').innerHTML = area
}

/////////////////////////////////////////////IMC//////////////////////////////////////////////////////////

function imc() {
    let i = document.getElementById("alturac").value /100
    let m = document.getElementById("peso").value
    let  imasa = ( Number (m) / (Number (i)* Number (i)))
    document.getElementById('imc').innerHTML = imasa
    if(imasa <= 18.5){
        document.getElementById('imc').innerHTML = imasa.toFixed(1) + (" Estas bajo peso")}
        else if (imasa >= 25)
        document.getElementById('imc').innerHTML = imasa.toFixed(1) + (" Tienes Sobrepeso")
        else{
        document.getElementById('imc').innerHTML = imasa.toFixed(1) + (" Tienes peso normal")}
        

        ///else (imasa > 39.9)
        //document.getElementById('imc').innerHTML = imasa.toFixed(1) + (" Muy severo")
}


/*
function imc() {
    let i = document.getElementById("alturac").value /100
    let m = document.getElementById("peso").value
    let  imasa = ( Number (m)) / (Number (i)* Number (i))
    document.getElementById('imc').innerHTML = imasa.toFixed(1)
    if(imasa <= 18.5){
        mensaje1 =" Estas bajo peso"}
        else if (imasa >= 25){
        mensaje1 = " Tienes Sobrepeso"}
        else{
        mensaje1 = " Estas en un peso normal"
        }
        
        document-getElementById("mensaje1").value ; mensaje1
        document.getElementById(imc).innerHTML= mensaje1

}
*/

//////////////////////////////////////////////////////calcular promedio con condicion////////////////////////////////////

function promedioresu() {
    let val1 = document.getElementById("not1").value
    let val2 = document.getElementById("not2").value
    let val3 = document.getElementById("not3").value
    let promcondi =((Number(val1)+Number(val2)+Number(val3))/3)
    document.getElementById('promedioresu').innerHTML = promcondi
    if(promcondi > 55){
        document.getElementById('promedioresu').innerHTML = promcondi.toFixed(1) + (" Aprobado, no rinde examen")}
        else if (promcondi > 39)
        document.getElementById('promedioresu').innerHTML = promcondi.toFixed(1) + (" Aprobado, pero rinde examen")
        else{
        document.getElementById('promedioresu').innerHTML = promcondi.toFixed(1) + (" reprobado")
}}












///////////////////////////////----------------calcular promedio si aprueba o reprueba----------//////////////////////////////////////////////////////////
/**var num1, num2, promedio;
num1 = parseInt(prompt("ingrese numero:"))
num2= parseInt(prompt("ingrese numero:"))
promedio = (num1+ num2) /2
if(promedio > 55){
    alert("Aprobado no rinde examen")}
    else if (promedio > 39)
    alert("Aprueba pero rinde examen")
    else{
    alert("reprobado")
    }
*/

function condicion(num1 = parseInt(prompt("ingrese una nota:")) ,num2= parseInt(prompt("ingrese otra nota:"))) {
    let promedio = (num1+ num2) /2
    if(promedio > 55){
        alert("Aprobado no rinde examen")}
        else if (promedio > 39)
        alert("Aprueba pero rinde examen")
        else{
        alert("reprobado")
}}


function sabermes(num1 = prompt("ingrese numero:")) {
    let mes = num1
    if(mes == "1"){
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
    
}
