const express = require("express");
const app = express();
const path = require("path");
const port = process.env.PORT || 5000;
const compression = require("compression");
if (process.env.NODE_ENV !== "production") require("dotenv").config();

const stripe = require("stripe")(process.env.STRIPE_API_KEY);
app.use(compression());
app.use(express.json());
app.use(express.urlencoded({ extended: false })); //x-www-form-urlencoded
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Method", "GET");
  next();
});

if (process.env.NODE_ENV === "production") {
  //set static
  app.use(express.static(path.join(__dirname, "client", "build")));
  app.get("*", (req, res, next) => {
    res.sendFile(path.join(__dirname, "client", "build", "index.html"));
  });
}

app.post("/payment", async (req, res, next) => {
  try {
    const body = {
      source: req.body.token.id,
      amount: req.body.amount,
      currency: "usd",
    };

    stripe.charges.create(body, (stripeErr, stripeRes) => {
      if (stripeErr) {
        return res.status(500).json({ error: stripeErr });
      }
      return res.status(200).json({ success: stripeRes });
    });
  } catch (error) {
    res.json({ err: error });
  }
});

app.listen(port, console.log(`Server is running on port ${port}`));
