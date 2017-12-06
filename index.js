const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const enableBodyParserXml = require('body-parser-xml')
enableBodyParserXml(bodyParser)

const app = express()

app.use(bodyParser.xml())
app.use(cors())

const data = []

app.get('/', (req, res) => res.status(200).json({ message: 'hello' }))

app.get('/datatrans', (req, res) => res.status(200).json(data))

app.post('/datatrans', (req, res) => {
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