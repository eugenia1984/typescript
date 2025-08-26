namespace DatabaseEntity {
  export class User {
    constructor(public name: string) {}
  }

  const myUser = new User("Eugenia");
  console.log(myUser);
}

const myOtherUser = new DatabaseEntity.User("Maria");
console.log(myOtherUser);
