// Utilitários para podermos trabalhar com os tipos

type Todo = {
  title: string
  description: string
  completed: boolean
}

//
// TYPE UTILITY "Readonly"
const todo: Readonly<Todo> = {
  title: 'Assistir Dark de novo',
  description: 'Relembrar os detalhes',
  completed: false,
}

console.log(todo)

// O Todo é [Readonly]
// Linha abaixo dá erro, não é possivel editar propriedades do objeto
// > todo.completed = true

//
// TYPE UTILITY "Partial"
// Para editarmos um objeto Readonly podemos criar uma função para isso
// Serve para podermos passar somente algumas propriedades de um objeto. Faz todas as propriedades serem opcionais
function updateTodo(todo: Todo, fieldsToUpdate: Partial<Todo>) {
  return { ...todo, ...fieldsToUpdate }
}

const todo2: Todo = updateTodo(todo, { completed: true })
console.log(todo2)

//
// TYPE UTILITY "Pick"
// Serve para pegar somente um conjunto de propriedades de um tipo
type TodoPreview = Pick<Todo, 'title' | 'completed'>

const todo3: TodoPreview = {
  title: 'Fechar Ghost of Tsushima',
  completed: true,
}

// TYPE UTILITY "Omit"
// Serve para pegar um tipo omitindo certas propriedades
type TodoPreview2 = Omit<Todo, 'description'>

const todo4: TodoPreview = {
  title: 'Fechar Ghost of Tsushima',
  completed: true,
}
