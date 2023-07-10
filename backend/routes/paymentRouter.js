const express = require('express');
const router = express.Router();
const stripe = require('stripe')('sk_test_51NQIYWC1OoTug78s1WkF2Iz9HJjwCgleAvbRrSfg064L0OE7tlBA8LyA042Q8h6sDaYmp7MKehgj0cELR8IVmW8m00kuu8lDeC')


router.post("/create-payment-intent", async (req, res) => {
  const { price } = req.body;
  console.log(price)
  const paymentIntent = await stripe.paymentIntents.create({
    amount: price,
    currency: "usd",
    automatic_payment_methods: {
      enabled: true,
    },
  });

  res.send({
    clientSecret: paymentIntent.client_secret,
  });
});

module.exports = router;
