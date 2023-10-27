; (() => {
  // Clase madre/padre
  class Avenger {
    constructor(name = 'No name', power = 0) {
      this.name = name
      this.power = power
    }
  }

  // Clase que extiende, es clase hija
  class FlyingAvenger extends Avenger {
    // constructor de la clase FlyingAvenger
    constructor(name, power) {
      super(name, power) // el constructor de la clase madre/padre: Avenger
      this.flying = true
    }
  }

  const hulk = new Avenger('Hulk', 9001)
  const falcon = new FlyingAvenger('Falcon', 50)

  console.log('hulk: ',hulk)
  console.log('falcon: ',falcon)
})()
