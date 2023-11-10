# Best practices & advanced TypeScript tips for React devs

## <img width="40" height="40" src="https://img.icons8.com/flat-round/40/question-mark.png" alt="question mark"/> What to learn?

- How to get the most out of TypeScript when writing React applications

- Configure TypeScript in an even stricter mode

- Validate data in a TypeScript friendly way at the application boundary

- Use better constructs then casting to inform TypeScript about the types used

---

## <img width="40" height="40" src="https://img.icons8.com/color/48/overview-pages-3.png" alt="check list"/> Pre requisitos

- <img width="36" height="36" src="https://img.icons8.com/fluency/36/node-js.png" alt="node-js"/> Node.js

- <img width="36" height="36" src="https://img.icons8.com/color/36/npm.png" alt="npm"/> npm

- <img width="36" height="36" src="https://img.icons8.com/color/36/git.png" alt="git"/> git

---

## Tecnologías

- Bootstrap

- Next

- React, react-dom y react-intl

- SWR

- zod

- ESLint

- Typescript

---

## Ver en local

Para ver el proyecto en local: `http://localhost:3000` en consola: `npm run dev`

---

## Notas

### Compiling the code

- Quite often TypeScript code is not type checked during development

-Create React App use **Babel**

-Vite can use Babel or SWC

-Next.js uses **SWC**, it's a fast TypeScript compiler to ES6

### Add at package.json, at scripts:

```
"compile": "tsc --noEmit",
"compile:watch": "tsc --noEmit --watch",
```

To check TypeScript at developing time, and be able to see errors

**tsc** -> typescript compiler

**--watch** -> to be constant checking

### Components and TypeScript

- React components can be written in different ways

-Named functions or arrow functions

-Just like with ECMAScript

- Create a type to describe the component Props

-Either an interface or a type alias

- Annotate the result as a valid React type

-Or let TypeScript infer the resulting type

- Typing with an arrow function is often easier with `React.FC<TProp>`

-But doesn’t work well with generic components

---

## Prácticas

1. **Converting JavaScript to TypeScript**

Si es un componente en vez de `.ts` se debe poner `.tsx`, sino marca errores en las etiquetas de JSX(HTML)

Si el componente tiene props se tipan en una interface o con type.

Si no uso `FC`, sería asi: `export function Alert({ messageId, variant }: AlertProps) {}`.

Pero se puede usar: `const Alert: FC<AlertProps> = ({ messageId, variant }) => {}`, **FC** es Functional Component y si ahora tiene `{children}` hay que usarlos en las props como `ReactElement` o `ReactNode`

2. **Mutually exclusive props**

- ometimes not all combinations of props are allowed

-Two props might be mutually exclusive

-You must pass one of them but not both

- Use an or between multiple prop types

-With an optional “never” to prevent illegal combinations

```
type Props = (
  | {
      message: string;
      messageId?: never;
    }
  | {
      message?: never;
      messageId: string;
    }
) & {
  variant?: Variant;
}
```

3. **More Strict Features**

There are many more strict settings not enabled by “strict”

```
- allowUnreachableCode
- allowUnusedLabels
- exactOptionalPropertyTypes
- noFallthroughCasesInSwitch
- noImplicitOverride
- noImplicitReturns
- noPropertyAccessFromIndexSignature
- noUncheckedIndexedAccess
- noUnusedLocals
- noUnusedParameters
```

En **tsconfig.json**:

`“noUncheckedIndexedAccess” : true`

4. **Validating Data**

- The type definitions are used at compile time

- They might not match the runtime behavior

- Specially when doing AJAX requests or reading JSON files

-> Usamos un **Schema** y **zud**

5. **Inferring TypeScript types**

- In many cases TypeScript can infer types from existing objects

-Not just the object shape but also valid keys

- Use the “extends” keyword to limit a generic type argument

-One generic argument can be used to infer a second etc.

```TypeScript
function getConfigItem<
TSection extends keyof typeof config,
TItem extends keyof typeof config[TSection]
>(section: TSection, item: TItem) {
  const config: any = {
    user: {
      firstName: 'John',
      birthDate: new Date(1990, 6, 10),
    },
    address: {
      street: 'Main St',
      houseNumber: 123,
      city: 'New York',
    },
  };

  return config[section][item]
}
```


6. **Generic React prop types**

- React component prop types can also be generic

-To ensure that various props have matching type definitions

- The generic type can be specified when the component is rendered

-Or will automatically inferred if not

- Very powerful to create reusable, flexible but fully typed components


7. **Deriving component prop types**

- **Infer a component Prop type**

-Using ``React.ComponentProps<typeof Component>``

- ** No need to publicly export** all those prop definitions

-Just in case they are needed

- Very useful when you want to export the **nested component props**

-Use type mappings to modify the type as needed

8.

9.

10.

11.

12.

---

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
