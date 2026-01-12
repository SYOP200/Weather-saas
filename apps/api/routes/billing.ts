import { stripe } from "@weather/billing";

router.post("/checkout", async (req, res) => {
  const session = await stripe.checkout.sessions.create({
    mode: "subscription",
    line_items: [{ price: "price_weather_pro", quantity: 1 }],
    success_url: "https://app.success",
    cancel_url: "https://app.cancel"
  });

  res.json({ url: session.url });
});

