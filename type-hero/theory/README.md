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

## <img width="48" height="48" src="https://img.icons8.com/color/48/typescript.png" alt="typescript"/>  07 - Index Signatures

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

So wrapping it all up, our type for this API might look like this:

```TypeScript
type Info = {
  count: number;
  currentPage: number;
  pages: number;
};

type FollowerCountByUserResults = {
  [userId: string]: number;
};

type FollowerCountByUser = {
  info: Info;
  results: FollowerCountByUserResults;
};
```

Or, we could always inline everything (this works just fine with index signatures):

```TypeScript
type FollowerCountByUser = {
  info: {
    count: number;
    currentPage: number;
    pages: number;
  };
  results: {
    [userId: string]: number;
  };
};
```

->> See [`challenges/07-index-signatures`](https://github.com/eugenia1984/typescript/blob/main/type-hero/challenges/07-index-signatures.ts) files


---

## <img width="48" height="48" src="https://img.icons8.com/color/48/typescript.png" alt="typescript"/> 08 - Indexes Types

->> See [08-indexes-types](https://github.com/eugenia1984/typescript/blob/main/type-hero/challenges/08-indexes-types.ts) file

---

## <img width="48" height="48" src="https://img.icons8.com/color/48/typescript.png" alt="typescript"/> 09 - The `keyof` operator

### The Problem keyof solves

The keyof operator is used for extracting a union representing the keys (also known as "properties") of a type.

Let's say your audiophile cousin is asking you to digitize her casette tape collection (she's convinced they "sound better" on casette... yawn..). So you make an object where you count up how many albums you have for each artist:

```TypeScript
const casettesByArtist = {
  'Alanis Morissette': 2,
  'Mariah Carey': 8,
  'Nirvana': 3,
  'Oasis': 2,
  'Radiohead': 3,
  'No Doubt': 3,
  'Backstreet Boys': 3,
  'Spice Girls': 2,
  'Green Day': 2,
  'Pearl Jam': 5,
  'Metallica': 5,
  "Guns N' Roses": 2,
  'U2': 3,
  'Aerosmith': 4,
  'R.E.M.': 4,
  'Blur': 3,
  'The Smashing Pumpkins': 5,
  'Britney Spears': 3,
  'Whitney Houston': 3,
};
```

But what if you wanted to extract all these keys as a type?

We could always re-type all of them in a literal union:

```TypeScript
type Artists = 'Alanis Morissette' | 'Mariah Carey' | 'Nirvana'
  | 'Oasis' | 'Radiohead' | 'No Doubt'| 'Backstreet Boys'
  | 'Spice Girls' | 'Green Day' | 'Pearl Jam'| 'Metallica'
  | 'Guns N\' Roses' | 'U2' | 'Aerosmith' | 'R.E.M.' | 'Blur'
  | 'The Smashing Pumpkins' | 'Britney Spears' | 'Whitney Houston'
```

But that's pretty Rough. You certainly would not want to retype all those artist names. What if you forget one? What if you misspell one?

### How To Use keyof

keyof is special TypeScript syntax that you use before any type.

In our case we don't have a type to start working with so we create one with the typeof operator:

```TypeSCript
type CasettesByArtist = typeof casettesByArtist;
```

Then we can use keyof on our new type to get an alias that represents the union of all keys in our casettesByArtist object.

```TypeScript
type Artists = keyof CasettesByArtist;
```

### What keyof returns

The result of keyof is always a union.

Even if there are 0 or 1 objects, it doesn't hurt to think of the result as a union. If there are no elements in the result, the type will be never (which is the empty set in "Set theory" terminology). When there's only one key then the resulting type will be a single primitive or literal type.

->> See [09-keyof-operator](https://github.com/eugenia1984/typescript/blob/main/type-hero/challenges/09-keyof-operator.ts) file

---

## <img width="48" height="48" src="https://img.icons8.com/color/48/typescript.png" alt="typescript"/> 10 - Mapped Object Types

### Why Mapped Object Types Are Useful

In mathematics, a "map" is a function that associates each element in one set with an element. That's where we get this usage of the word in computer science.

Mapped types are one of the most potent and versatile features of TypeScript. They enable you to create new types by transforming the properties of existing types, making your code more robust, flexible, and maintainable. As you further your journey with TypeScript, you're going to find yourself reaching for mapped types pretty often to solve daily-living type (and data) transformation tasks.

### How To Use Mapped Types

It might seem a little strange, but let's start with a mapped type that does nothing. Here's how it looks:

```TypeScript
type MoviesByGenre = {
  action: 'Die Hard';
  comedy: 'Groundhog Day';
  sciFi: 'Blade Runner';
  fantasy: 'The Lord of the Rings: The Fellowship of the Ring';
  drama: 'The Shawshank Redemption';
  horror: 'The Shining';
  romance: 'Titanic';
  animation: 'Toy Story';
  thriller: 'The Silence of the Lambs';
};

type MovieInfoByGenre<T> = {
  [K in keyof T]: T[K];
};

type Example = MovieInfoByGenre<MoviesByGenre>;
```

Let's talk about what this syntax does, piece by piece:

- ```type``` begins a type declaration.

- ```MovieInfoByGenre``` is the name we gave to our type

- ```<T>``` defines generic parameter we named T

- ```= {``` begins our type

- ```[``` starts an index signature

- ```K``` is the name we're giving to the value in this index signature.

```K``` (for "Key") and ```P``` (for "Property") are very common names to use in this particular situation. While it's not often the best choice, you'll see it around (including in TypeScript's own builtin types), so it's worthwhile to just roll with it if you see it. If you can make a more descriptive name, you should.

- ```in``` is a special TypeScript operator for mapping. It tells TypeScript that K represents a single item in a larger set of things defined on the right side of the in operator.

- ```keyof``` T is a union of all the keys of the T object.

- ```: T[K]``` is regular type indexing. The value, K, can here be thought of as a singular property in a sort of loop. We take some individual value of K (which are keys of T) and then index T with that key, thereby producing a value that matches the value in T for that K.
  
- ```;``` it might at first seem strange, but if you take a step back, this is just a property: value line in an object type, so we end it with a semicolon like we normally would with types in TypeScript.

```};``` ends the type declaration.

But, all this stuff, and we end up with a type that's literally identical to what we started with. In the above code, Example and MoviesByGenre are literally the same type to TypeScript because TypeScript is a structural type system. They have all the same properties and values, so to TypeScript they are basically aliases at this point (aliases with extra steps, granted!).

### Resetting all values

So let's do the simplest possible thing to change our Example type. Let's just change one little part of the above:

```TypeSCript
type MovieInfoByGenre<T> = {
- [K in keyof T]: T[K];
+ [K in keyof T]: boolean;
};
```
Can you picture what our Example type would be if we made this change?

It would look like this:

```TypeScript
type Example = {
  action: boolean;
  comedy: boolean;
  sciFi: boolean;
  fantasy: boolean;
  drama: boolean;
  horror: boolean;
  romance: boolean;
  animation: boolean;
  thriller: boolean;
};
```

->> See [10-mapped-object](https://github.com/eugenia1984/typescript/blob/main/type-hero/challenges/10-mapped-object.ts) file

---

## <img width="48" height="48" src="https://img.icons8.com/color/48/typescript.png" alt="typescript"/> 11 - Generic Type Constraints

###  The Problem Generic Type Constraints Solve

Generics are an incredibly powerful tool in TypeScript. In a previous challenge where generic type arguments were introduced, we compared them to function arguments but for types.

Consider the parallel of these two:

```TypeScript
//             v-----v argument identifier
const drive = (carType: CarType) => {
  //                  ^-------^ argument type constraint
  // ....
};

//        v-------v type parameter identifier
type Drive<CarType> = (carType: CarType) => {
  // ....
};
```

Notice that there's no type constraint for the type parameter identifier.

That means that if we make a type like this:

```TypeSCript
type Row<T> = {
  value: T;
  label: string;
  orientation: 'vertical' | 'horizontal';
};
```

A consumer of this type could pass literally anything for Row. All of these would be valid:

```TypeScript
type BooleanRow = Row<boolean>;
type RegexRow = Row<RegExp>;
type RowRowRowStringRow = Row<Row<Row<Row<string>>>>;
type VoidFuncRow = Row<() => void>;
```

But our Row component is likely to not be written in such a way to handle literally anything being passed in as a type. We need to set some static boundaries on what kinds of things are passed in for T to Row.

We need types for our types.

Well. That's kinda what Generic type constraints are: type constraints for your parameterized types!

It's a mouthful, but let's break it down step by step.

### Using Generic Constraints

So, let's say that our component is advanced enough to handle three things:

```TypeScript
string: a row with a string value
number: a row with a numeric value
() => string | number: a row with a lazily evaluated value that can itself be a string or a number
```

Let's make a type alias for our constraints:

```TypeScript
type RowConstraints = string | number | (() => string | number);
```

Note: Function type notation must be parenthesized when used in a union type (otherwise it might be ambiguous).

To tell TypeScript that we only want to allow Row to accept types that fall into one of these categories we specified in RowConstraints we use the extends keyword.

```TypeScript
type Row<T extends RowConstraints> = {
  value: T;
  label: string;
  orientation: 'vertical' | 'horizontal';
};
```

Now, if we try to use our Row generic with anything that doesn't match the above, TypeScript will report an error:

```TypeScript
type StringArrayRow = Row<string[]>;
//
```

->> See [11-generic-type-contraint](https://github.com/eugenia1984/typescript/blob/main/type-hero/challenges/11-generic-type-contraints.ts) files

---   

##  <img width="48" height="48" src="https://img.icons8.com/color/48/typescript.png" alt="typescript"/> 12 - Generic Type Arguments

### Why We Need Generic Type Arguments

If primitive (and literal) types are data, you can think of generics as functions that operate on that data.

And just like functions often need arguments, we need some way to provide inputs to generic types.

### How To Use Generic Arguments

Instead of using parenthesis to pass arguments, with generics we use angled brackets: ```< and >```.

Other than that, there are a lot of similarities between the two concepts.

You can even provide defaults for generic arguments! See the relevant challenge for generic defaults.

There are two separate situations when you'd use this syntax. One is when you're working strictly with types, and another is when you're doing more normal JavaScript-y stuff like with functions and constants.

### Universe 1: strictly in the type system

Just take a look:

```TypeScript
interface Row<T> {
  label: string;
  value: T;
  disabled: boolean;
}
```

Note: It's common (and acceptable) in situations like this where we really don't know anything else about the Generic type parameter to use a single letter like T. But the moment you have multiple arguments (or more context for what this type will be) it's a good idea to use more descriptive names.

What this syntax means is that we have a Row type, and we know it will have a value property, but the specific type of that value property is not known until it's used.

We could store numbers in this Row type. If we did, it'd look like this:

```TypeScript
type NumberRow = Row<number>;
```

Or we could store strings:

```TypeScript
type StringRow = Row<string>;
```
Because TypeScript is a structural type system, Row<string> is exactly equivalent (in every way) to if we had written this:

```TypeScript
type StringRow = {
  label: string;
  value: string;
  disabled: boolean;
};
```

But because we used a generic, we didn't have to type all that other stuff out every time.

### Multiple Generic Arguments

Just like functions can take multiple arguments, so too can Generics.

```TypeScript
type GroceryItem<Name, Price, InStock> = {
  name: Name;
  price: Price;
  inStock: InStock;
};
```

Now you can pass arguments to this type:

```TypeSCript
type AvocadoToast = GroceryItem<'Avocado Toast', 12.99, true>;
```

This is exactly equal to if you had written:

```TypeScript
type AvocadoToast = {
  name: 'Avocado Toast';
  price: 12.99;
  inStock: true;
};
```

Note: you might notice that we're missing types for our type arguments! Right now there's nothing stopping us from sending in wrong values like GroceryItem<number[], boolean, { over: 9000 }>. We'll cover that in a future challenge on generic type constraints.

->> See [12-generic-type-argument](https://github.com/eugenia1984/typescript/blob/main/type-hero/challenges/12-generic-type-arguments.ts) file

---

##  <img width="48" height="48" src="https://img.icons8.com/color/48/typescript.png" alt="typescript"/> 13 - Generic Function Arguments

### Why Functions Need Generics

One of the most common needs a TypeScript developer faces is the need to pass generic type arguments to functions. Then, those functions can use and manipulate those parameters.

In many situations, we don't need functions to be generic. The function might be written in such a way as to only work for one type of data (e.g. string or number). But, other times, we write functions where we want to pass the data type along from input to output.

### Understanding Generic Syntax

In a previous challenge on generic type arguments we saw a Row type that looked like this:

```TypeScript
interface Row<T> {
  label: string;
  value: T;
  disabled: boolean;
}
```

Imagine if you had a function createRow that returns an object that looked like our Row type:

```TypeScript
const createRow = (
  label: string,

  // how do we provide a type for `value`?
  value: unknown,

  disabled = false,
) => ({
  label,
  value,
  disabled,
});
```

Similarly to how we used the < and > for our Row interface, we place the < and > right before the parenthesis that start our function's arguments.

```TypeScript
const createRow = <T,>(label: string, value: T, disabled = false) => ({
  //...
});
```

This is great! Now our value parameter has the right type!

### A Word On A Syntax Quirk

You may see the <T,> syntax out in the wild. There's an unfortunate inconvenience with TypeScript's syntax that this is used to work around. Imagine being a parser and seeing const createRow = <T>. If you don't know what's coming next it could be ambiguous between these two things

```TypeScript
// Thing 1: Start of JSX
const createRow = <T>Some JSX stuff!</T>;

// Thing 2: start of generic function
const createRow = <T>(someArg: T) => {
  /* some function stuff */
}
```

Because of this ambiguity, we need to do something to disambiguate these two situations to the TypeScript compiler. In the early days it was common to use``` <T extends unknown>``` (or ```<T extends any>``` before unknown existed in TypeScript); however, over time people realized there was an easier way: ```<T,>```. Since , is invalid in JSX, but valid in TypeScript when separating multiple arguments, it's appropriate to use this to disambiguate the two situations to the TypeScript compiler.

With that being said, if you see this strange syntax, please note that it is not you, it's just TypeScript being a bit funky. If this is confusing to you, just skip it and come back here and read it again when the day comes that you first see this syntax out in the wild.

->> See [13-generic-function-arguments](https://github.com/eugenia1984/typescript/blob/main/type-hero/challenges/13-generic-function-arguments.ts) file

---
