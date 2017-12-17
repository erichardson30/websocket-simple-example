const express = require('express')
const bodyParser = require('body-parser')
const path = require('path')
const app = express()

app.use(express.static(path.join(__dirname, 'build')))

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'))
})

app.listen(process.env.PORT || 5000)

var WebSocketServer = require('ws').Server,
  wss = new WebSocketServer({ port: 8080 })

wss.on('connection', function connection(ws) {
  console.log('user connected...')
  ws.on('message', function incoming(message) {
    console.log('received: %s', message)
  })

  ws.send('something')
})
