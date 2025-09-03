// por defecto es public, por eso no se  suele especificar-> public texto: string;
class MyObject {
  texto: string; 

  constructor(s:string) {
    this.texto = s;
  }
}

let myObject = new MyObject( "Testing");
console.log(myObject.texto)