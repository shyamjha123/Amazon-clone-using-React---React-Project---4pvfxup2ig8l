const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")(
  //"sk_test_51MBbvHSD0suCjABaHNw0RjeRwuiMIwQSFiHMlp63QD4v159LJWqiIfW2MjfxKdKO2DaBeyXy0Qawqqb7SRPKERc500b1dK13Fj"
  //"sk_test_51MBbvHSD0suCjABaHNw0RjeRwuiMIwQSFiHMlp63QD4v159LJWqiIfW2MjfxKdKO2DaBeyXy0Qawqqb7SRPKERc500b1dK13Fj"
  //sk_test_51MBbvHSD0suCjABaHNw0RjeRwuiMIwQSFiHMlp63QD4v159LJWqiIfW2MjfxKdKO2DaBeyXy0Qawqqb7SRPKERc500b1dK13Fj
  //Shyam123@#3
  
  "sk_test_51LFgpvF3oeaFZvcRQ5xWyCquQDhho1ZHxZQYLBzQVBvtlLsswFlE6S3theMnWq6pOIoe0Dpeq14f6ZcdozarrHZE00QDzi2jWl"
  //"rk_test_51MBbvHSD0suCjABa5J7EeXBe43gKeBxiDXwZgcH4lSw62zzblkALd0wq4VuSaivMsRPq3mhbIBw3OOOmlotUnpBy00pMSsgV0v"
  //"sk_test_51MD6ukSHWrGTa712TQLvmaApgCcXLiZ6qFX3E02vki3DJBIkTKGeAtHg5DcdnXTYEHMmDdK2bcasdzsWRpfpKOpa001FPvcKLE"s
);

// API

// - App config
const app = express();

// - Middlewares
app.use(cors({ origin: true }));
app.use(express.json());

// - API routes
app.get("/", (request, response) => response.status(200).send("hello world"));

// eslint-disable-next-line no-use-before-define
app.post("/payments/create", async (request, response) => {
  const total = request.query.total;

  console.log("Payment Request Recieved BOOM!!! for this amount >>> ", total);

  const paymentIntent = await stripe.paymentIntents.create({
    amount: total, // subunits of the currency
    currency: "usd",
  });

  // OK - Created
  response.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});

// - Listen command
exports.api = functions.https.onRequest(app);

// Example endpoint
// http://localhost:5001/amzn-clone-ozngrsc/us-central1/api
