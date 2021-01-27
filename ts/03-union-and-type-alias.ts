// Union
// Quando um valor pode ter mais de um tipo se usa o pipe "|"
// uid abaixo pode ser número ou string
function logDetails(uid: number | string, item: string) {
  console.log(`A product with ${uid} has a title as ${item}`)
}

logDetails(123, 'sapato') // válido
logDetails('123', 'sapato') // válido

//
// Type Alias
// Cria-se um apelido para um tipo ou tipos.
// É como se criássemos um novo tipo que tem tipos já conhecidos embaixo dos panos
// É útil para criar uma só vez esse type alias para ser referenciado em vários lugares
//
type Uid = number | string

function logInfo(uid: Uid, user: string) {
  console.log(`An user with ${uid} has a name as ${user}`)
}

logInfo(123, 'Willian')
logInfo('123', 'Willian')

// Outro exemplo de types alias
type Platform = 'Windows' | 'Linux' | 'MacOS'

function renderPlatform(platform: Platform) {
  return platform
}
