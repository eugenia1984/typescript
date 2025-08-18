interface LittlePerson {
  name: string;
  age: number;
}

// tanto las interfaces como los type se pueden "extender"
interface Employee extends LittlePerson {
  charge: string;
}

const newEmployee: Employee = {
  charge: "",
  name: "",
  age: 0
}

// Union types
type User = {
  id: string;
}

type Admin = User & {token: string};

const myAdmin: Admin ={
  id: '',
  token: ''
}