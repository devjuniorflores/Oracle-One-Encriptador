var entradaTexto = document.getElementById("caja_texto");
var salida_Texto = document.getElementById("salidaTexto");

botonCopiar.hidden = true;
salida_Texto.hidden = true;

function codificar(texto){
    return texto
    .replace(/e/ig,"enter")
    .replace(/i/ig,"imes")
    .replace(/a/ig,"ai")
    .replace(/o/ig,"ober")
    .replace(/u/ig,"ufat");
}

function decodificar (texto_dec){ 
    return texto_dec
    .replace(/enter/ig,"e")
    .replace(/imes/ig,"i")
    .replace(/ai/ig,"a")
    .replace(/ober/ig,"o")
    .replace(/ufat/ig,"u");
}
    
function encriptar(){
    var texto = entradaTexto.value;
    var transformarTexto = texto.toLowerCase();
    var normalizar = transformarTexto.normalize("NFKD");
    document.querySelector(".munheco").style.display = "none";
    document.querySelector(".mensaje_1").style.display = "none";
    document.querySelector(".mensajeTextoVacio").style.display = "none";
    botonCopiar.hidden= false;
    salida_Texto.hidden= false;

    salida_Texto.textContent = codificar(normalizar);
}

function desencriptar(){
    var texto = entradaTexto.value;
    var transformarTexto = texto.toLowerCase();
    var normalizar = transformarTexto.normalize("NFKD");
    textoSalida.textContent = decodificar(normalizar);
    document.querySelector(".munheco").style.display = "none";
    document.querySelector(".mensaje_1").style.display = "none";
    document.querySelector(".mensajeTextoVacio").style.display = "none";
    botonCopiar.hidden= false;
    salida_Texto.hidden= false;
}

function copiar(){
    salida_Texto.select();
    salida_Texto.setSelectionRange(0, 99999);
    navigator.clipboard.writeText(salida_Texto.value);
    alert("El texto fue copiado exitosamente");
}