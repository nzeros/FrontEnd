"use strict"



function validacion() {
    //declarar variables
    let valor1, valor2,edad1, valor3, valor4
    //capturar datos
    valor1= document.getElementById("nombre").value
    valor2= document.getElementById("apellido").value
    edad1=document.getElementById("edad").value
    valor3= document.getElementById("preferencia")
    valor4= document.getElementById("opciones").selectedIndex
    //validacion
    if (valor1== null || valor1 == 0) {
        alert("Error, debe completar el nombre")
        return false        
    }

    else if (valor2== null || valor2 == 0) {
        alert("Error, debe completar el apellido")
        return false        
    }
    else if( isNaN(edad1) || edad1==0 ) {
        alert("Error, debe ser un numero")
        return false        
    }
    else if (!valor3.checked) {
        alert("Error, debe seleccionar preferencia")
        return false        
    }
    else if (valor4== null || valor4==0){
        alert ("Error debe seleccionar una opción")
        return false
    }

    return true
}

function validaNum1() {
    //declaro variables
    let x, texto
    x=document.getElementById("num1").value
    //valido
    if (isNaN(x) || x < 1 || x > 10) {
        texto="Debe colocar un numero entre 1 y 10"
    } else{
        texto="El número es correcto"
    }
    document.getElementById("mostrarnum1").innerHTML = texto
    
}


function validaNum2() {
    //declaro variables
    let y
    y=document.getElementById("num2")
    //valido
    if (!y.checkValidity()) {
        document.getElementById("mostrarnum2").innerHTML=y.validationMessage
        
    } else {
        document.getElementById("mostrarnum2").innerHTML="Ingreso correcto"
        
    }
  
}