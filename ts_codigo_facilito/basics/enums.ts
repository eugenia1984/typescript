/******* enus *******/
// Permite almacenar lista de valores estaticos
// empieza desde el 0, como los arrays
enum Users{
  NormalUser,
  PayedUser,
  AdminUser,
  MegaUser
}
const myUser = Users.AdminUser;
console.log(myUser) // 2

// Puedo almacenar valores desde el 0 hasta el infinito
// Puedo darle alias

enum Color {
  Primary = 'primary',
  Secondary = 'secondary'
}

console.log(Color.Primary); // primary