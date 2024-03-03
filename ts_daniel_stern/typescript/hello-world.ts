console.log("Hello world");

function helloName (string: String) {
  console.log("Hello " + string);
}

helloName("Eugenia");
// I can only pass string, not other types, like numbers
// This will give me an error:
// helloName(1);