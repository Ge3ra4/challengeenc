function copiar() {
    navigator.clipboard.writeText(
        document.getElementById("textoe").value
    );
}

document.querySelector("#botonc").addEventListener("click", copiar);



var botond = document.getElementById("botond");
var botone = document.getElementById("botone");



function desencriptar() {
    var texto = document.querySelector("#texto").value;
    texto = texto
        .replace(/enter/gi, "e")
        .replace(/imes/gi, "i")
        .replace(/ai/gi, "a")
        .replace(/ober/gi, "o")
        .replace(/ufat/gi, "u");
    document.getElementById("textoe").value = texto;
}

function encriptar() {
    var texto = document.getElementById("texto").value;
    texto = texto
        .replace(/e/gi, "enter")
        .replace(/i/gi, "imes")
        .replace(/a/gi, "ai")
        .replace(/o/gi, "ober")
        .replace(/u/gi, "ufat");
    document.getElementById("textoe").value = texto;
}





botond.onclick = function () {
    if(document.getElementById("texto").value.match(/^[a-z ]*$/)) {
        desencriptar();
    } else {
        alert("Solo se permiten letras minúsculas y sin caracteres especiales.")
    }
};



botone.onclick = function () {    
    if(document.getElementById("texto").value.match(/^[a-z ]*$/)) {
        encriptar();
    } else {
        alert("Solo se permiten letras minúsculas y sin caracteres especiales.")
    }
};