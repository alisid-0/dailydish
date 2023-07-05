require('dotenv').config()

const express = require(`express`)
const routes = require(`./routes/AppRouter`)
const db = require(`./db`)
const logger = require(`morgan`)
const cors = require(`cors`)

const PORT = process.env.PORT || 3001
const app = express()
const stripe = require('stripe')(process.env.STRIPE_PRIVATE_KEY)

const storeItems = new Map(
    [
        [1, {priceInCents: 10000, name: `Learn React Today`}],
        [2, {priceInCents: 20000, name: 'Learn CSS Today'}]
    ]
)

app.use(express.json())
app.use(logger(`dev`))
app.use(cors())

// app.use(express.static(`./vite-app/dist`))
app.use(express.static(`../frontend/dist`))

app.post('/create-checkout-session', async (req,res) =>{
    try{
        const session = await stripe.checkoutsessions.create({
            payment_method_types: ['card'],
            mode: 'subscription'
        })
    } catch( e){
        res.status(500).json({error: e.message})
    }
    res.json({ url: `Hi`})
})

app.use(`/api`, routes)

// app.use(`*`, express.static(`./vite-app/dist`))
app.use(`*`, express.static(`../frontend/dist`))

app.listen(PORT, ()=> console.log(`Listening on port: ${PORT}`))