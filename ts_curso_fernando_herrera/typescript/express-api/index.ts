import express from 'express'

const app = express()
const port = 3000

app.get('/', (req, res) => {
  // res.send('Hello World!')
  res.status(401).json({
    ok: false,
    message: "Bad request"
  })
  // res.status(201).json({
  //   ok: true,
  //   message: "Working ok!"
  // })
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port} - http://localhost:${port}`)
})