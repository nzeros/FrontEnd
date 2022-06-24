"use strict"


function validacion2() {
  //declarar variables
  let valor1, valor2, telefono, valor3
  //capturar datos
  valor1 = document.getElementById("nombre").value
  valor2 = document.getElementById("email").value
  telefono = document.getElementById("telefono").value
  valor3 = document.getElementById("mensaje").value
  //validacion
  if (valor1 == null || valor1 == 0) {
    alert("Error, debe completar el nombre")
    return false
  }

  else if (valor2 == null || valor2 == 0) {
    alert("Error, debe completar el E-Mail")
    return false
  }
  else if (!(/^\d{9}$/.test(telefono))) {
    alert("Error, debe completar un telefono valido")
    return false;
  }

  else if (valor3 == null || valor3 == 0) {
    alert("Error, debe completar el mensaje")
    return false
  }

  return true
}



var textoMod = ("t")
var elemento2 = document.getElementById("texto2")

var textoMod3 = "cambiado"
var elemento3 = document.getElementById("texto3")

var textoMod4 = "thola"
var elemento4 = document.getElementById("texto4")

var textoMod5 = "texto modificado"
var elemento5 = document.getElementById("texto5")






function sumarproduc() {
  let tot = document.getElementById("pm").value * 150000
  let tot1 = document.getElementById("pm1").value * 30000
  let tot2 = document.getElementById("pm2").value * 15000
  let tot3 = document.getElementById("pm3").value * 20000
  let total = (Number(tot) + Number(tot1) + Number(tot2) + Number(tot3))
  document.getElementById('neto').innerHTML = "$ " + (total)
  if (total >= 1000000) {
    let desc = document.getElementById('desc').innerHTML = (total * 0.15)
    document.getElementById('preciodesc').innerHTML = "$ " + (total - desc)
    document.getElementById('sumarproduc').innerHTML = "$ " + (total - desc) * 1.19
  }
  else if (total < 1000000) {
    document.getElementById('sumarproduc').innerHTML = "$ " + (total * 1.19)
  }
}


for (let i=0; i<=49; i=i +1 *2) {
       console.log(i);}






$(document).ready(function(){
  $("#mostrar1").click(function(){
    $("#p0").toggle();
  });
});




$(document).ready(function(){
  $("#mostrar2").click(function(){
    $("#p1").toggle();
  });
});


$(document).ready(function(){
  $("#mostrar3").click(function(){
    $("#p2").toggle();
  });
});


const preguntas = document.querySelectorAll('.preguntas .contenedor-pregunta');
preguntas.forEach((pregunta) => {
	pregunta.addEventListener('click', (e) => {
		e.currentTarget.classList.toggle('activa');

		const respuesta = pregunta.querySelector('.respuesta');
		const alturaRealRespuesta = respuesta.scrollHeight;
		
		if(!respuesta.style.maxHeight){
			// Si esta vacio el maxHeight entonces ponemos un valor.
			respuesta.style.maxHeight = alturaRealRespuesta + 'px';
		} else {
			respuesta.style.maxHeight = null;
		}

		// [Opcional] Reiniciamos las demas preguntas
		preguntas.forEach((elemento) => {
			// Solamente queremos ejecutar el codigo para las preguntas que no 
			// sean la pregunta a la que le dimos click.
			if(pregunta !== elemento){
				elemento.classList.remove('activa');
				elemento.querySelector('.respuesta').style.maxHeight = null;
			}
		});


	});
});