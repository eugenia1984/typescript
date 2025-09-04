// Por defecto es PUBLIC, por eso no se  suele especificar (accesible dentro y fuera de la clase)
// Sino -> public texto: string;
// PRIVATE -> no es accesibl fuera del ambito de la clase
// Se hacen calculos, operaciones internas
var MyObject = /** @class */ (function () {
    function MyObject(s) {
        this.texto2 = s;
    }
    MyObject.prototype.datos = function () {
        console.log(this.texto2);
    };
    return MyObject;
}());
var myObject = new MyObject("Testing");
console.log(myObject.datos());
var myObject2 = new MyObject("Testing 2");
console.log(myObject2.datos());
