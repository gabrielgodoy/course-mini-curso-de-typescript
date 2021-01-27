// As interfaces são exclusivamente para descrever a estrutura de objetos

// Esse padrão com o 'I' na frente, vinha por causa no C#
// Mas essa prática não é necessária
interface IGame {}

interface Game {
  title: string
  description: string
  readonly genre: string // genre não pode ser modificado
  platform?: string[] // Platform é opcional por causa do '?'
  getSimilars?: (title: string) => void
}

const theLastOfUs: Game = {
  title: 'The Last Of Us',
  description: 'The best game',
  genre: 'Action',
  platform: ['PS3', 'PS4'],
  getSimilars: (title) => {
    console.log(`Similar games to ${title}: Uncharted`)
  },
}

console.log(theLastOfUs.title)

if (theLastOfUs.getSimilars) {
  theLastOfUs.getSimilars(theLastOfUs.title)
}

// Extendendo a interface Game
interface DLC extends Game {
  originalGame: Game
  newContent: string[]
}

const leftBehind: DLC = {
  title: 'The Last of Us - Left Behind',
  description: 'You play as Ellie before the original game',
  genre: 'Action',
  platform: ['PS4'],
  originalGame: theLastOfUs,
  newContent: ['3 hours story', 'new characters'],
}

// Implementando uma interface na classe
class CreateGame implements Game {
  title: string
  description: string
  genre: string

  constructor(title: string, description: string, genre: string) {
    this.title = title
    this.description = description
    this.genre = genre
  }
}

//
// Types vs Interfaces
// Quando existe um objecto mais simples, melhor usar o type alias
// Quando são objectos mais simples, melhor usar a interface

// Ambas podem ser usados ​​para descrever a forma de um objeto
// ou uma assinatura de função. Mas a sintaxe é diferente.

// Interfaces
interface Point {
  x: number
  y: number
}

interface SetPoint {
  (x: number, y: number): void
}

// Types
type Point2 = {
  x: number
  y: number
}

type SetPoint2 = (x: number, y: number) => void
