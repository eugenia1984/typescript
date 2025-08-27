# <img width="48" height="48" src="https://img.icons8.com/color/48/typescript.png" alt="typescript"/> Curso de TypeScript (Código facilito)

## ¿Qué es TypeScript?

- Superset de JavaScript, que compila a JavaScript

- JavaSCript con tipado dinámico

- Soportado por el FrontEnd (Vue,Angular, React, etc) y BackEnd (Express, Next.js, etc)

- Creado/mantenido por Microsoft, muy integrado en VSC(VSC esta creado en TS)

## ¿Por qué TypeScript?

- Es el standard del mercado laboral

- Prevención de errores en tiempo de ejecución

- Integración con Editores/IDE

- Gran herramienta para Juniors, previene typo o inferencia de tipos 

---

### Pre condiciones

- Tener **node**

- npm install -g typescript`

---

### ¿Como ejecutarlo?

1 - Dentro de `ts_codigo_facilito` creo un nuevo archivo `index.ts`

```
ts_codigo_facilito
  index.ts
```

2 - Me situo en la consola dentro de `ts_codigo_facilito` y corro el comando: `tsc index.ts`

3 - Se crea un nuevo archivo `index.js`, tranpila mi archivo de TypeScript a JavaScript (pero no usa ES6 o posterior, usa `var` por ejemplo, asi es compatible con todos los navegadores).

4 - Para poder ver por consola el archivo uso node: `node index.js`

5 - `npm init -y` para iniciar un nuevo proyecto con node y tener el archivo package.json

6 - Agrego un nuevo script: 
```  
"scripts": {
    "start": "tsc index.ts && node index.js",
},
```

Y por comando corro: 
```bash
npm run start
```

7- creo la carpeta `basics` para ver lo basico de TypeScript con el archivo: `types.ts`

```
ts_codigo_facilito
  basics/types.ts
  dist/types.js
```

Y agrego el script:
```bash 
"scripts": {
  "start:types": "tsc basics/types.ts --outdir dist/ && node dist/types.js",
},
```


Ahora por consola corro: 
```bash
npm run start:types
```

---

### Para crear proyectos con el archivo tsconfig

```bash
tsc --init
```

Y se crea el archivo:`tsconfig.json`

---