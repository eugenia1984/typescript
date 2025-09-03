// Palabra reservada THIS
// Hay que saber desde donde se invoca para saber que objeto se le asigna

// Caso 1
// El ambito dle this es dentro e cada funcion respectiva
let imprimir = function (cad1, cad2) {
  return {
    nombre: cad1,
    devuelveCadena: function () {
      console.log(this.nombre);
    },
    nombre2: {
      nombre: cad2,
      devuelveCadena: function () {
        console.log(this.nombre);
      },
    },
  };
};

let aux = imprimir("Hola", "Adios");
aux.devuelveCadena();
aux.nombre2.devuelveCadena();


// Caso 2, el this dentro de la clase
class MiObjeto {
  cadena: string;

  constructor(cad: string) {
    this.cadena = cad;
  }

  datos() {
    console.log(this.cadena);
  }
}

let miObjetoNuevo = new MiObjeto("XXX");
miObjetoNuevo.datos();
