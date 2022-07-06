
let inputNome = document.querySelector('#nome')

inputNome.addEventListener('blur', (evento) => {
    validaNome(evento.target)
});

function validaNome(input){
    let erro = ''
    let nome = inputNome.value

    if(nome == ''){
        erro = 'O campo do nome não deve ficar em branco ou vazio.'
    }
    if(nome.length == 51){
        erro = 'O nome deve conter no máximo 50 caracteres.'
    }
    input.setCustomValidity(erro)
}


let inputEmail = document.querySelector('#email')

inputEmail.addEventListener('blur', (evento) => {
    validaEmail(evento.target)
});

function validaEmail(input){
    let erro = ''
    let email = inputEmail.value

    if(email == ''){
        erro = 'O campo do email não deve ficar em branco ou vazio.'
    }
    input.setCustomValidity(erro)
}

let inputAssunto = document.querySelector('#assunto')

inputAssunto.addEventListener('blur', (evento) => {
    validaassunto(evento.target)
});

function validaassunto(input){
    let erro = ''
    let assunto = inputAssunto.value

    if(assunto == ''){
        erro = 'O campo do assunto não deve ficar em branco ou vazio.'
    }
    if(assunto.length == 51){
        erro = 'O assunto deve conter no máximo 50 caracteres.'
    }
    input.setCustomValidity(erro)
}

let campoMensagem = document.querySelector('#mensagem')

campoMensagem.addEventListener('blur', (evento) => {
    validaMensagem(evento.target)
});

function validaMensagem(input){
    let erro = ''
    let mensagem = campoMensagem.value

    if(mensagem == ''){
        erro = 'O campo de mensagem não deve ficar em branco ou vazio.'
    }else{
        
    }
    if(mensagem.length == 301){
        erro = 'A mensagem deve conter no máximo 300 caracteres.'
    }
    input.setCustomValidity(erro)

}

/// Checar inputs para ativar o botão enviar formulario
function checkInputs(inputs) {
    var filled = true;

    inputs.forEach(function(input) {
        
        if(input.value === "") {
            filled = false;
        }

    });

    return filled;
    
}

var inputs = document.querySelectorAll(".formcontato__input");
var buttonEnviarFormulario = document.querySelector("#enviar");

inputs.forEach(function(input) {
    
    input.addEventListener("keyup", function() {
        if(checkInputs(inputs)) {
        buttonEnviarFormulario.disabled = false;
        } else {
        buttonEnviarFormulario.disabled = true;
        }
    });
});

