// Touple
let tupla: [string, number] = ["hi", 8, "how", 5];

// Enum
enum Color {
  Red,
  Green,
  Blue
}

let blue = Color.Blue;

// Interface
interface Calc {
  subtract (first: number, second: number) : number
}

let Calculator: Calc = {
  subtract (first: number, second: number) : number {
    return first - second;
  }
}