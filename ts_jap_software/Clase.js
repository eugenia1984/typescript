// Class 
// Estructura pre definida que sirve como molde para crear objetos
var especie;
(function (especie) {
    especie[especie["Comun"] = 0] = "Comun";
    especie[especie["Angora"] = 1] = "Angora";
    especie[especie["Siames"] = 2] = "Siames";
    especie[especie["Persa"] = 3] = "Persa";
})(especie || (especie = {}));
;
var Gato = /** @class */ (function () {
    // constructor
    function Gato(n, e, esp) {
        this.nombre = n;
        this.edad = e;
        this.esp = esp;
    }
    // Method
    Gato.prototype.datosGato = function () {
        console.log("Mi gato se llama ".concat(this.nombre, ", tiene ").concat(this.edad, " a\u00F1os y es de la especie ").concat(especie[this.esp]));
    };
    return Gato;
}());
var miGato = new Gato("Garfield", 7, especie.Angora);
miGato.datosGato();
