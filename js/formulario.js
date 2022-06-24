"use strict"

function validacion2() {
    //declarar variables
    let valor1, valor2,  telefono, valor3
    //capturar datos
    valor1= document.getElementById("nombre").value
    valor2= document.getElementById("email").value
    telefono= document.getElementById("telefono").value
    valor3= document.getElementById("mensaje").value
    //validacion
    if (valor1== null || valor1 == 0) {
        alert("Error, debe completar el nombre")
        return false        
    }

    else if (valor2== null || valor2 == 0) {
        alert("Error, debe completar el E-Mail")
        return false        
    }
    else if( !(/^\d{9}$/.test(telefono)) ) {
        alert("Error, debe completar un telefono valido")
        return false;
    }
    
    else if (valor3== null || valor3 == 0) {
        alert("Error, debe completar el mensaje")
        return false        
    }

    return true
}



////// TIPOS DE VALIDACIONES////////////////
/////   https://uniwebsidad.com/libros/javascript/capitulo-7/validacion /////