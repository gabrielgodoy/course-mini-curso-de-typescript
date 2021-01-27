// O decorator vai trabalhar em cima dessas partes anotadas para que ele adicione coisas novas

// @Component
// @Selector
// @useState("dasdas")

// Padrão Factory - Função que vai retornar o decorator
function loggerDecorator(prefix: string) {
  return (decoratorTarget: any) => {
    // console.log(`${prefix} - ${decoratorTarget}`);
  };
}

// Criando um decorator simples
// O "target" é o constructor da class onde o decorator vai ser aplicado
function log(decoratorTarget: any) {
  console.log(decoratorTarget);
}

@loggerDecorator('awesome')
class Foo {}

// CLASS DECORATOR
function setApiVersion(apiVersion: string) {
  // O constructor da class onde o decorator vai ser aplicado
  return (constructor: any) => {
    return class extends constructor {
      version = apiVersion;
    };
  };
}
// decorator - Anotar a versão da API
@setApiVersion('1.0.0')
class API {}
// console.log(new API());

// PROPERTY DECORATOR
function minLength(length: number) {
  // target é o prototype da nossa classe
  // key é o nome da propriedade
  return (target: any, key: string) => {
    // propriedade da classe
    let val = target[key];

    const getter = () => val;
    const setter = (value: string) => {
      if (value.length < length) {
        console.log(`Error: você não pode criar ${key} menor que ${length}`);
      } else {
        val = value;
      }
    };

    Object.defineProperty(target, key, {
      get: getter,
      set: setter,
    });
  };
}

class Movie {
  // validação - se tiver length menor que 5 - erro
  @minLength(5)
  title: string;

  constructor(t: string) {
    this.title = t;
  }
}
const movie = new Movie('Interestellar');
// console.log('Movie: ', movie.title);

// METHOD DECORATOR
function delayMessage(ms: number) {
  // target: A classe
  // key: O método
  // PropertyDescriptor: Informações do método (configurable, enumerable, value, writable, get, set)
  return (target: any, key: string, descriptor: PropertyDescriptor) => {
    const originalMethod = descriptor.value;

    // @ts-ignore
    descriptor.value = function (...args) {
      console.log(`Esperando ${ms}`);
      setTimeout(() => {
        originalMethod.apply(this, args);
      }, ms);

      return descriptor;
    };
  };
}

class Greeter {
  greeting: string;

  constructor(g: string) {
    this.greeting = g;
  }

  // Uma ideia boa é criar um @debounce para só quando usuário parar de digitar rodar um request
  // Decorator que espera um tempo aí sim roda o método
  @delayMessage(1000)
  greet() {
    console.log(`Hello! ${this.greeting}`);
  }
}
const pessoinha = new Greeter('Pessoinha!');
pessoinha.greet();
