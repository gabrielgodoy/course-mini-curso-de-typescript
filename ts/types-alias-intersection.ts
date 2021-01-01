// accountInfo
// A propriedade 'email'foi definida como opcional com a '?'
type AccountInfo = {
  id: number | string;
  name: string;
  email?: string;
};

const account: AccountInfo = {
  id: 123,
  name: 'Gabriel',
};

// CharInfo - Informação do personagem
type CharInfo = {
  nickname: string;
  level: number;
};

const char: CharInfo = {
  nickname: 'gabrielgodoy',
  level: 100,
};

// playerInfo é a interseção entre AccountInfo e o CharInfo
// ele vai juntar os tipos
type PlayerInfo = AccountInfo & CharInfo;

const player: PlayerInfo = {
  id: 123,
  name: 'gabriel',
  nickname: 'gabrielgodoy',
  level: 100,
};
