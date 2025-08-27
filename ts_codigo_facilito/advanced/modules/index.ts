// import * as Utils from './utils.module.ts'
import { generateId, PI, User as Person } from "./utils.module";

// const myNumber = 10 * Utils.PI;
const myNumber = 10 * PI;
// const myUser: Utils.User = { id: Utils.generateId().toString(), name: "Maria" };
const myUser: Person = { id: generateId().toString(), name: "Maria" };

console.log({ myNumber, myUser });
