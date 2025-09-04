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
var Padre = /** @class */ (function () {
    function Padre(n) {
        this.nombre = n;
    }
    Padre.prototype.dameNombre = function () {
        console.log("Mi nombre es: ".concat(this.nombre));
    };
    return Padre;
}());
var padre = new Padre("Juan");
padre.dameNombre();
// La clase hija tiene acceso a los atributos y metodos de la clase padre
// y además a sus metodos y atributos propios
var Hijo = /** @class */ (function (_super) {
    __extends(Hijo, _super);
    function Hijo(n, e) {
        var _this = _super.call(this, n) || this;
        _this.edad = e;
        return _this;
    }
    Hijo.prototype.dameEdad = function () {
        console.log("Mi edad es: ".concat(this.edad));
    };
    return Hijo;
}(Padre));
var hijo = new Hijo("Pedrito", 5);
hijo.dameNombre();
hijo.dameEdad();
