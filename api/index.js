const express = require("express")
const app = express()
const stripe = require("stripe")('sk_test_51JollnA5bS3TR9OlwjYRegDHSBYnVRFPjtiMw8nNZ9E29RhPRS8UFyq0BcrWU9v50WlwzirpHIjDdJgDU0rC7cFN00yCeBC18u')
const cors = require("cors")

app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.use(cors())

app.post("/payment", cors(), async (req, res) => {
	let { amount, id } = req.body
	try {
		const payment = await stripe.paymentIntents.create({
			amount,
			currency: "USD",
			payment_method: id,
			confirm: true
		})
		console.log("Payment", payment)
		res.json({
			message: "Payment successful",
			success: true
		})
	} catch (error) {
		console.log("Error", error)
		res.json({
			message: "Payment failed",
			success: false
		})
	}
})

app.listen(process.env.PORT || 4000, () => {
	console.log("Sever is listening on port 4000")
})