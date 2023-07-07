import React, { useEffect, useState, useContext } from "react"
import {
  PaymentElement,
  LinkAuthenticationElement,
  useStripe,
  useElements
} from "@stripe/react-stripe-js"
import { Button, Container, Row, Col } from "react-bootstrap"

import { LoginContext } from "../App"


function Checkout() {

  const contextValue = useContext(LoginContext)
  const total = contextValue.totalCheckout
  const totalBeforeTaxes = (total / 1.1).toFixed(2)
  const taxes = parseFloat((total - totalBeforeTaxes).toFixed(2))
  const shipping = parseFloat(((total * 1.10) - total).toFixed(2))
  const totalAfterShipping = (total * 1.10).toFixed(2)

  const stripe = useStripe()
  const elements = useElements()

  const [email, setEmail] = useState('')
  const [message, setMessage] = useState(null)
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    if (!stripe) {
      return
    }

    const clientSecret = new URLSearchParams(window.location.search).get(
      "payment_intent_client_secret"
    )

    if (!clientSecret) {
      return
    }

    stripe.retrievePaymentIntent(clientSecret).then(({ paymentIntent }) => {
      switch (paymentIntent.status) {
        case "succeeded":
          setMessage("Payment succeeded!")
          break
        case "processing":
          setMessage("Your payment is processing.")
          break
        case "requires_payment_method":
          setMessage("Your payment was not successful, please try again.")
          break
        default:
          setMessage("Something went wrong.")
          break
      }
    })
  }, [stripe])

  const handleSubmit = async (e) => {
    e.preventDefault()
    console.log(`submitting payment`)

    if (!stripe || !elements) {
      return
    }

    setIsLoading(true)

    const { error } = await stripe.confirmPayment({
      elements,
      confirmParams: {
        // Make sure to change this to your payment completion page
        return_url: "http://localhost:5173/success",
      },
    })

    // This point will only be reached if there is an immediate error when
    // confirming the payment. Otherwise, your customer will be redirected to
    // your `return_url`. For some payment methods like iDEAL, your customer will
    // be redirected to an intermediate site first to authorize the payment, then
    // redirected to the `return_url`.
    if (error.type === "card_error" || error.type === "validation_error") {
      setMessage(error.message)
    } else {
      setMessage("An unexpected error occurred.")
    }

    setIsLoading(false)
  }

  const paymentElementOptions = {
    layout: "tabs"
  }

  return (
    <Container className='py-5'>
      <Row>
        <Col className='py-5'>
          <Container className='bg-light p-5' style={{display: `flex`, flexDirection:`column`, alignItems: `flex-start`, borderRadius: `1rem`, boxShadow:`0vw 1vw 2vw 1vw rgba(0, 0, 0, 0.318)`}}>
            <p className='mx-4'>Subscribe to DailyDish.</p>
            <div className='mx-4' style={{display: `flex`, alignItems: `flex-end`, gap: `1vw`}}>
              <h1>${totalAfterShipping} </h1>
              <p>per month</p>
            </div>
            <Container className='bg-muted rounded p-4' style={{display: `flex`, flexDirection:`column`, alignItems: `flex-start`, backgroundColor: `lightgray`, maxWidth: `30rem`}}>
              <div style={{display: `flex`, justifyContent: `space-between`, borderBottom: `1px solid black`, width: `100%`, paddingTop: `10px`}}>
                <p style={{}}>Subtotal:</p>
                <p>${totalBeforeTaxes}</p>
              </div>
              <div style={{display: `flex`, justifyContent: `space-between`, borderBottom: `1px solid black`, width: `100%`, paddingTop: `10px`}}>
                <p style={{}}>Taxes (10%):</p>
                <p>${taxes}</p>
              </div>
              <div style={{display: `flex`, justifyContent: `space-between`, borderBottom: `1px solid black`, width: `100%`, paddingTop: `10px`}}>
                <p style={{}}>Shipping:</p>
                <p>${shipping}</p>
              </div>
            </Container>
            <p className='mx-5 pt-2'>Your billing starts today.</p>
          </Container>
        </Col>
        <Col className='py-5'>
          <Container className='bg-light py-5 px-4' style={{boxShadow: `0vw 1vw 2vw 1vw rgba(0, 0, 0, 0.318)`, borderRadius: `1rem`}}>
            <form id="payment-form" onSubmit={handleSubmit}>
            <LinkAuthenticationElement
                id="link-authentication-element"
                onChange={(event) => setEmail(event.value)}
            />
            <PaymentElement id="payment-element" options={paymentElementOptions} />
            <Button className='mt-5' disabled={isLoading || !stripe || !elements} id='submit' type='submit'>
                <span id="button-text">
                {isLoading ? <div className="spinner" id="spinner"></div> : "Subscribe"}
                </span>
            </Button>
            <Container>
              <p className='pt-3' style={{fontSize: `10px`}}>By confirming your subscription, you grant permission to charge your credit card automatically for this payment and future payments.</p>
            </Container>
            {/* Show any error or success messages */}
            {message && <div id="payment-message">{message}</div>}
            </form>

          </Container>
        </Col>
      </Row>
    </Container>
  )
}

export default Checkout