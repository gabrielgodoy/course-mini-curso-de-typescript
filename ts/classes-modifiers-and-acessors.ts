class UserAccount {
  // A propriedade é livre, pública
  public name: string;

  // Com protected, a propriedade pode ser acessada
  // dentro da definição dessa classe, ou de alguma classe que herda essa classe
  protected age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  logDetails(): void {
    console.log(`The player ${this.name} is ${this.age} years old.`);
  }
}

const will = new UserAccount('Gabriel', 30);
console.log(will);
will.logDetails();

class CharAccount extends UserAccount {
  // Com private, a propriedade só pode ser acessada
  // dentro da definição dessa classe
  private _nickname: string;

  level: number;

  // A propriedade pode ser chamada nas instâncias
  // Mas não pode ser alterada
  readonly charType: 'guerreiro' | 'aventureiro';

  constructor(
    name: string,
    charType: 'guerreiro' | 'aventureiro',
    age: number,
    nickname: string,
    level: number
  ) {
    // super pega as propriedades da nossa classe acima, que estamos herdando
    super(name, age);

    this._nickname = nickname;
    this.charType = charType;
    this.level = level;
  }

  // Accessors
  // Getter é acesso nas instâncias como uma propriedade
  get getLevel() {
    return this.level;
  }

  // Setter é acesso nas instâncias como uma propriedade
  set setLevel(level: number) {
    this.level = level;
  }

  logCharDetails(): void {
    console.log(
      `The player ${this.name} is ${this.age} and has the char ${this._nickname} at level ${this.level}`
    );
  }
}

const john = new CharAccount('John', 'aventureiro', 45, 'johnmaster', 80);
console.log(john);
console.log(john.level);
john.logDetails();
john.logCharDetails();

////
// Accessors
////
// Getter accessor. Se chama como se fosse uma propriedade
console.log(john.getLevel);

john.setLevel = 499;

// Numa classe eu não posso criar objetos dela, mas eu consigo estendê-logCharDetails
// São classes modelo para outras classes herdarem
abstract class Animal {
  abstract makeSound(): void;

  move(): void {
    console.log('roaming the earth...');
  }
}
