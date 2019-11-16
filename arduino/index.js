'use strict'

const five = require('johnny-five')
const SensAgent = require('sens-agent')

const board = new five.Board()

const agent = new SensAgent({
  name: '',
  username: '',
  interval: 1000,
  mqtt: {
    host: 'url server mqtt'
  }
})

board.on('ready', function () {

  const sensor = new five.Thermometer({
    controller: 'LM12',
    pin: 'A9'
  })

  agent.addMetric('temperature', function () {
    return temp
  })

  sensor.on('change', function () {
    temp = this.celsius
  })

  agent.connect()

})

