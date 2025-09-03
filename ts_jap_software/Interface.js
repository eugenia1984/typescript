// Interface
// para suplir o simular la herencia multiple ya que una clase puede implementar varias interfaces a la vez
// Es un CONTRATO, donde se especifica las cosas que deben tener una clase
var especieGato;
(function (especieGato) {
    especieGato[especieGato["Comun"] = 0] = "Comun";
    especieGato[especieGato["Angora"] = 1] = "Angora";
    especieGato[especieGato["Persa"] = 2] = "Persa";
    especieGato[especieGato["Siames"] = 3] = "Siames";
})(especieGato || (especieGato = {}));
var especiePerro;
(function (especiePerro) {
    especiePerro[especiePerro["PP"] = 0] = "PP";
    especiePerro[especiePerro["Doberman"] = 1] = "Doberman";
    especiePerro[especiePerro["Salchicha"] = 2] = "Salchicha";
})(especiePerro || (especiePerro = {}));
var Gato2 = /** @class */ (function () {
    // constructor
    function Gato2(n, e, esp) {
        this.nombre = n;
        this.edad = e;
        this.esp = esp;
    }
    // Method
    Gato2.prototype.datos = function () {
        console.log("Mi gato se llama ".concat(this.nombre, ", tiene ").concat(this.edad, " a\u00F1os y es de la especie ").concat(especieGato[this.esp], "."));
    };
    return Gato2;
}());
var Perro = /** @class */ (function () {
    function Perro() {
    }
    Perro.prototype.datos = function () {
        console.log("Mi perro se llama ".concat(this.nombre, ", tiene ").concat(this.edad, " a\u00F1os y es de la especie ").concat(especiePerro[this.esp], "."));
    };
    return Perro;
}());
var miGato2 = new Gato2("Pepi", 5, especieGato.Comun);
miGato2.datos();
var miPerro = new Perro();
miPerro.edad = 6;
miPerro.nombre = "Toto";
miPerro.esp = especiePerro.PP;
miPerro.datos();
