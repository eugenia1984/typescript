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

##  <img width="48" height="48" src="https://img.icons8.com/color/48/typescript.png" alt="typescript"/> 06 - Literal Types

JavaScript, like most programming languages has a concept of primitive data types. Primitive data types are things like ``string``, ``number`` and ``boolean``.

But TypeScript isn't like most programming languages. It's better. It takes things to the next level by introducing literal data types.

You can think of literal data types as being an infinite set of subsets of their primitive counterparts. For example

#### A Practical Use-Case

Literal types can be used to create a rainbow of possibilities. In this case, we've defined a type RainbowColor that can only have one of the types specified in a union of literal strings.

```TypeScript
type RainbowColor = 'red' | 'orange' | 'yellow' | 'green' | 'blue' | 'indigo' | 'violet';
```

Then, we can use this type in a function to ensure bad values are not passed in:

```TypeScript
function pickColor(color: RainbowColor): void {
  console.log(`I choose the color ${color}!`);
}

// no error: TypeScript is happy!
pickColor('yellow');

// Error: Argument of type 'purple' is not assignable to parameter of type 'RainbowColor'.
pickColor('purple');
// ^?
```

By the way. Did you know that purple's not in the rainbow because there's no "purple" wavelength of light. It's true. Our brains fabricate it for us to make sense of paradoxical visual inputs.

### Literal Types For Returns

But wait! There's A LOT more! Literal types are useful for returns, too. Check out this code:

```TypeScript
type Day = 'Monday' | 'Tuesday' | 'Wednesday' | 'Thursday' | 'Friday' | 'Saturday' | 'Sunday';

const isItPartyTime = (day: Day) => {
  switch (day) {
    case 'Friday':
    case 'Saturday':
    case 'Sunday':
      return 'definitely party time';

    default:
      return 'prolly lay low for now';
  }
};

isItPartyTime('Monday');
// ^?
```

The above example assumes a 4 day workweek since 4 day workweeks are observed to increase employee productivity.

The return type for this function is also a literal type union. Notice that you didn't have to specify the return type anywhere. It just works this way in TypeScript. Nice.

### Why Are Type Literals Even Necessary?

If you're thinking to yourself:

Why are type literals even necessary?  Lots of languages don't have anything like this and they seem to get along just fine with primitive types like string and number and boolean.

The TLDR; is: once you pair type unions with literals, you can start discriminating inputs based on one particular literal instance of a type versus another, TypeScript suddenly becomes capable of doing some pretty amazing static analysis on your code that you could never do if all you had were primitive types. If that's unpalatable to you, there's always COBOL. Try that out instead maybe?

->> See [`challenges/06-literal-types.ts`](https://github.com/eugenia1984/typescript/blob/main/type-hero/challenges/06-literal-types.ts) file

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

##  07 - Index Signatures

### When Index Signatures Save The Day

It's common in any language to make general purpose mappings of one type to another type.

Look at this theoretical API response from your company. This is a /followerCountByUser endpoint and we pass in some user we're looking

```https://yourcompany.com/api/v1/followerCountByUser```

```JSON
{
  "info": {
    "count": 9001,
    "currentPage": 1,
    "pages": 22
  },
  "results": {
    "user_ddb04d2e-21ff-4c68-9bdc-135c16c8e74a": 0,
    "user_1e118b25-c0b9-4bfc-8d04-901ad8a2eb20": 3,
    "user_7c56283c-6a5e-4d79-bdd0-9c6a3cafd2c4": 15,
    "user_2eac2f5e-4f11-4d36-84b5-9d273816d6f6": 7,
    "user_4b88b4a3-8d42-4fc9-9f73-8db296d9b03d": 88,
    "user_af836d5e-16a2-452d-bec4-694d6cd8e49f": 92,
    "user_610c236f-b3bb-45e9-a09b-1d7e362c7fbb": 14,
    "user_7a8e29f0-d7b0-4b75-9ad2-c8a145073eab": 6,
    "user_eaa914df-4650-4c3b-9a04-723b5a63f297": 764,
    "user_3199b7c6-7a8d-47eb-ae94-4e3457ad7760": 32,
    // ... for many more rows in this page
  }
}
```

#### How would you write a type for your company's endpoint that returned data like this?

In the real world you're going to have other things going on in types that might distract you. But don't get distracted by the pagination info. Let's zoom in on the "results" object.

results seems to be some kind of mapping of user ids to a follower count. It's an object where the keys are (more or less) random strings and the values are all numbers.

This turns out to be exactly the scenario for TypeScript index signatures!

#### How To Use Index Signatures

In our case, here's how it looks:

```TypeScript
type Results = {
  [userId: string]: number;
};
```

Let's really break this down piece by piece:

- type starts a type declaration (we could also have used interface here).

- Results is the name we're giving to this type.

- ``= `` and ``{`` opens a new object type declaration.
  
- ``[`` is the TypeScript syntax that says "hey, we're going to start defining a property name now".

- ``userId`` is completely arbitrary. It's just a name that we picked. It has no impact on the resulting type.

- ``:`` string this part indicates the type associated with this property*.

- ``]`` ends the property name declaration.

- ``:`` number specifies that the type of values for this key are number.

- ``}`` signals the end of the object type declaration.

* By the way: a massively misunderstood fact about JavaScript has to do with object keys. JavaScript object keys can only be strings or symbols. THAT'S IT. period. No other data types are possible to store as object keys.

->> See [`challenges/07-index-signatures`](https://github.com/eugenia1984/typescript/blob/main/type-hero/challenges/07-index-signatures.ts) files
