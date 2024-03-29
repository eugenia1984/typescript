# <img width="48" height="48" src="https://img.icons8.com/color/48/typescript.png" alt="typescript"/> Developing Web application using TypeScript - Udemy - Proton Expert Systems & Solutions

##  <img width="48" height="48" src="https://img.icons8.com/color/48/typescript.png" alt="typescript"/>  What is TS?

- TS is an object-oriented compiler language

- It's a superset of JavaScript and is compiled into JavaScript

- In other words, TypeScript is JavaScript plus some additional features. It's both a language and a set of tools

---
---

##  <img width="48" height="48" src="https://img.icons8.com/color/48/typescript.png" alt="typescript"/>  Features of TS

- TS is just JavaScript; it starts with JavaScript and ends with JavaScript

- It adopts the basic building blocks of your program for JavaScript. All TS code is converted into JS equivalent execution.

- It supports other Js libraries

- TS-generated JS can reuse existing JS Frameworks, tools and libraries.

- Any .js file can be renamed to .ts and compiled with the TS files.

- It's portable across browsers, devices and operating systems

- It can run on any JS environment and does not need a reliable VM or a specific runtime environment to execute.

---
---

##  <img width="48" height="48" src="https://img.icons8.com/color/48/typescript.png" alt="typescript"/>  TS and ECMAScript

```
ECMASC + ECMASC + Additional = TS
RITP5     ROTP6   Features
```

---
---

##  <img width="48" height="48" src="https://img.icons8.com/color/48/typescript.png" alt="typescript"/>  Why use TS?

TS is superior to its other replicas, like CoffeScript and Dart programming languages, because TS is advanced JS.

The benefits are:

- compilation

- strong static typing

- TS supports type definitions for existing JS libraries.

- It supports OOPs concepts like: classes, interfaces, inheritance, etc.

---
---

##  <img width="48" height="48" src="https://img.icons8.com/color/48/typescript.png" alt="typescript"/>  Pre requisites:

