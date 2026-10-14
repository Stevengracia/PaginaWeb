
const botonMensaje = document.getElementById("botonMensaje");

botonMensaje.addEventListener("click", function () {

    document.getElementById("mensaje").textContent =
        "¡Hola! Gracias por visitar mi página web.";

});




const balon = document.getElementById("balon");

balon.addEventListener("dblclick", function () {

    this.style.transform = "scale(1.4) rotate(360deg)";

});



const caja = document.getElementById("caja");

caja.addEventListener("mouseover", function () {

    this.style.backgroundColor = "#acef03";
    this.style.color = "white";
    this.textContent = "¡El mouse está sobre la caja!";

});



const nombre = document.getElementById("nombre");

nombre.addEventListener("input", function () {

    const resultado = document.getElementById("resultado");

    if (this.value === "") {

        resultado.textContent = "";

    } else {

        resultado.textContent =
            "Hola, " + this.value + " 👋";

    }

});




const formulario = document.getElementById("formulario");

formulario.addEventListener("submit", function (event) {

    event.preventDefault();

    const nombreUsuario =
        document.getElementById("nombre").value;

    document.getElementById("resultado").textContent =
        "Formulario enviado correctamente. ¡Bienvenido, " +
        nombreUsuario + "!";

});