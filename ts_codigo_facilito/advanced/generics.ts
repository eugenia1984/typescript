/****** Generics  ******/

// En vez de tener una interface con un union type uso Generic
// interface MyInterface {
//  field: string | number;
// }

interface MyInterface<T> {
  field: T;
}

interface Example {
  id: string;
  name: string;
}

// Tipo de datos dinamicos que se asignan en tiempo de ejecución
const myValueNumber: MyInterface<number> = { field: 5 };
const myValueString: MyInterface<string> = { field: "5" };
const myValueExample: MyInterface<Example> = {
  field: {
    id: "1",
    name: "first",
  },
};

// Class example
class MyClass<T> {
  field: T;

  constructor(field: T) {
    this.field = field;
  }
}

const myObject: MyClass<string> = new MyClass("123");

// Function example
function getData<T>(id: string): Promise<T> | void {}
getData("Hola");

// Example with classes
interface UserResponse {
  id: number;
  name: string;
}

class HttpResponse<T> {
  data: T;
  status: number;
  code: number;

  constructor(data: T, status: number, code: number) {
    this.data = data;
    this.status = status;
    this.code = code;
  }
}

const fetchUser = (): UserResponse => {
  return {
    id: 1,
    name: "Maria",
  };
};

const myUser = fetchUser();
const res = new HttpResponse(myUser, 200, 1);
console.log(res);

class CRUD<T> {
  private items: T[];

  constructor(items: T[]) {
    this.items = items;
  }

  addItem(item: T) {
    this.items.push(item);
  }

  removeLastItem(item: T) {
    this.items.pop();
  }

  printItems(): T[] {
    return this.items;
  }
}

const users: UserResponse[] = [
  { id: 1, name: "Maria" },
  { id: 2, name: "Ana" },
];

const userCRUD: CRUD<UserResponse> = new CRUD(users);
userCRUD.addItem({id: 3, name: 'Jose'});
console.log(userCRUD.printItems())