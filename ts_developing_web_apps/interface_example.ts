interface Person {
  name: string
  age: number
}

interface Employee extends Person {
  gender: string
  empCode: number
}

let empObject = <Employee>{};
empObject.name = "Mary"
empObject.age = 30
empObject.gender = "Female"
empObject.empCode = 2
console.log("Name : ", empObject.name)