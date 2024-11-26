const { Router } = require("express");
const { pulse } = require("../effects/pulse");

const router = Router();
// test LEDS
router.post("/pulse", (req, res) => {
  testLEDs();
  res.json({ message: "LEDs updated" });
});

//reset LEDS
router.post("/walk", (req, res) => {
  resetLEDs();
  res.json({ message: "LEDs turned off" });
});

// Sample GET route
router.get("/flow", (req, res) => {
  res.json({ message: "Welcome to the API!" });
});

// Sample POST route
router.post("/fill", (req, res) => {
  const { color } = req.body;
  res.json({ color, status: "Data received" });
});

module.exports = router;
