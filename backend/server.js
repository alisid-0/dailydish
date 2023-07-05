require('dotenv').config()

const express = require(`express`)
const routes = require(`./routes/AppRouter`)
const db = require(`./db`)
const logger = require(`morgan`)
const cors = require(`cors`)

const PORT = process.env.PORT || 3001
const app = express()



app.use(express.json())
app.use(logger(`dev`))
app.use(cors())

app.use(express.static(`../frontend`))


app.use(`/api`, routes)

// app.use(`*`, express.static(`./vite-app/dist`))
app.use(`*`, express.static(`../frontend`))

app.listen(PORT, ()=> console.log(`Listening on port: ${PORT}`))