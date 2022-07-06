var inputCodigo = document.querySelector("#input__mensagem");
var inputResultado = document.querySelector("#input__resultado");
var buttonCriptografar = document.querySelector("#button__criptografar");
var buttonDecodificar = document.querySelector("#button__decodificar");
var buttonCopiar = document.querySelector("#button__copiar");

buttonCriptografar.addEventListener ('click', function(e){
    e.preventDefault()
    var arrayMensagem = inputCodigo.value.split('')

    var codigo1 = "e"
    var codigo2 = "i"
    var codigo3 = "a"
    var codigo4 = "o"
    var codigo5 = "u" 

    for(i=0; i < arrayMensagem.length; i++){
        if(arrayMensagem[i] == (codigo1) || (codigo2) || (codigo3) || (codigo4) || (codigo5)){
            inputResultado.value  = inputCodigo.value.toLowerCase().replaceAll('e', 'enter').replaceAll('i', 'imes').replaceAll('a', 'ai')
            .replaceAll('o', 'ober').replaceAll('u', 'ufat')
        }
    }
    inputCodigo.value = ""
});

buttonDecodificar.addEventListener ('click', function(e){
    e.preventDefault()
   
    if(inputCodigo.value ==  ('enter') || ('imes') || ('ai') || ('ober') || ('ufat')){
        inputResultado.value = inputCodigo.value.replaceAll('enter', 'e').replaceAll('imes', 'i').replaceAll('ai', 'a').replaceAll('ober', 'o').replaceAll('ufat', 'u')
        inputCodigo.value = ""
        
    }

        
});

buttonCopiar.addEventListener ('click', function(){
    var copiarTexto = document.querySelector('#input__resultado').value;
    navigator.clipboard.writeText(copiarTexto);
    inputResultado.value = ""
});

