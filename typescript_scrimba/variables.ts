// Primitive data: string, number, boolean
let myName: string = "Maria Eugenia"

let numberOfWheels: number = 4

let isStudent: boolean = false

// custom types
type Food = string
let favoriteFood: Food = "pizza"

// Custom type for objects
// Entre cada key se separa con coma, con punto y como o sin nada
type Address = {
  street: string
  city: string
  country: string
}

type Person = {
  name: string
  age: number
  isStudent: boolean
  address?: Address // ? is for optional properties
}

let person1: Person = {
  name: "Joe",
  age: 42,
  isStudent: true,
  address: {
    street: "123 Main",
    city: "AnyTown",
    country: "Spain"
  }
}

let person2: Person = {
  name: "Jill",
  age: 66,
  isStudent: false
}

function displayInfo( person: Person ) {
  // As address is optional person.address?.street can be undefined
  console.log(`${person.name} lives at ${person.address?.street || "no where"}`)
}

displayInfo(person1)
displayInfo(person2)

// Array
let ages: number[] = [12, 46]
ages.push(50)
// ages.push(true) -> error
// ages.push("50") -> error

let people: Person[] = [ person1, person2 ]
// With Generics
let people2: Array<Person> = [ person1, person2 ]

// Literal type
const myName2 = "María Eugenia"
// A constant can`t be re assigned 

// Unions
type UserRole = "guest" | "member" | "admin"
let userRoleGuest: UserRole = "guest"
let UserRoleAdmin = "admin"

type User = {
  username: string
  role: UserRole
}