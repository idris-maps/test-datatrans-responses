const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const uuid = require('uuid')
const enableBodyParserXml = require('body-parser-xml')
enableBodyParserXml(bodyParser)

const app = express()

app.use(bodyParser.xml())
app.use(cors())

const data = []

app.get('/', (req, res) => res.status(200).json({ message: 'hello' }))

app.post('/contracts', (req, res) => res.status(200).json({ policyId: uuid.v4() }))

app.get('/contracts/:policyId', (req, res) => {
  const result = data.find(contract => contract.policyId === req.params.policyId)
  return result
    ? res.status(200).json(result)
    : res.sendStatus(404)
})

app.get('/datatrans', (req, res) => res.status(200).json(data))

app.post('/datatrans', (req, res) => {
  const body = parseWebhookBody(req.body)
  data.push({
    date: new Date(),
    body,
    policyId: body.refno
  })
  return res.status(200).json({ message: 'hello' })
})

const port = process.env.PORT || 3000
app.listen(port, () => {
  console.log(`Listening on port ${port}`)
})