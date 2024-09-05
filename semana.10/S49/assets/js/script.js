$(document).ready(function () {
    //Acá colocaremos nuestor codigo
    //Sintaxis de Jquery
    //$(selector).accion();
    //Con JS
    document.getElementById("#title").innerHTML = "DOM con JS";
    //Con jQuery
    $("#title").html("DOM con jQuery");
    //Seleccionar por clase
    $(".demo").html("Clase seleccionada");
    //Solo usar el primero de una clase 
    $(".demo").first().html("Primer elemento de la clase");

    $("img").attr(
        "src",
        "https://cdn.britannica.com/26/162626-050-3534626F/Koala.jpg"
    );
    $("img").attr("title", "Un koala");
    $("#btn").click(function(){
        $("#resultado").toggle();
    });
});
