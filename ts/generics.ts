// Generics
// https://www.typescriptlang.org/docs/handbook/generics.html#hello-world-of-generics

// Letras comuns usadas para Generics
//
// S => State
// T => Type
// K => Key
// V => Value
// E => Element

//
// Genérico é muito usado em React hooks,
// onde uma vez passado um tipo, ele se mantém

function useState<S>() {
  let state: S;

  function getState() {
    return state;
  }

  function setState(newState: S) {
    state = newState;
  }

  return { getState, setState };
}

// Aqui eu defino que o Generic é string
// Depois de definido aqui não da pra mudar
const newState = useState<string>();

newState.setState('foo');
console.log(newState.getState());

// newState.setState(123); Dá erro, porque eu defini o Generic como sendo string acima
console.log(newState.getState());
