// Para habilitar os decorators:
// Definir no tsconfig.json -> experimentalDecorators: true

// O decorator é uma função que recebe alguns paramêtros por default dependendo do tipo de decorator que se trabalha

// @Component
// @Selector
// @useState(algumParametro)

// Criando um decorator simples
// O "decoratorTarget" é o constructor da class onde o decorator vai ser aplicado
function log(decoratorTarget: any) {
  console.log(`Constructor da classe sendo decorada: ${decoratorTarget}`)
}

@log
class Bar {}

// Padrão Factory - Função que vai retornar o decorator
function loggerDecorator(prefix: string) {
  return (decoratorTarget: any) => {
    console.log(`${prefix} - ${decoratorTarget}`)
  }
}

@loggerDecorator('Constructor da classe é: ')
class Foo {}

// CLASS DECORATOR
// O decorator roda toda vez que criamos uma nova instância
function setApiVersion(apiVersion: string) {
  // O constructor da class onde o decorator vai ser aplicado
  return (constructor: any) => {
    // Criando uma nova proproedade na classe sendo decorada
    return class extends constructor {
      version = apiVersion
    }
  }
}
// Decorator para anotar a versão da API
@setApiVersion('1.0.0')
class API {}
console.log(new API())

// PROPERTY DECORATOR
// Decorator para ser aplicado numa propriedade da classe
function minLength(length: number) {
  // target é o prototype da nossa classe
  // key é o nome da propriedade, no caso 'title'
  return (target: any, key: string) => {
    // propriedade da classe
    let val = target[key]

    // getter retorna o valor
    const getter = () => val

    // Função que recebe o valor 'title' e seta
    const setter = (value: string) => {
      if (value.length < length) {
        console.log(`Error: você não pode criar ${key} menor que ${length}`)
      } else {
        val = value
      }
    }

    Object.defineProperty(target, key, {
      get: getter,
      set: setter,
    })
  }
}

class Movie {
  // validação - se tiver length menor que 5 = erro
  @minLength(5)
  title: string

  constructor(t: string) {
    this.title = t
  }
}
const movie = new Movie('Interestellar')
console.log('Movie: ', movie.title)

// METHOD DECORATOR
// O decorator roda toda vez que o método for executado
function delayMessage(ms: number) {
  // target: A classe em si, o prototype
  // key: O nome do método, string
  // PropertyDescriptor: Informações do método
  //    - configurable: costuma ser true
  //    - enumerable: costuma ser true
  //    - value: É a função em si, o método
  //    - writable: costuma ser true
  return (target: any, key: string, descriptor: PropertyDescriptor) => {
    // Salvando o método original, a função
    const originalMethod = descriptor.value

    // Sobreescrevendo o método original
    descriptor.value = function (...args: any[]) {
      console.log(`Esperando ${ms}`)
      setTimeout(() => {
        // Roda o método original com seus argumentos, caso tenha
        originalMethod.apply(this, args)
      }, ms)

      // Retornando o description re-configurado
      return descriptor
    }
  }
}

class Greeter {
  greeting: string

  constructor(g: string) {
    this.greeting = g
  }

  // Uma ideia boa é criar um @debounce para só quando usuário parar de digitar por um tempo rodar o request
  // Decorator que espera um tempo aí sim roda o método
  @delayMessage(1000)
  greet() {
    console.log(`Hello! ${this.greeting}`)
  }
}
const pessoinha = new Greeter('Pessoinha!')

// O decorator delay deve rodar aqui
pessoinha.greet()
