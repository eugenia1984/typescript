(() => {
    // Las interfeces no crean instancias
    interface Client {
        name: string;
        age?: number;
        address: Address;
        // Metodo en la interface
        getFullAddress(id: string): string;
    }

    interface Address {
        id: number;
        zip: string;
        city: string;
    }

    const client: Client = {
        name: 'Fernando',
        address: {
            id: 125,
            zip: 'KY2 SUD',
            city: 'Ottawa'
        },
        getFullAddress(id: string) {
            return this.address.city;
        }
    }

    const client2: Client = {
        name: 'Melissa',
        age: 30,
        address: {
            city: 'Toronto',
            id: 120,
            zip: 'K2S U2A'
        },
        getFullAddress(id: string) {
            return this.address.city;
        }
    }

    console.log('client: ', client)
    console.log('client2: ', client2)
})()