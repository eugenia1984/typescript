(() => {
  type Avenger = {
    name: string
    weapon: string
  }

  const ironman: Avenger = {
    name: 'Ironman',
    weapon: 'Armorsuit'
  }

  const captainAmerica: Avenger = {
    name: 'Capitán América',
    weapon: 'Escudo'
  }

  const thor: Avenger = {
    name: 'Thor',
    weapon: 'Mjolnir'
  }

  const avengers: Avenger[] = [ironman, thor, captainAmerica]

  // Por cada elemento del array voy a tener el console.log
  for (const avenger of avengers) {
    console.log(`Name: ${avenger.name}, weapon: ${avenger.weapon}`)
  }
})()