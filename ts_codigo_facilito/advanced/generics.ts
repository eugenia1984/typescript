/****** Generics (tipo de datos dinamicos) ******/

// interface MyInterface {
//  field: string | number;
// }

interface MyInterface<T> {
  field: T;
}

const myValue: MyInterface<number> = { field: 5 };
