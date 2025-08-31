// Object
var casa = {
    calle: "Calle principal",
    numero: 13,
    tienePortero: false,
    familia: {
        padre: "Juan",
        madre: "María",
    },
};
console.log({ casa: casa });
console.log("padre: ".concat(casa.familia.padre));
console.log("madre: ".concat(casa.familia.madre));
// Object with types
var casa2 = {
    calle: "Calle principal 2",
    numero: 130,
    tienePortero: true,
};
console.log({ casa2: casa2 });
