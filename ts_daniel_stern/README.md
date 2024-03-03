# <img width="38" height="38" src="https://img.icons8.com/color/38/typescript.png" alt="typescript"/> TypeScript - Udemy - Daniel Stern

## Why learn TypeScript?

- prevent fiendish bugs (like when using JavaScript) using the compiler

- powerful features: classes and modules

- integrate with Grunt (the JavaScript task runner) or Gulp (automate and enhace your workflow, TypeScript compiler)

## Is TypeScript right for you or your projects?

- Works well for larger projects

- Good for long term maintenance

---

## <img width="38" height="38" src="https://img.icons8.com/color/38/typescript.png" alt="typescript"/> Modules

### 1 - Getting started

1. Install **Node.js** and **npm**

2. Install **typescript**: `npm install -g typescript`

3. Inside the **typescript** folder, compile to JavaScript with: `tsc hello-world.ts`

[https://www.typescriptlang.org/docs/](https://www.typescriptlang.org/docs/)

### 2 - Basic TypeScript

Types are important during compile-time.

- Basic types: Boolean, Number, String, Array, Enum, Any and Void. -> [file `types.ts`](https://github.com/eugenia1984/typescript/tree/main/ts_daniel_stern/typescript/types.ts)

- Interfaces: a blueprint for an object -> [file `types.ts`](https://github.com/eugenia1984/typescript/tree/main/ts_daniel_stern/typescript/types.ts)

- Classes (inheritance): supercharged object blueprint -> [file `class.ts`](https://github.com/eugenia1984/typescript/tree/main/ts_daniel_stern/typescript/class.ts)

- Modules: to share code between files -> [file `timesTwo.ts`](https://github.com/eugenia1984/typescript/tree/main/ts_daniel_stern/typescript/timesTwo.ts), [file `util.ts`]-> [file `class.ts`](https://github.com/eugenia1984/typescript/tree/main/ts_daniel_stern/typescript/util.ts) and [file `util.js`](https://github.com/eugenia1984/typescript/tree/main/ts_daniel_stern/typescript/util.js). Command: `tsc util.ts timesTwo.ts --out util.js`

- Functions

- Generics

- Common errors

- Mixins

### 3 - TypeScript Implementations

**Grunt** has a lots of pluggins that automate daily tasks.

### 4 - Building an App with TypeScript

---
