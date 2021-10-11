function calculo(params) {
    //alert("hola")
    let totalCuenta = document.getElementById('total').value;

    let servicio = document.getElementById('servicio').value;

    let personas = document.getElementById('personas').value;


    let resultado = (servicio * totalCuenta / personas);
    console.log('resultado: ' + resultado);
    console.log('total: ' + totalCuenta + ' servicio: ' + servicio + ' personas: ' + personas);

    //document.getElementById("res").innerHTML = resultado + " por persona";
    //document.getElementById("res").innerHTML = "<p>Total a pagar:</p><h3>" + resultado + " por persona</h3>";

    if (isNaN(resultado)) {
        alert("Introduce datos correctamente");
    } else if (personas == '') {
        alert("Introduce datos correctamente");
    } else {
        //document.getElementById("res").innerHTML = resultado + " por persona";
        document.getElementById("res").innerHTML = "<p>Total a pagar:</p><h3>" + resultado + " por persona</h3>";
    }
}

function limpiar() {
    document.getElementById("limpiar").reset();
    document.getElementById("res").innerHTML = "";
}