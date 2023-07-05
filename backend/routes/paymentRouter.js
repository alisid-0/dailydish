const express = require('express');
const router = express.Router();
const stripe = require('stripe')('sk_test_51NQIYWC1OoTug78s1WkF2Iz9HJjwCgleAvbRrSfg064L0OE7tlBA8LyA042Q8h6sDaYmp7MKehgj0cELR8IVmW8m00kuu8lDeC')

const calculateOrderAmount = (items) => {
  // Replace this constant with a calculation of the order's amount
  return 1400;
};

router.post("/create-payment-intent", async (req, res) => {
  const { items } = req.body;

  // Create a PaymentIntent with the order amount and currency
  const paymentIntent = await stripe.paymentIntents.create({
    amount: calculateOrderAmount(items),
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
