
const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]')
const popoverList = [...popoverTriggerList].map(popoverTriggerEl => new bootstrap.Popover(popoverTriggerEl))


const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))

//Enviar Correo//
$(document).ready(function () {
    $('[data-bs-toggle="tooltip"]').tooltip();
  });


$('#correo').click(function () {
    alert("Correo enviado correctamente")

})

//Cambiar color//
$(document).ready(function() {
    $('#ingredientes').on('dblclick', function() {
      $(this).css('color', 'red'); // Cambia el color a rojo
    });

    $('#preparacion').on('dblclick', function() {
      $(this).css('color', 'red'); // Cambia el color a rojo
    });
  });


  //Ocultar información//

$(document).ready(function () {
    $('#card-title').on('click', function () {
      $(this).siblings('.card-body').toggle();
    });
  });

  $(document).ready(function () {
    $('#card-title1').on('click', function () {
      $(this).siblings('.card-body').toggle();
    });
  });

  $(document).ready(function () {
    $('#card-title2').on('click', function () {
      $(this).siblings('.card-body').toggle();
    });
  });


$('#btn').click(function(){
    alert("correo enviado correctamente")

})

$('#btn2').dblclick(function(){
    alert("boton clickeado 2 veces!!!!")

})

$('.hover').hover(
    function() {$(this).css('background-color', 'yellow')},
    function() {$(this).css('background-color', '')},
)


$('h2').dblclick(function(){
    $(this).css('color', 'red')
})


$('#btntoggle').click(function(){
    $('#contenido').toggle()
})