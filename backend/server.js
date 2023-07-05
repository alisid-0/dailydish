require('dotenv').config()

const express = require(`express`)
const routes = require(`./routes/AppRouter`)
const db = require(`./db`)
const logger = require(`morgan`)
const cors = require(`cors`)

const PORT = process.env.PORT || 3001
const app = express()

const stripe = require('stripe')('pk_test_51NQIYWC1OoTug78s1NFpUbRd5qL4IfkoGYaLE6CEp8CHzfK7Qvim5pfesvDuy3UREM4lE7TYnYvMRFwIdD8yHuhL00cJKg9nAA')

app.use(express.json())
app.use(logger(`dev`))
app.use(cors())

app.use(express.static(`../frontend`))


app.use(`/api`, routes)

// app.use(`*`, express.static(`./vite-app/dist`))
app.use(`*`, express.static(`../frontend`))

app.listen(PORT, ()=> console.log(`Listening on port: ${PORT}`))