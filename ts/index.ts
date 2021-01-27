// Definindo os dois inputs como HTMLInputElement
const input1 = document.getElementById('num1') as HTMLInputElement
const input2 = document.getElementById('num2') as HTMLInputElement

const button = document.getElementById('button') as HTMLButtonElement

// Não há necessidade de definir o retorno da função
// O Typescript já infere que number + number, o retorno é number
function sum(a: number, b: number) {
  return a + b
}

button.addEventListener('click', function () {
  console.log(sum(Number(input1.value), Number(input2.value)))
})
