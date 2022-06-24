"use strict"
$(document).ready(function () {
    // aqui va todo el codigo js y jquery
    console.log("test jquery");

     document.querySelector("h2").innerHTML="Curso de Jquery"
    document.querySelector(".display-3").innerHTML="Herramienta de desarrollo"
    document.querySelector(".titulo1").innerHTML="Titulo modificado"

    //acceder al dom con javascript

    //acceder al dom con jquery
    $(".titulo4").html("modifico titulo4")
    $("#texto4").html("modifico parrafo 4")
    //metodo que permite agregar clases
    $("#texto4").addClass("text-danger")
    $("#texto5").addClass("db-danger")

$(function () {
    alert("Funciones con Jquery")
    })


//funcion reemplaza
$(function () {
    let obtiene = $('.obtiene').html()
    $('.reemplaza').html("reemplaza texto")
    })

$(function () {
    $("button").click(function(){
        $('.remueve').remove()
    })
})



//funcion mostrar ocultar
$('#ocultar').click(function () {
    $('#parrafo').hide()
    
})


$('#mostrar').click(function () {
    $('#parrafo').show()
    
})


});