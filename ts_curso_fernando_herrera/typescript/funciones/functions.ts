/**********  Tipando el retorno de una funcion *************/
const hero1: string = 'Flash';

function returnName(): string {
  return hero1;
}

const activateBatiSignal = (): string => {
  return 'Batiseñal activada!';
}

console.log(typeof activateBatiSignal); // function

const heroName = returnName();


/***********  Argumentos obligatorios o requeridos   *************/
const fullName = (firstName: string, lastName: string): string => {
  if (!firstName) {
    throw new Error('Nombre requerido')
  }
  if (!lastName) {
    throw new Error('Apellido requerido')
  }

  return `${ firstName } ${ lastName }`
}

const name2 = fullName('Tony', 'Stark')


/***************************  Parámetros opcionales    ********************/
const fullNameOptional = (firstName: string, lastName?: string): string => {
  if (!firstName) {
    throw new Error('Nombre requerido')
  }

  return `${ firstName } ${ lastName || '---' }`
}

const name3 = fullNameOptional('Tony')

/*************  Argumentos por defecto    *************/
const fullNameArgByDefault = (
  firstName: string,
  upper: boolean = false, // valor por defecto: false
  lastName?: string
): string => {
  if (!firstName) {
    throw new Error('Nombre requerido')
  }

  if (upper) {
    return `${ firstName } ${ lastName || '---' }`.toUpperCase()
  } else {
    return `${ firstName } ${ lastName || '---' }`.toLowerCase()
  }
}

const name4 = fullNameArgByDefault('Tony', true)
const name5 = fullNameArgByDefault('Tony', false)

/************* Parámetros Rest *************/
const fullNameRest = (firstName: string, ...restArgs: string[]): string => {
  return `${ firstName } ${ restArgs.join(' ') }`
}

const superman = fullNameRest('Clack', 'Joseph', 'Kent')
console.log({ superman })

/***************** Tipo Funcion **********************/
const addNumbers= (a: number, b: number):number => a + b;
const greet = (name: string):string => `Hola ${ name }`
const saveTheWorld = ():string => `El mundo está salvado`
  
let myFunction: Function; // let myFunction: (y: number, x: number) => number;

myFunction = addNumbers;
console.log(myFunction(1, 2));

myFunction = greet;
console.log(myFunction('Eugenia'));

myFunction = saveTheWorld;
console.log(myFunction());

/*********** Funciones básicas *******************/
function sumar(a: number, b: number): number {
  return a + b;
}

const contar = (heroes: string[]): number => {
  return heroes.length;
}
const superHeroes: string[] = ["Flash", "Arrow", "Superman", "Linterna Verde"];
contar(superHeroes);

/***********  Parametros por defecto  ************/
const llamarBatman = (llamar: boolean = true): void => {
  if (llamar) {
    console.log("Batiseñal activada");
  }
}

llamarBatman ()
/******************** Rest ******************/
const unirheroes = (...personas: string[]): string => {
  return personas.join(", ");
}

/***************  Tipo funcion   *********************/
const noHaceNada = (numero: number, texto: string, booleano:boolean, arreglo: string[]) => { }


/***** Crear el tipo de funcion que acepte la funcion "noHaceNada"    ****/
let noHaceNadaTampoco: (n: number, t: string, b: boolean, a: string[]) => void;
noHaceNadaTampoco = noHaceNada