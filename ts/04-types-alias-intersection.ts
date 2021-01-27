// Propriedade opcional com '?'
// A propriedade 'email'foi definida como opcional com a interrogação '?'
type AccountInfo = {
  id: number | string // Union
  name: string
  email?: string
}

const account: AccountInfo = {
  id: 123,
  name: 'Gabriel',
}

// CharInfo - Informação do personagem
type CharInfo = {
  nickname: string
  level: number
}

const char: CharInfo = {
  nickname: 'gabrielgodoy',
  level: 100,
}

// Interseção de tipos com '&'
// playerInfo é a interseção entre AccountInfo e o CharInfo
// Ele vai juntar os tipos e as propriedades de CharInfo podem sobrescrever as de AccountInfo
type PlayerInfo = AccountInfo & CharInfo

const player: PlayerInfo = {
  id: 123,
  name: 'gabriel',
  nickname: 'gabrielgodoy',
  level: 100,
}
