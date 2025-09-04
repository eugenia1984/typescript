interface Person {
  nombre: string;
  dameNombre(): void;
}

interface Home {
  direccion: string;
  dameDireccion(): void;
}

// Ejemplo de como una clase puede implementar varias interfaces
abstract class Employee implements Person, Home {
  nombre: string;
  direccion: string;
  static empresa: string;

  abstract employeeData(): void;

  static datosEmpresa(): void {
    console.log(`Empresa: ${Employee.empresa}`);
  }

  dameNombre(): void {
    console.log(`Nombre: ${this.nombre}`)
  };

  dameDireccion(): void {
    console.log(`Direccion: ${this.direccion}`)
  };
}

class General extends Employee {
  employeeData(): void {
    console.log(``)
  }
}

// sin instanciar la clase creando objeto
Employee.empresa = "Udemy";
General.datosEmpresa();


// creando objetos
let general = new General();
general.direccion = "Calle privada 2";
general.nombre = "Ana";
general.dameDireccion();
general.dameNombre();
general.employeeData();