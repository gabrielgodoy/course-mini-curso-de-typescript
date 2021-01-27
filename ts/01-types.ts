// boolean (true / false)
let isOpen: boolean
isOpen = true

// string ('foo', "foo", `foo`)
let message: string
message = `foo ${isOpen}`

// number (int, float, hex, binary)
let total: number
total = 0xff0

// array (type[])
// 1º modo de definir
let items: number[]
items = [1, 2, 3]

// 2º modo de definir
let values: Array<number>
values = [1, 2, 3]

// tuple
// É um array onde já sabemos o número de elementos e também o tipo dos elementos
let title: [number, string, boolean]
title = [1, 'foo', true]

// enum
// Serve para criar um conjunto de chave/valor
enum Colors {
  white = '#fff',
  black = '#000',
}

// any
// Qualquer tipo
let coisa: any
coisa = 123
coisa = 'sdfdsfd'

// void (vazio)
// Não retorna nada, nao tem retorno
function logger(): void {
  console.log('foo')
}

// null / undefined
// Quando não sabemos o valor, ainda não foi definido
type Bla = string | undefined

// never
// Nunca vai retornar
// Por exemplo, quando vamos jogar um erro na tela
function error(): never {
  throw new Error('error')
}

// object
// Tudo que não é nem string, nem aray, nem boolean, nem número
let cart: object
cart = {}
