// Generics
// https://www.typescriptlang.org/docs/handbook/generics.html#hello-world-of-generics

/*
Generics permitem a criação de códigos e funções que funcionem com um número de tipos ao inves de um único tipo
*/

// Letras comuns usadas para Generics
//
// S => State
// T => Type
// K => Key
// V => Value
// E => Element
// P => Properties

// Abaixo se definiu que um array com elementos de um determinado tipo será passado para a função
const last = <T>(arr: T[]) => {
  return arr[arr.length - 1]
}
const l = last([1, 2, 3]) // 3

//
// Genérico é muito usado em React hooks,
// onde uma vez passado um tipo, ele se mantém
function useState<S>() {
  let state: S

  function getState() {
    return state
  }

  function setState(newState: S) {
    state = newState
  }

  return { getState, setState }
}

// Aqui eu defino que o Generic é string
// Depois de definido aqui não da pra mudar
const newState = useState<string>()
newState.setState('foo')
console.log(newState.getState())

// Dá erro linha abaixo, pois defini o Generic como sendo string acima
// newState.setState(123);
console.log(newState.getState())

//
// Explicitando tipos possíveis para um Generic
function useState2<S extends string | number>() {
  let state: S

  function getState() {
    return state
  }

  function setState(newState: S) {
    state = newState
  }

  return { getState, setState }
}

//
// Definindo um tipo default,
// se nenhum tipo for passado quando se executa a função
// Colocar "= [TIPO]"
function useState3<S extends string | number = string>() {
  let state: S

  function getState() {
    return state
  }

  function setState(newState: S) {
    state = newState
  }

  return { getState, setState }
}
