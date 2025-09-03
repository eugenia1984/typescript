var Perro2 = /** @class */ (function () {
    function Perro2() {
    }
    Perro2.prototype.datos = function () {
        console.log("Mi perro se llama ".concat(this.nombre, ", tiene ").concat(this.edad, " a\u00F1os."));
    };
    return Perro2;
}());
var miPerro2 = new Perro2();
miPerro2.edad = 2;
miPerro2.nombre = "Perrín";
miPerro2.datos();
var jirafa = {
    nombre: "Jirafín",
    edad: 5,
    datos: function () {
        console.log("Mi jirafa se llama ".concat(this.nombre, ", tiene ").concat(this.edad, " a\u00F1os."));
    }
};
jirafa.datos();
