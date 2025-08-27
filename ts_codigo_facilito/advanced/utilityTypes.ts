/****** Utility Types ******/
// https://www.typescriptlang.org/docs/handbook/utility-types.html

// Partial<T> -> return the same structure, but with all the fields optional
interface Task {
  id: number;
  name: string;
  description: string;
}

function updateTask(id: string, task: Partial<Task>) {
  console.log();
}

const newTask = { name: "Maria" };

updateTask("1", newTask);

// Required<T> -> return the same structure, but with all the fields required
interface ToDo {
  id?: number;
  name?: string;
}

const myToDo: Required<ToDo> = {
  id: 0,
  name: "Read",
};

// Records<Keys, Types> -> create Objects
interface CatInfo {
  age: number;
  name: string;
}

type CatName = "moi" | "baris" | "luna";

const cats: Record<CatName, CatInfo> = {
  moi: { age: 1, name: "moi" },
  baris: { age: 2, name: "baris" },
  luna: { age: 3, name: "luna" },
};

// Pick <T, Properties> -> takes properties of an interface
interface ToDos {
  title: string;
  description: string;
  completed: boolean;
}

type ToDosPreview = Pick<ToDos, "title" | "completed">;
const otherToDos : ToDosPreview = {
  title: "Clean room",
  completed: false
}