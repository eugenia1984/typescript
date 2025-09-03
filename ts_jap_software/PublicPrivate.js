// por defecto es public, por eso no se  suele especificar-> public texto: string;
var MyObject = /** @class */ (function () {
    function MyObject(s) {
        this.texto = s;
    }
    return MyObject;
}());
var myObject = new MyObject("Testing");
console.log(myObject.texto);
