const express = require('express')
const bodyParser = require('body-parser')
const enableBodyParserXml = require('body-parser-xml')
enableBodyParserXml(bodyParser)

const app = express()

app.use(bodyParser.xml())

const data = []

app.get('/', (req, res) => res.status(200).json(data))

app.post('/', (req, res) => {
  data.push({
    date: new Date(),
    body: req.body,
  })
  return res.status(200).json({ message: 'hello' })
})

const port = process.env.PORT || 3000
app.listen(port, () => {
  console.log(`Listening on port ${port}`)
})