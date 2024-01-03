import express from "express";
import cors from "cors";

import { createStripeSession } from "./routes/stripePayment.js";
import { createPaypalOrder } from "./routes/paypaylPayment.js";

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

app.post("/create-stripe-session", createStripeSession); // Use Stripe function
app.post("/create-paypal-order", createPaypalOrder); // Use PayPal function

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});


