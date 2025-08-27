/****** Generics  ******/
// Tipo de datos dinamicos que se asignan en tiempo de ejecución
var myValueNumber = { field: 5 };
var myValueString = { field: '5' };
var myValueExample = {
    field: {
        id: '1',
        name: 'first'
    }
};
// Class example
var MyClass = /** @class */ (function () {
    function MyClass(field) {
        this.field = field;
    }
    return MyClass;
}());
var myObject = new MyClass('123');
// Function example
function getData(id) { }
getData('Hola');
var HttpResponse = /** @class */ (function () {
    function HttpResponse(data, status, code) {
        this.data = data;
        this.status = status;
        this.code = code;
    }
    return HttpResponse;
}());
var fetchUser = function () {
    return {
        id: 1,
        name: 'Maria'
    };
};
var myUser = fetchUser();
var res = new HttpResponse(myUser, 200, 1);
console.log(res);
