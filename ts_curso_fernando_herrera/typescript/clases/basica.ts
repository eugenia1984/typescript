(() => {
    class Avenger {
        // Atributes
        // private name: string;
        // private team: string;
        // public realName?: string;
        static avgAge: number = 35;

        static getAvgAge() {
            return this.name
        }
        // Constructor
        constructor(
            private name: string,
            private team: string,
            public realName?: string,
        ) { }

        public bio() {
            return `${ this.name } (${ this.team })!!!`
        }
    }

    // Los metodos y propiedades estaticas solo son accedidas
    // utilizando el nombre de la clase, y no mediante
    // instancias de la misma
    const antman: Avenger = new Avenger('Antman', 'Capitan', 'Scott Lang')
    console.log( antman )

    console.log( Avenger.getAvgAge() ) // static atribute
})()