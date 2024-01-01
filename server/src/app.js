const express = require('express')
const app = express()
require('dotenv').config()
app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(process.env.SERVER_PORT, () => {
  console.log(`Example app listening on port ${process.env.SERVER_PORT}`)
})
