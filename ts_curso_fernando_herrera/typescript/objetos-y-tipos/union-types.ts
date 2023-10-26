(() => {

    type Hero = {
        name: string;
        age?: number;
        powers: number[];
        getName?: () => string;
    }

     // Inicializo por defecto como string
    let myCustomVariable: (string | number | Hero) = 'Fernando';
    console.log(typeof myCustomVariable) // string

    myCustomVariable = 20
    console.log(typeof myCustomVariable) // number

    myCustomVariable = {
        name: 'Bruce',
        age: 43,
        powers: [1]
    }

    console.log(typeof myCustomVariable) // object, no es Hero, porque no existe en JS
    console.log(myCustomVariable)

})()