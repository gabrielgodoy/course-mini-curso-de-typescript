/*
Type Inference (Inferência ou dedução de tipos)
É preciso tipar as coisas que o Typescript não é capaz de reconhecer,
mas quando o tipo é óbvio não existe necessidade de
*/

// O Typescript inferiu (deduziu) que a variável abaixo é string,
// pelo que foi assinalado na variável
let message2 = 'mensagem definida'
message2 = 'string nova'

// O typescript já entende que o 'e' no parâmetro é um MouseEvent
window.addEventListener('click', (e) => {
  e.target
})
