// Object
let casa = {
  calle: "Calle principal",
  numero: 13,
  tienePortero: false,
  familia: {
    padre: "Juan",
    madre: "María",
  },
};

console.log({ casa });
console.log(`padre: ${casa.familia.padre}`);
console.log(`madre: ${casa.familia.madre}`);

// Object with types
let casa2: {
  calle: string;
  numero: number;
  tienePortero: boolean;
} = {
  calle: "Calle principal 2",
  numero: 130,
  tienePortero: true,
};
console.log({ casa2 });
