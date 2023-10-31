# <img width="48" height="48" src="https://img.icons8.com/color/48/typescript.png" alt="typescript"/> TypeScript: tu completa guia y manual de mano - curso de Udemy de Fernando Herrera

- TypeScript es TRANSPILADO al standard de JavaScript para que sea corrido en el NAVEGADOR WEB

---
---

## <img width="48" height="48" src="https://img.icons8.com/color/48/typescript.png" alt="typescript"/>  Instalaciones recomendadas - Curso de TypeScript

1. [Node JS](https://nodejs.org/es/)

2. [VSCode - Visual Studio Code](https://code.visualstudio.com/)

3. [Google Chrome](https://www.google.com.mx/intl/es-419/chrome/?brand=CHBD&gclid=Cj0KCQiAtrnuBRDXARIsABiN-7AAMm13Ae3KDIib46Laxfe6tzD_w4yvDdpq5XsPw1eNlOkZ_0-3x3IaAvLEEALw_wcB&gclsrc=aw.ds)

## <img width="48" height="48" src="https://img.icons8.com/fluency/48/visual-studio-code-2019.png" alt="visual studio code"/> Extensiones de VSCode

[Activitus Bar](https://marketplace.visualstudio.com/items?itemName=Gruntfuggly.activitusbar)

[TypeScript importer](https://marketplace.visualstudio.com/items?itemName=pmneo.tsimporter)

## <img width="48" height="48" src="https://img.icons8.com/color/48/chrome--v1.png" alt="chrome"/> Extensiones de Chrome

[Json Viewer Awesome](https://chrome.google.com/webstore/detail/json-viewer-pro/eifflpmocdbdmepbjaopkkhbfmdgijcc)

### Configuración del Bracket Pair Colorizer 2

[Bracket Pair Colorizer 2](https://marketplace.visualstudio.com/items?itemName=CoenraadS.bracket-pair-colorizer-2)
```
"bracket-pair-colorizer-2.colors": [
    "#fafafa",
    "#9F51B6",
    "#F7C244",
    "#F07850",
    "#9CDD29",
    "#0098FA"
],
```

### <img width="48" height="48" src="https://img.icons8.com/external-bearicons-outline-color-bearicons/48/external-colors-graphic-design-bearicons-outline-color-bearicons.png" alt="colors"/> Tema que estoy usando en VSCode

* [Tokio Night](https://marketplace.visualstudio.com/items?itemName=enkia.tokyo-night)

* [Iconos](https://marketplace.visualstudio.com/items?itemName=PKief.material-icon-theme)

---

## <img width="48" height="48" src="https://img.icons8.com/officel/48/console.png" alt="console"/> ¿ Cómo podemos compilar desde la terminal?

`tsc app.ts`

**tsc** -> para compilar TypeScript de manera global

**app.ts** -> el nombre del archivo a compilar

---

## <img width="48" height="48" src="https://img.icons8.com/plasticine/48/file.png" alt="file"/> Para crear el archivo de configuración de TypeScript

`tsc` si ya tenemos el archivo `tsconfig.json`

---

## <img width="48" height="48" src="https://img.icons8.com/3d-fluency/48/eyes-1.png" alt="eyes"/> Modo watch

Para no tener que estar compilando todo el tiempo, cuando detecta un cambio, vuelve a compilar, se hace con el comando: `tsc --w` ó `tsc --watch`

---
---

## <img width="40" height="40" src="https://img.icons8.com/color/48/clipboard.png" alt="clipboard"/> TEMAS

### 1 - [Tipos básicos](https://github.com/eugenia1984/typescript/tree/main/ts_curso_fernando_herrera/typescript/tipos)

```
1. ¿Qué son los tipos de datos?
2. Una introducción a los diferentes tipos de datos que existen en TypeScript
3. Booleanos
4. Números
5. Strings
6. Tipo Any
7. Arreglos
8. Tuplas
9. Enumeraciones
10. Retorno void
11. Null
12. Undefined
```

**tipo de datos** -> TypeScrpt es un SuperSet, tiene los mismos tipos de datos de JavaScript, y algunos más.

En JavaScript tenemos los **tipos de datos**:

- **primitivos**: String, Number, Boolean, Symbol

- **compuestos**: objetos literales, funciones, clases, arreglos

Y TypeScript agrega: Interfaces, Genericos, Tuplas

[Documentación oficial de tipos](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html)

---

## 2 - [Funciones y objetos](https://github.com/eugenia1984/typescript/tree/main/ts_curso_fernando_herrera/typescript/funciones)

```
1. Declaraciones básicas de funciones
2. Parámetros obligatorios
3. Parámetros opcionales
4. Parámetros por defecto
5. Parámetros REST
6. Tipo de datos "Function"
```

---

## 3- [Objetos y tipos personalizados](https://github.com/eugenia1984/typescript/tree/main/ts_curso_fernando_herrera/typescript/objetos-y-tipos)

```
1. Objetos básicos
2. Crear objetos con tipos específicos
3. Crear métodos dentro de objetos
4. Tipos personalizados
5. Crear variables que soporten varios tipos a la vez.
6. Comprobar el tipo de un objeto.
```
---

## 4 - [Depuracion de errores y el archivo tsconfig.json](https://github.com/eugenia1984/typescript/tree/main/ts_curso_fernando_herrera/typescript/depuracion)

```
1. Aprenderemos el ¿por qué siempre compila a JavaScript?
2. Para que nos puede servir el archivo de configuración de TypeScript
3. Realizaremos depuración de errores directamente a nuestros archivos de TypeScript
4. Removeremos todos los comentarios en nuestro archivo de producción.
5. Restringiremos al compilador que sólo vea ciertos archivos o carpetas
6. Crearemos un archivo final de salida
7. Aprenderemos a cambiar la version de JavaScript de salida
```

[Documentacion de tsconfig](https://www.typescriptlang.org/docs/handbook/tsconfig-json.html)

---

## 5 - [Características de ES6 o JavaScript2015](https://github.com/eugenia1984/typescript/tree/main/ts_curso_fernando_herrera/typescript/ES6)

```
1. Diferencia entre declarar variables con VAR y con LET
2. Uso de constantes
3. Plantillas literales
4. Funciones de flecha
5. Destructuración de objetos
6. Destructuración de Arreglos
7. Nuevo ciclo, el FOR OF
8. Conocer sobre la programación orientada a objetos
9. Clases
```

---

## 6 - [Clases en TypeSCript](https://github.com/eugenia1984/typescript/tree/main/ts_curso_fernando_herrera/typescript/clases)

```
1. Crear clases en TypeScript
2. Constructores
3. Accesibilidad de las propiedades:
-Públicas
-Privadas
-Protegidas
4. Métodos de las clases que pueden ser:
-Públicos
-Privados
-Protegidos
5. Herencia
6. Llamar funciones del padre, desde los hijos
7. Getters 
8. Setters
9. Métodos y propiedades estáticas
10. Clases abstractas
11. Constructores privados.

```

---

## 7 - [Interfaces](https://github.com/eugenia1984/typescript/tree/main/ts_curso_fernando_herrera/typescript/interfaces)

```
1. ¿Por qué es necesario una interfaz?
2. ¿Cómo creamos una interfaz básica?
3. Crear propiedades opcionales
4. Crear métodos
5. Asignar interfaces a las clases
```

---

## 8 - NameSpaces

```
1. Explicación del ¿por qué son necesarios los namespaces?
2. Crear namespaces
3. Multiples namespaces en un mismo proyecto
4. Importar namespaces
5. Problemática que se puede presentar utilizando un namespace.
```

NameSpaces -> cada vez se usa menos en el desarrollo, pero por atrás se usa en los FrameWorks. Venimso trabajando con Funciones anónimas autoinvocadas

-> Ver el directorio `ts-node`

---

## 9 - Generics 

```
1. Uso de los genéricos
2. Funciones genéricas
3. Ejemplos prácticos sobre los genéricos
4. Arreglos genéricos
5. Clases genéricas
```

-> ver el directorio `ts-node / src / generics`

- Extension de VSC **Paste JSON as Code**, se va a un archivo de TS, la paleta de comeandos, buscamos Paste JSON as Code, lo pegamos y tenemos la interfaz

---

## 10 - Decoradores

```
1. ¿Qué son los decoradores?
2. ¿Para qué sirven?
3. Decoradores de clases
4. Decoradores de fabrica
5. Ejemplos prácticos
6. Decoradores anidados
7. Decoradores de métodos
8. Decoradores de propiedades
9. Decoradores de parámetros
```

-> ver el directorio `ts-node / src / decorators`

[Documentacion](https://www.typescriptlang.org/docs/handbook/decorators.html), es una funcion que se utilizar para añadir o expandir funcionalidades a un objeto. Se ven con `@`, Angular lo usa.

---

## 11 - Usando librerias que no están escritas en TypeScript


```
1. Configuración de un proyecto utilizando el package.json y realizar instalaciones con node.
2. Utilizar archivos de definiciones "*.d.ts" o Typings
3. Agregar definiciones de archivos mediante node
```

-> `npm init` para inciializar el proyecto de node

-> ` npm install express` para instalar express

-> `npm i --save-dev @types/express` para agregar el tipadod e TypeScript

---