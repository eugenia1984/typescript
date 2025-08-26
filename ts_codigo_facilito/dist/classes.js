var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// Clase -> un molde para crear objetos
var Animal = /** @class */ (function () {
    // constructor
    function Animal() {
        this.age = 10; // private property/attribute -> se encapsula el dato, solo disponible dentro de la clase
        this.identity = "111"; // protected property/attribute -> disponible en las clases a las que se extiende
    }
    // methods
    Animal.prototype.sayHi = function () {
        console.log("Grr", this.age); // con .this puedo ver la propiedad privada
    };
    return Animal;
}());
var myAnimal = new Animal();
myAnimal.sayHi();
// Herencia -> se extiende la funcionalidad a otra clase
var Dog = /** @class */ (function (_super) {
    __extends(Dog, _super);
    function Dog() {
        var _this = _super.call(this) || this; // siempre primero con super se llama aal constructor de la clase padre
        console.log("Perro registrado");
        return _this;
    }
    Dog.prototype.sayHi = function () {
        this.identity;
    };
    return Dog;
}(Animal));
var myDog = new Dog();
myDog.sayHi();
