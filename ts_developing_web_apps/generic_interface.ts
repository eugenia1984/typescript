function getArray<T>(items: T[]): T[] {
  return new Array<T>().concat(items);
}

let myNumberArray = getArray<number>([100, 200, 300]);
let myStringArray = getArray<string>(["Hello", "Bye"]);
myNumberArray.push(400);
// I get an error if I try: myNumberArray.push("Sun");