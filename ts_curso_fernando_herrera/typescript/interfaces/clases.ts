(() => {
    interface Xmen {
        name: string;
        realName: string;
        mutantPower(id: number): string;
    }

    interface Human {
        age: number;
    }

    // Como es una Interface -> IMPLEMENTS
    class Mutant implements Xmen, Human {
        public age: number;
        public name: string;
        public realName: string;
        // Metodo
        mutantPower(id: number) {
            return this.name + ' ' + this.realName;
        }
    }
})()