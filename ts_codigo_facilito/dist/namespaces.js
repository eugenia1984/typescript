var DatabaseEntity;
(function (DatabaseEntity) {
    var User = /** @class */ (function () {
        function User(name) {
            this.name = name;
        }
        return User;
    }());
    DatabaseEntity.User = User;
    var myUser = new User("Eugenia");
    console.log(myUser);
})(DatabaseEntity || (DatabaseEntity = {}));
var myOtherUser = new DatabaseEntity.User("Maria");
console.log(myOtherUser);
/// <reference path="namespaces.ts" />
var myThirdUser = new DatabaseEntity.User("Maria Eugenia");
console.log(myThirdUser);
