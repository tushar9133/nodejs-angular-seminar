const express = require('express')
const app = express()
const port = 4000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/About', (req, res) => {
    res.send('About!')
  })

app.get('/content', (req, res) => {
    res.send('123456')
  })

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})