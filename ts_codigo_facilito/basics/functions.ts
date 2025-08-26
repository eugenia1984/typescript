// Funciones declaradas como constantes
const sayHi = (name: string): void => console.log(`Hola ${name}`);

sayHi("Eugenia");

// Fucniones explicitas con function
function sayGoodbye(name: string): void {
  console.log(`Adios ${name}!`);
}
sayGoodbye("Maria");

interface ResponseServiceCD {
  id: number;
  name: string;
  charge: string;
  number: number;
}
const response: ResponseServiceCD = {
  id: 1,
  name: "María Eugenia",
  charge: "Developer",
  number: 4,
};

// function show(response: { id; name; charge; number }): number {};
// Se usa la desestructuración del objeto
function show({ name, ...other }: ResponseServiceCD): number {
  console.log("El name mandado es: ", name);
  console.log("Otros datos: ", other)
  return 1;
}

show(response);
