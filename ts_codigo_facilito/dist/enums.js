/******* enus *******/
// Permite almacenar lista de valores estaticos
// empieza desde el 0, como los arrays
var Users;
(function (Users) {
    Users[Users["NormalUser"] = 0] = "NormalUser";
    Users[Users["PayedUser"] = 1] = "PayedUser";
    Users[Users["AdminUser"] = 2] = "AdminUser";
    Users[Users["MegaUser"] = 3] = "MegaUser";
})(Users || (Users = {}));
var myUser = Users.AdminUser;
console.log(myUser); // 2
// Puedo almacenar valores desde el 0 hasta el infinito
// Puedo darle alias
var Color;
(function (Color) {
    Color["Primary"] = "primary";
    Color["Secondary"] = "secondary";
})(Color || (Color = {}));
console.log(Color.Primary); // primary
