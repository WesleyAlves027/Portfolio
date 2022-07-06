import { valida } from './validacao-form'

const inputs = document.querySelectorAll('.formcontato__input')

inputs.forEach(input =>{
    input.addEventListener('blur', (evento) => {
        valida(evento.target)
    })
})