const { Router } = require("express");
const { testLEDs, resetLEDs } = require("../controllers/ledController");

const router = Router();
// test LEDS
router.post("/on", (req, res) => {
  const { numLeds } = req.body || 50;
  testLEDs(numLeds);
  res.json({ message: "LEDs updated" });
});

//reset LEDS
router.post("/off", (req, res) => {
  const { numLeds } = req.body || 50;
  resetLEDs(numLeds);
  res.json({ message: "LEDs turned off" });
});

// Sample GET route
router.get("/", (req, res) => {
  res.json({ message: "Welcome to the API!" });
});

// Sample POST route
router.post("/sample/post", (req, res) => {
  const { color } = req.body;
  res.json({ color, status: "Data received" });
});

module.exports = router;
