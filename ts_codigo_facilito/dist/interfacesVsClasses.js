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
var PersonClass = /** @class */ (function () {
    function PersonClass() {
    }
    PersonClass.prototype.sayHello = function () {
        console.log("Hi!");
    };
    return PersonClass;
}());
// Como es una interface, al crearla deben ir todas las propiedades
var personOne = {
    name: "",
    code: "",
    charge: 0,
    sayHello: function () {
        throw new Error("Function not implemented.");
    },
};
// const personTwo: PersonClass = { sayHello() {} };
var personTwo = new PersonClass();
personTwo.sayHello();
var PetClass = /** @class */ (function () {
    function PetClass() {
    }
    PetClass.prototype.sayHello = function () {
        return "Hola!";
    };
    return PetClass;
}());
// Nos obliga a seguir el contrato
var Dog = /** @class */ (function () {
    function Dog() {
    }
    Dog.prototype.sayHello = function () {
        return "Hola desde dog!";
    };
    return Dog;
}());
// Nos permite a reutilizar
var Cat = /** @class */ (function (_super) {
    __extends(Cat, _super);
    function Cat() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Cat;
}(PetClass));
