// RangeError, ReferenceError, SyntaxError, Type Error, URIError

// RangeError -> array length
try {
  console.log(console, new Array(100000000000000000000000));
} catch (Error) {
  console.log('Error: ${Error}')
} finally {
}

// Syntax error
try {
  let x: number= 2;
  let y: number = 4;
  x***y;
} catch (Error) {
  console.log('Error: ${Error}')
} finally {
}
