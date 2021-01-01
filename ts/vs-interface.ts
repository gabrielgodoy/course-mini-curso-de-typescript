// Interface

// Só esta sendo usado o 'I' no início
// para não dar conflitos com outros types já criados

// Definição
interface IGame {
  title: string;
}

interface IDLC {
  extra: string;
}

// Intersection | extend
interface IGameCollection extends IGame, IDLC {}

// implements
class ICreateGame implements IGameCollection {
  title: string;
  extra: string;

  constructor(title: string, extra: string) {
    this.title = title;
    this.extra = extra;
  }
}

// declarar função
interface IgetSimilars {
  (title: string): void;
}

// ===== Diferenças ===== //

// interface ID extends number {}

// Pode ter múltiplas declarações e ele dá merge no mesmo nome
interface IJQuery {
  a: string;
}

interface IJQuery {
  b: string;
}

const $: IJQuery = {
  a: 'bla',
  b: 'foo',
};

////
// Vantagens das interfaces
////

// É bom quando você cria uma biblioteca que pode ser extensível

// Criando objetos/classes (Prog. orientada a objetos)

// O mais importante é ter consistência
// Se um projeto estiver usando Interfaces,
// use Interfaces
