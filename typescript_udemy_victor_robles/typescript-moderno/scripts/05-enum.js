"use strict";
/* ENUM */
var DatosPersonales;
(function (DatosPersonales) {
    DatosPersonales["nombre"] = "Maria ";
    DatosPersonales[DatosPersonales["dni"] = 12345678] = "dni";
    DatosPersonales["direccion"] = "Calle 1 123";
    DatosPersonales["ciudad"] = "Buenos Aires";
})(DatosPersonales || (DatosPersonales = {}));
;
console.log(DatosPersonales.nombre, DatosPersonales.dni);