- Must have [Node.js](https://nodejs.org/en) and npm installed. To verify Nodejs on the system: `node -v`

- Must have TypeScript, if not, you can install with: `npm install -g typescript`

---
---

##  <img width="48" height="48" src="https://img.icons8.com/color/48/typescript.png" alt="typescript"/>  TYPESCRIPT TYPES

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
---

##  <img width="48" height="48" src="https://img.icons8.com/color/48/typescript.png" alt="typescript"/>  INTERFACE

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

##  <img width="48" height="48" src="https://img.icons8.com/color/48/typescript.png" alt="typescript"/>  CLASSES

- **class** is the keyword.

- It contains...

... **attributes**: variable that represent a data related to an object

... **constructor**: allocating memory for objects of the class. It's a special function of a class that is responsible for initializing the variable of the class.

... **capabilities**(**methods**): actions that an object can perform.


- the **this** keyword refers to the current instance of a class, where the parameter name and class field name are the same.

```
class ClassName {

}
```

### Class inheritance

- It's the ability of a program to create new classes from existing classes. A class that is extended to create a new class is called a parent/ super class.

- Newly created classes are called child/sub classes.

- A class inherits from another class using teh keyword **extends**.

- A child class inherits all properties and methods from its parent class, except private members and constructors.

### Class inheritance types

1. **single**: each class can extend from at most one parent class.

2. **multiple**: a class can inherit from multiple classes. TS doesn't support multiple inheritance.

3. **multi level**: 3 or more levels.

### Class inheritance and method overriding

It's a mechanism by which the child class redefines the superclass's method.

It's use **super()** to invoque the parent method or constructor.

### Access modifiers

- TS supports 4 types:

- **public**

- **private**

- **protected**

- **read-only**

Access modifiers are used to encapsulate a class and its member variables.

### Static property

ES6 includes static members just like TS. Static members of a class are accessed using the class name and dot notation without creating an object.

Static members can be defined with the **static** keyword.

---

##  <img width="48" height="48" src="https://img.icons8.com/color/48/typescript.png" alt="typescript"/>  GENERIC AND DECORATORS

- Static typed languages must include generics because they enable programmers to send types as arguments to another type, function or other structure.


- The type variable (abbreviated **T**) is a specific type of variable used by generics to represent types.

- Generic types are...

... class

... interface

-> See files: `generic_class.ts` and `generic_interface.ts`

---

##  <img width="48" height="48" src="https://img.icons8.com/color/48/typescript.png" alt="typescript"/>  DECORATORS


- Class, method, accessor, property and parameter declarations can all be given a specific treatment applying a decorator

- Decorators are just functions with the **@expression** symbol prefix that will be invoked at runtime with details about the decorated declaration

- Expression must evaluate to a function

### Class Decorator

- A class decorator is applied to the constructor of the class. It's defined before the class declaration.

- It can observe, modify, or replace a class definition.

- If the class decorator return a value, it will replace the class declaration with the given constructor function.


####  Accessor Decorator 

- It's defined just before an accessor declaration

- It can be applied to the property descriptor for the accessor

- Observing, modifying or replacing an accessor's definitions is used.

#### Property Decorator 

- It's defined just before a property declaration

- It's similar to the method of decorators

- The only difference between property and method decorators is that they do not accept property descriptors as an argument and do not return anything


-> See file `class_decorator.ts`, `stack.ts` and `decorator.ts`

---
---

##  <img width="48" height="48" src="https://img.icons8.com/color/48/typescript.png" alt="typescript"/>  MODULES AND NAMESPACES

- A local scope can be established in teh file using modules.

- None of the defined variables, classes, functions, etc., in a module are accessible from outside the module.

- The keywords **export** and **import** can be used to construct modules and to utilized modules in other modules.

- Modules in TS are defined as files with a top-level export or import.

- EXPORT MODULES: using the prefix **export**.

- IMPORT MODULES: using **import**: `import { export_name } from "file_path_without_extension"`. Also can be import as **variable**: `impost * as EMp from "./Employee"`

### Compiling a TS modules

- We must se the TS compiler to build the modules in order to obtain the JS files for the TS modules.

- A module's compilation is dependent on the environment you are aiming for. The module target option used during compilation is used by the TS compiler to build the JS code.

- To compile a TS module and produce JS code, use the following command: `--module <target> <file path>`

-> See the files: `file1.ts`, `file2.ts` nad the folder `lesson_5`

###  <img width="48" height="48" src="https://img.icons8.com/color/48/typescript.png" alt="typescript"/>  NAMESPACES

- For the logical grouping of functionalities, the namespace is utilized. Interfaces, classes, functions, and variables can all be found in a namespace to provide a single or a collection of connected functionality.

- By utilizing the namespace keyword and the namespace name, a namespace may be constructed. The curly brackets may be used to defined any interface, classes, etc.

### Namespace vs Modules

| Namespace | Modules |
| --------- | ------- |
| To expose namespace components, you must use both the namespace and export keywords. | Use the export keyword to reveal module features. |
| Use local scoping to logically organise functions. | Used to separate the code into individual files and avoid contaminating the global scope. |
| It must be used with triple slash reference syntax in order to be used, eg: ` ///<reference path="path_to_namespace_file">` | It must imported first before being used elsewhere. |
| Use the `outFile` command to compile. | Use the `--module` command to compile. |
| To be accessed outside of the namespace, it must export functions and classes. | A module's exports are all accessible from outside the module. |
| Dependencies can't declared in namespaces.  | Declaring dependencies is possible for modules. |
| Module loaders are not required. Use the `<script>` element in the HTML page to include a namespace's js file | Include the module loader API that was chosen at compilation time, such as CommonJS, require.js, etc. |

---
---

##  <img width="48" height="48" src="https://img.icons8.com/color/48/typescript.png" alt="typescript"/>  JSX

- TS is JS for application-scale development, according to its definition.

- The embeddable JSX syntax resembles XML.

- It's intended to be converted into legitimate JS, albeit the semantic of that conversion vary depending on the implementation.

- With the React, JSX gained prominence, however, it has subsequently been used in other context as well.

### Overview

- Formatting of JSX: give the files `tsx` extension, activate the JSX setting

- Three JSX options are included with TS: Preserve, React, React-native

---

##  <img width="48" height="48" src="https://img.icons8.com/color/48/typescript.png" alt="typescript"/>  Practice of 6-1: Setting up JSX Components

### Overview

Setting up JSX with typescript in react 

### Tasks:

The famous frameworks and libraries, like React, AngularJS 1, Backbone, jQuery, etc. are not written in TypeScript so we don’t gain any benefits like auto-completion and type-checking when using them.

On top of this React has this weird extension of JavaScript called JSX, which allows us to embed markup inside our JavaScript…

Steps to Install and run JSX in Typescript react

1. The Solution:

a.  Open Visual Studio Code workspace.

b.  Create a new folder or you can open a new folder from the vs code file menu and then run the below codes in the terminal.

c.   Provide the code given below to Install Typescript and react via npm as shown in the screenshot (TYPESCRIPT JSX is the folder name here).

`npm install typescript react`

d.   Once you execute the above command, all the necessary packages will be created as shown in the screenshot.

e. If you want have the TypeScript’s compiler as global executable (tsc) use: `npm install -g typescript`

## 2. Steps for Developing a Component structure in the TSX file

a.  After entering into the app directory, type the below code to create the react structure, where all the components are created that can be used to build a project.

`npx create-react-app my-app --template typescript`

b. This is it this how the folder structure should be created once you execute the above command.

![image](https://github.com/eugenia1984/typescript/assets/72580574/33998834-48a4-43e9-9c8e-27aeab0e0fa1)

c. Here you can see the components and the file structure that is created by the npx command for the react typescript project with react. In the source folder you can make any changes as you requirement for the project.


![image](https://github.com/eugenia1984/typescript/assets/72580574/35867a7f-71ff-42ba-8a35-1a6c8129498a)

d. Provide `cd my-app` in the terminal to redirect to the created app.

e. Type `npm start` to run the application

##  3. Results

a.  Now you can see the success message in terminal

![image](https://github.com/eugenia1984/typescript/assets/72580574/659b9a0c-101c-4173-bf91-61b4ae908865)

b. Output (my-app) will be displayed in the browser as shown below.

![image](https://github.com/eugenia1984/typescript/assets/72580574/eb84fd34-83af-41ad-84bf-bac2be605b39)

c. You can keep the IDE open with the same file structure or you can also create a new folder structure, for the project.

---
