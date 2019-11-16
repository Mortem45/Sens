# sens-agent

## Usage

``` js

const SensAgent = require('sens-agent')

const agent = new SensAgent({
    name: 'myapp',
    username: 'user',
	interval: 2000
})

agent.addMetric('rss', function getRss () {
    return process.memoryUsage().rss
})

agent.addMetric('promiseMetric', function getRandomPromise () {
    return Promise.resolve(Math.random())
})

agent.addMetric('callbackMetric', function getRandomCallback (callback) {
    setTimeout(() => {
        callback(null, Math.random())
    }, 1000)
})

agent.connect()

//My events
agent.on('connected', handler)
agent.on('disconnected', handler)
agent.on('message', handler)

//Events of others
agent.on('agent/connected', handler)
agent.on('agent/disconnected', handler)
agent.on('agent/message', handler )

function handler (payload) {
	console.log(payload)
}
setTimeout(() => agent.disconnect(), 20000)
```