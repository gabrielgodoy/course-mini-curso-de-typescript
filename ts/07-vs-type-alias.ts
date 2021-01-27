// Type Alias

// Só esta sendo usado o 'T' no início
// para não dar conflitos com outros types já criados

// Definição
type TGame = {
  title: string
}

type TDLC = {
  extra: string
}

// Intersection
type TGameCollection = TGame & TDLC

// implements
class TCreateGame implements TGameCollection {
  title: string
  extra: string

  constructor(title: string, extra: string) {
    this.title = title
    this.extra = extra
  }
}

// declarar função
type TgetSimilars = (title: string) => void

// ===== Diferenças ===== //

// Permite declarar tipos primitivos
type TId = string | number

// pode declarar tuplas normalmente
type TTuple = [number, number, number]
;[1, 2, 3] as TTuple

// Apenas uma declaração por escopo, abaixo dá erro
// type TJQuery = { a: string };
// type TJQuery = { b: string };

////
// Vantagens dos type alias
////

// Ele é mais recomendado na maioria das vezes

// Sempre comece usando types, e caso for criar alguma lib ou algo do tipo transforme para interface

// O mais importante é ter consistência
// Se um projeto estiver usando Type Alias,
// use Type Alias
