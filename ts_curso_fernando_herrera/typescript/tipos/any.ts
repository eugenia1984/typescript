(() => { 
  let avenger: any = 123;
  const exists;
  let power;
  
  avenger = 'Dr Strange';
  // console.log(avenger.chart(0));
  console.log( (avenger as string).chartAt(0));

  avenger = 150.23256415;
  console.log(<number>avenger.toFixed(2));

  console.log(exists);
  console.log(power);
})()