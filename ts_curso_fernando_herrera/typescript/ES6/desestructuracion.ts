(() => {

  type Avengers = {
    nick: string
    ironman: string
    vision: string
    activo: boolean
    poder: number
  }

  const avengers: Avengers = {
    nick: 'Samuel L. Jackson',
    ironman: 'Robert Downey Jr.',
    vision: 'Paul Bettany',
    activo: true,
    poder: 1500.123123
  }

  // Desestructuracion
  const { poder, vision } = avengers
  console.log(poder.toFixed(2), vision.toUpperCase())
  
  // Rest
  const printAvenger = ({ ironman, ...resto }: Avengers) => {
    console.log(ironman, resto);
  }
  printAvenger(avengers)
  
  // Desestructuracion de arrays, se usa [] en vez de {}
  const avengersArr: [string, boolean, number] = [
    'Cap. América',
    true,
    150.15
  ]
  // Si desestructuro y uso solo uno, debo tener en cuenta su orden,
  // en cambio en los objetos como busca por key no importa
 // const [, ironman, ] = avengersArr
  const [capitan, ironman, seriaUnNumero] = avengersArr
  console.log({ ironman, capitan })
  console.log('seriaUnNumero: ', seriaUnNumero)

})()