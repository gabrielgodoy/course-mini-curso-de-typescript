// Union
// Quando um valor pode ter mais de um tipo
// uid abaixo pode ser número ou string
function logDetails(uid: number | string, item: string) {
  console.log(`A product with ${uid} has a title as ${item}`);
}

logDetails(123, 'sapato');
logDetails('123', 'sapato');

//
// Type Alias
// Ele não cria um novo, mas sim um novo nome para se referir a esse tipo
// Isso também é útil para criar uma só vez esse type alias para er referenciado em vários lugares
//

type Uid = number | string;

function logInfo(uid: Uid, user: string) {
  console.log(`An user with ${uid} has a name as ${user}`);
}

logInfo(123, 'Willian');
logInfo('123', 'Willian');

// Outro exemplo de types alias
type Platform = 'Windows' | 'Linux' | 'MacOS';

function renderPlatform(platform: Platform) {
  return platform;
}
