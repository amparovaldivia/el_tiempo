//ejercicio_uno
function seleccionar_ciudad(elemento) {
    //esta es para obtener el nombre de la ciudad//var ciudad=elemento.innerHTML;
    alert("Cargando informe meteorológico... ");
}

//ejercicio_dos
function cerrar_cookies() {
    document.getElementById("footer").style.display = "none";
}

//ejercicio_tres
function cambiar_celcius() {
    var numeros = document.getElementsByClassName("numero_temperatura");
    for (var x = 0; x < numeros.length; x++) {
        var y = numeros[x].innerHTML;
        var ydos = parseFloat(y);
        var f = ydos * 9 / 5 + 32;
        numeros[x].innerHTML = f;
    }
}

function cambiar_farenheit() {
    var numeros = document.getElementsByClassName("numero_temperatura");
    for (var x = 0; x < numeros.length; x++) {
        var y = numeros[x].innerHTML;
        var ydos = parseFloat(y);
        var f = (ydos - 32) * 5 / 9;
        numeros[x].innerHTML = f;
    }
}


function cambiar_temperatura(elemento) {
    if (elemento.selectedIndex == 0) {
        cambiar_celcius();
    }
    else {
        cambiar_farenheit();
    }
}
