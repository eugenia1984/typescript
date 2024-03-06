# <img width="38" height="38" src="https://img.icons8.com/color/38/typescript.png" alt="typescript"/> Developing Web application using TypeScript - Udemy - Proton Expert Systems & Solutions

## What is TS?

- TS is an object-oriented compiler language

- It's a superset of JavaScript and is compiled into JavaScript

- In other words, TypeScript is JavaScript plus some additional features. It's both a language and a set of tools

---

## Features of TS

- TS is just JavaScript; it starts with JavaScript and ends with JavaScript

- It adopts the basic building blocks of your program for JavaScript. All TS code is converted into JS equivalent execution.

- It supports other Js libraries

- TS-generated JS can reuse existing JS Frameworks, tools and libraries.

- Any .js file can be renamed to .ts and compiled with the TS files.

- It's portable across browsers, devices and operating systems

- It can run on any JS environment and does not need a reliable VM or a specific runtime environment to execute.

---

## TS and ECMAScript

```
ECMASC + ECMASC + Additional = TS
RITP5     ROTP6   Features
```

---

## Why use TS?

TS is superior to its other replicas, like CoffeScript and Dart programming languages, because TS is advanced JS.

The benefits are:

- compilation

- strong static typing

- TS supports type definitions for existing JS libraries.

- It supports OOPs concepts like: classes, interfaces, inheritance, etc.

---

## Pre requisites:

- Must have [Node.js](https://nodejs.org/en) and npm installed. To verify Nodejs on the system: `node -v`

- Must have TypeScript, if not, you can install with: `npm install -g typescript`

---

## TYPESCRIPT TYPES

- Different types of values are supported by the TS language.

- It offers JS data types so that it can became a strongly types programming language

- Data type are an optional Type System that TS offers. The TypeScript data type an be categorized as follows:

`static - generic - decorator`

- **static**: of two types...

...**built-in / primitive** like: number, void (the return type for functions that don't return any kind of value), string, null (a variable with an unknown value) and boolean (true or false)

...**user defined data type** like: array (a group of elements), class (serve as a model for building objects and are used to build reusable components), touple (contain two sets of values of various data kind), enum, interface (a structure that serves as a contract for uor application), functions (parameters: optional, default, rest)

- **generic**: is used to design components that can function with a range of types. T it's used to represent a generic.

- **decorator**: an accessor, method, property and parameter can all have decorators attached to them. It's a specific sort of data. Use the "@"

- **type assertion**: is used to declare a variable's type and instruct the compiler not to infer it.

- **type assertion using <>**

---

## INTERFACE

- Contain only method and field declarations, not implementations

- You can't build anything with this. Classes inherit from them, and styles that implement interfaces define all interface members.

- Interfaces disappear from JS files when the TS compilers them to JS. So, it should only be useful during the development stage.

### Declaration

- **interface** is a keyword that is used to declare TS interface.

- The interface body contains **variables** and **method** declarations.

```
interface interface_name {
  variables declaration
  methods declaration
}
```

### Uses

- validate the specific structure of the property

- the object passed as a parameter

- the object return from the function

### Inheritance

- TS allows interfaces to be inherited by zero or more base types (class or interface).

```
child_interface extends parent_interface {

}
```

### Optional property

- Are not required

- It will use '?'

---

## CLASSES

- **class** is the keyword.

- It contains...

... **attributes**: variable that represent a data related to an object

... **constructor**: allocating memory for objects of the class.

... **capabilities**(**methods**): actions that an object can perform.

```
class ClassName {

}
```