(() => {
  /* 
  NEVER -> nunca tiene un punto de retorno
  No puede ter un return
  Salvo que en la parte que detallo que devuelve ademas de never tenga lo que puede devolver con return */
  const error = (message:string):never => { 
    throw new Error(message)
  }

  error('Auxilio!')
})()