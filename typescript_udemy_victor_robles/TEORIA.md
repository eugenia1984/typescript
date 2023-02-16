# :star: TypeScript

- TS es JS escalable. Es un superset de JavaScript que añade un tipado fuerte a JS. El código se **trabapila** a JavaScript.

---

## Instalación

1. Debemos tener instalado **Node.js**

2. Abriendo la terminal:

`node -v` para ver la versión de Node.js

`npm -v` para ver la versión de Node Package Manager

3. Instalo TypeScript:

`npm install -g typescript`

`tsc -v` para corroborar que me de la versión, entonces lo instalé bien.

4. Creo mi archivo index.html y el main.ts. Luego en consola `tsc -init` y me crea el **tsconfig.json**.

5. Para compilar: `tsc main.ts` y veo que tengo un nuevo archivo **main.js**, es decir me compilo de TS a JavaScript. De este modo, ante cada cambio, debería volver a `tsc main.ts` para transpilar. Sino la alternativa es tener el modo **watch**: `tsc main.ts -w` y voy a ver en consola:

```
Starting compilation in watch mode...
Found 0 errors. Watching for file changes.
```

6. Si ahora agrego un nuevo archivo y quiero que se transpilen ambos, debo ingreaar: `tsc *.ts -w` o sino `tsc -w` ó `tsc -p ./ -w` (asi me lo toma en todos los archivos este donde este el directorio)

---

## Configurando los archivos con los directorios de entrada y salida

En el proyecto, me creo la carpeta **scripts**, ahi van a ir mis archivos .js luego de ser traspilados.

En **tsconfig.json** agrego:
`"outDir": "./scripts",`

Y también agrego la carpeta **src** y en \*\*tsconfig.json agrego::
`"rootDir": "./src",`

Tengo ahora que llevar mis archivos .js a scripts y mis archivos .ts a src, sino veo error.

---

## Tipo de datos básicos

- **String**:

```TypeScript
let texto:string = "Hola";
```

- **Number**:

```TypeScript
let numero: number = 10;
```

- **Boolean**:

```TypeScript
let esVerdadero: boolean = true;
```

- **Comodín**:

```TypeScript
let comodin: any = "Es un String";
comodin = true; // lo paso a boolean
```

-> Es recomendable usar el tipo de dato y respetarlo, no usar any.

---

## Null y Undefined

Siempre que tenga en **tsconfig.json** el modo estricto activado NO lo puedo hacer, pero si lo paso a **false**, entonces a una variable de tipo **String** de puedo asignar: **null** ó **undefined**.

---

## Tipo Unknown

Es parecido a any, pero con la diferencia de que va a tener como **typeof** el valor que le asigne

---

## Unión de tipos

```TypeScript
let contacto: string | number = "euge@euge.com"; // puede ser tanto String como Number
```

---

## Arrays

```TypeScript
let personas: string[] = ["Ana", "Maria", "Juan"];
```

-> Tengo que aclarar el tipo de dato que guarda el array

---

## Tuplas

Es un array ya con la dimensión definida.

```TypeScript
let pelicula: [string, boolean, number] = ["Barman Begins", true, 1990];
```

---

## Enum

Enumeración de datos, similar a un objeto, no puedo indicarle el tipo de dato.

Guarda una información que es constante, no cambia.

```TypeScript
enum DatosPersonales {
  nombre = "Maria ",
  dni = 12345678,
  direccion = "Calle 1 123",
  ciudad = "Buenos Aires"
};
```

---

## Castear

Para convertir un tipo de dato a otro. Debo indicar entre `<>`

```TypeScript
let texto_desconocido: any = "Esto viene de una petición AJAX";
let frase_final: string = <string>texto_desconocido;
```

---

## :star: Funciones

```TypeScript
function saludo(nombre: string): string { // : string luego de los () me indica que retorna String
  return `Un saludo para ${ nombre }`;
}

function mostrarFecha(): void { // Con VOID indico que no retorna
  console.log("20 - 07 -2023");
}

function finApp(): never { // Con NEVER indico que FINALIZA la ejecución
  throw new Error("La aplicación se ha cerrado...");
}

// Parámetros en funciones
function mostrarPais(pais: string, continente?: string): string { // ? indica que ese parametro es opcional
  let resultado: string = "Faltan datos";
  if (pais && continente) {
    resultado = pais + " " + continente;
  }
  return resultado;
}
// Si ejecuto aca: finApp() no se ejecutan las funciones que siguen
console.log(saludo("todos"));
mostrarFecha();
console.log(mostrarPais("España", "Europa"));
console.log(mostrarPais("Italia"));
```

---

Video 76
