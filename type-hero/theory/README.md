# <img width="48" height="48" src="https://img.icons8.com/color/48/typescript.png" alt="typescript"/>  Theory

## <img width="48" height="48" src="https://img.icons8.com/color/48/typescript.png" alt="typescript"/> What you will find?

1. Primitives

->> See [`challenges/primitives.ts`](https://github.com/eugenia1984/typescript/blob/main/type-hero/challenges/primitives.ts) file

---

## <img width="48" height="48" src="https://img.icons8.com/color/48/typescript.png" alt="typescript"/> 01 - Hello world

- Assertions

->> See [`challenges/01-hello-world.ts`](https://github.com/eugenia1984/typescript/blob/main/type-hero/challenges/01-hello-world.ts) file

---

##  <img width="48" height="48" src="https://img.icons8.com/color/48/typescript.png" alt="typescript"/> 02- Type Unions

Unions are defined using a single "pipe" character: | separating two types or type aliases.

Let's take a look:

```TypeScript
type Meters = number;
type Miles = number;

type Distance = Meters | Miles;
```

### Properties of Unions

Unions are a very deep topic, actually. The three things you need to know right now are:

- **unions are unordered**:  if you implement hacks to try to depend on the order your tests will break across different TypeScript versions

- **the items in a union are unique**: so doing ``1 | 1 | 2 | 3`` is the same as ``1 | 2 | 3``

- **the never type is an empty union**: we'll learn more about never later on

->> See [`challenges/02-type-unions.ts`](https://github.com/eugenia1984/typescript/blob/main/type-hero/challenges/02-type-unions.ts) file.

---

## <img width="48" height="48" src="https://img.icons8.com/color/48/typescript.png" alt="typescript"/> 03- Default Generic Arguments

### Why Generic Arguments Need Defaults

Technically speaking, no program absolutely requires default arguments. It's a convenience feature for the humans writing programs.

Sometimes you have a value in mind for an argument and you don't want to force users of your library to constantly provide the same value over and over again. That's the situation where default arguments come in handy.

### How To Create Default Type Arguments

- First: A Refresher On Function Defaults

Let's take the case of a run-of-the-mill logging function. 

The logger always needs a message to log, but log level might be something you want to be optional:

```TypeScript
type LogLevel = 'debug' | 'info' | 'notice' | 'warning' | 'error' | 'critical';

const log = (message: string, level: LogLevel = 'info') => {
  // application logic
};

log('this has an explicit debug log level', 'debug');
log('this has an implicit info debug level');
```

You can do exactly this kind of thing for generic types! This is yet another parallel between functions and generic types!

- Default Generic Arguments

```TypeScript
type Log<Message, Level = 'info'> = {
  message: Message;
  level: Level;
};

type ExplicitDebugLog = Log<'explicit debug', 'debug'>;
type ImplicitInfo = Log<'implicit info'>;
```

Doesn't that look super similar!? A lot of the same rules apply in types that apply to function argument defaults. For example, you can't have a required argument following a default argument.

One notable exception is that there's no TypeScript value you can pass that will work like undefined does for JavaScript default arguments:

```TypeScript
const greet = (name = 'Stranger') => {
  console.log(`Hello ${name}!`);
};

greet(); // Hello Stranger!
greet(undefined); // Hello Stranger!
greet('Mr. Monkey'); // Hello Mr. Monkey!
```

In TypeScript, even if you provide ``never`` or ``unknown`` or ``any``, the value will be inserted instead of the default.

->> See [`challenges/03-default-generic-arguments.ts`](https://github.com/eugenia1984/typescript/blob/main/type-hero/challenges/03-default-generic-arguments.ts) file

---

## <img width="48" height="48" src="https://img.icons8.com/color/48/typescript.png" alt="typescript"/> 04 - Type Aliases

### How To Create Type Aliases?

To create a new type alias you simply use the ``type`` TypeScript keyword followed by a space, then the name of your type (usually beginning with a capital letter), another space, an equals sign, a final space and then the stuff you want to alias.

```TypeScript
type MyAlias = number;
```

It's most common (but not mandatory) to use a semicolon to end a type declaration.

Don't worry if this TypeScript feature seems underwhelming. It's not that useful on its own, but rather it becomes very powerful when you pair it with other concepts (like type unions, literal types, intersections, and more).

### p.s. Don't Overuse Aliases

One little tip: be careful not to over use type aliases. A very common mistake beginners make is to create aliases for arrays of things:

```TypeScript
export interface Row {
  // imagine some properties here
}

export type Rows = Row[];
That might seem nice because you can just import Rows and use it somewhere in your app where you have an array of Rows.
```

But, ask yourself:

can I just import Row and specify ```Row[]``` when needed?

If the answer is yes, then you should probably not make an alias for Rows. This is beneficial because you're probably going to want to work with the Row type anyway in the same file. It's also a bit easier to read and understand.

->> See [`challenges/04-types-aliases.ts`](https://github.com/eugenia1984/typescript/blob/main/type-hero/challenges/04-type-aliases.ts) file

---

## <img width="48" height="48" src="https://img.icons8.com/color/48/typescript.png" alt="typescript"/> 05 - The `typeof` Operator

| - | JavaScript world	| types world |
| - | ----------------- | ----------- |
| variables	| const, let, function arguments |	type aliases, default generic arguments |
| operations	|for loops, while loops, recursion, higher-order functions |	recursion, higher-order types |
| runtime artifacts	 | ✅ |	❌ |
| time of error	| runtime	| compile time |
| constructs	| statements, expressions |	expressions |

Perhaps you see a problem this divide might cause. What happens if you have information in JavaScript that you want to bring over to TypeScript?

```
raw data
|              conversion
|              |            types
|              |            |
v              v            v
JavaScript ==> `typeof` ==> TypeScript
```

### How to use typeof

#### typeof in JavaScript

You might be familiar with typeof as a JavaScript operator. It returns a string indicating the type of a JavaScript value.

```JavaScript
console.log(typeof "Euler's Number");
// -> logs the string `'string'`

console.log(typeof 2.7182);
// -> logs the string `'number'`
```

But that's JavaScript. The typeof actually also exists in TypeScript!

#### typeof in TypeScript

What if we wanted to use some of our data as a type in TypeScript?

```TypeScript
const name = "Euler's Number";
const value = 2.7182;

// we can use `typeof` for type aliases
type Value = typeof value;

interface FamousNumbers {
  // or we can use it inline
  label: typeof name;
  value: Value;
}

const count = 42;
type Count = typeof count;
```

#### typeof Is Most Useful For Complex Types

typeof is a TypeScript keyword that you put before a JavaScript identifier like a variable name. Let's say you have this function in your codebase:

```TypeScript
const createPoint = (x: number, y: number) => ({ x, y });
```

You can use typeof to extract the type of this JavaScript function and bring it into the realm of TypeScript types:

```
//                        JavaScript stuff
//                        |
//                        v----------
type CreatePoint = typeof createPoint;
//^----------------------
//|
//|TypeScript stuff
```

->> See [`challenges/05-type-of-operator.ts`](https://github.com/eugenia1984/typescript/blob/main/type-hero/challenges/05-type-of-operator.ts) file

---

## <img width="48" height="48" src="https://img.icons8.com/color/48/typescript.png" alt="typescript"/> Primitives

### What Do Primitive Types Look Like?

It's a bit confusing at first, but primitive types are defined with lowercase letters.

Here are some of the basic types:

- **number**: since JavaScript only has one real number type (IEEE-754 64-bit floating point numbers), so too does TypeScript then not define types like short and long or types like uint32 or uint16 like you might be used to in other languages. Instead we just use number for everything.

- **string**: a variable length set of characters (UTF-16).

- **boolean**: Don't let this next sentence keep you up at night if it sounds strange, but just keep in the back of your mind that boolean isn't actually a primitive type deep down in TypeScript internals. It's a little different from string or number since it is just an alias for the union of true and false. It doesn't widen like number and string do, and thus is slightly inconsistent. If that didn't make sense to you right now don't worry. This problem almost never surfaces in a way that's problematic so you're clear to just consider it a primitive type. Also, the way TypeScript handles boolean is actually the more correct way to model things from a "Set theory" standpoint.

- **null**: this is technically really a "literal type", but it refers to the type of the null value in JavaScript. Since null is special, it gets its own type.

- **undefined**: same as with null. This is a specific JavaScript value and it has a corresponding TypeScript type.
Then we've got some more advanced ones that you don't need to worry about quite yet. But here they are as a teaser:

```
symbol
bigint
object
never
unknown
any
```

And while we're in the weeds for a moment, you should be aware that capitalized variants of these things do actually exist: Number, String, Boolean, Symbol, Object. But these refer to something quite different (i.e. JavaScript global objects) and should virtually never be used as types.

->> See [`challenges/primitive`](https://github.com/eugenia1984/typescript/blob/main/type-hero/challenges/primitives.ts) files

---
