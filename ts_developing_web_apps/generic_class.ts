class StudentInfo<A, B> {
  private Id: A;
  private Name: B;

  setValue(id: A, name: B):void {
    this.Id = id;
    this.Name = name;
  }

  display(): void {
    console.log(`Id = ${this.Id}, Name= ${this.Name}`);
  }
}

let at = new StudentInfo<number, string>();
at.setValue(12, "Andrew");
at.display();

let std = new StudentInfo<string, string>();
std.setValue("13", "Mary");
std.display();