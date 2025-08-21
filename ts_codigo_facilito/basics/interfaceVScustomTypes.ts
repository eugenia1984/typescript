/*
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

// type Admin = User & {token: string};

const myAdmin: Admin = {
  id: '',
  token: ''
}
*/

type LittlePerson = {
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

type Admin = User & Employee;

// Esta union de types no se puede hacer con las interfaces
type ServiceResponseToken = string | null | undefined | number;
type UserTypes = 'admin' | 'superUser' | 0;
const myUser: UserTypes = 'admin';

interface Developer {
  name: string,
  stack: string[];
}

interface Developer {
  phone: string,
}

// TS hace un extends toma las dos interfaces Developer como una porque se llaman igual
const me: Developer = {
  name: "Maria Eugenia",
  stack: ["JavaScript", "TypeScript", "React", "Next"],
  phone: "12345678"
};