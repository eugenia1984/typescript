"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// import * as Utils from './utils.module.ts'
var utils_module_1 = require("./utils.module");
// const myNumber = 10 * Utils.PI;
var myNumber = 10 * utils_module_1.PI;
// const myUser: Utils.User = { id: Utils.generateId().toString(), name: "Maria" };
var myUser = { id: (0, utils_module_1.generateId)().toString(), name: "Maria" };
console.log({ myNumber: myNumber, myUser: myUser });
