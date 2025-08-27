/****** Utility Types ******/
// https://www.typescriptlang.org/docs/handbook/utility-types.html

// Partial<T> -> devuelve la misma estructura, pero con todos los campos opcionales
interface Task {
  id: number;
  name: string;
  description: string;
}

function updateTask(id: string, task: Partial<Task>) {
  console.log();
}

const newTask = {name: 'Maria'};

updateTask('1', newTask);

// Required<T> -> devuelve la misma estructura, pero con todos los campos obligatorios(required)
interface ToDo {
  id?: number;
  name?: string;
}

const myToDo: Required<ToDo> = {
  id: 0,
  name: "Read"
};

// Records<Keys, Types> -> para la creacion de Objects