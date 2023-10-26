# ¿ Es posible la depuracion del codigo de TypeScript?

En el archivo `tsconfig.json`:

```
"sourceMap": true,    /* Generates corresponding '.map' file */
```

Se crea un nuevo archivo `.map`, debajo s epuede parametrizar, y de esta moda en el navegador web marca los errores de los archivos de `.ts` en vez de en el de `.js`

Y también se ve en el Source, que es el source map en el inspector del navegador. Inclusive se pueden poner los breakpoints (salvo en cosas de Ts que no se puedan traducir a JS, como los types por ejemplo).

---

## Remover los comentarios de los archivos

No quiero que los comentarios de los archivos de `.js` se transpilen al archivo `.js`.

En el `tsconfig.json`:

```
"removeComments": true,   /* Do not emit comments to output. */
```

---

## Incluir y excluir carpetas y/o archivos

En el `tsconfig.json`, al final agrego:

```
 "exclude": [
    "objetos/*.ts",
    "node_modules2"
  ]
```

Con **exclude** indico lo que voy a excluir y con **include** indico lo que voy a incluir, detallo por los **paths**.

---

## Output File - Archivo de salida

---