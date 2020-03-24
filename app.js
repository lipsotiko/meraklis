const express = require('express')
const app = express()

const PORT = (process.env.NODE_ENV !== 'production') ? 8080 : process.env.PORT
const HOST = '0.0.0.0'

app.use(express.static('dist'))
app.listen(PORT, HOST)

console.log(`Running on http://${HOST}:${PORT}`)
