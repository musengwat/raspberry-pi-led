const { Router } = require("express");
const { resetLEDs } = require("../controllers/ledController");
const { testLEDs } = require("../effects/test");

const router = Router();
// test LEDS
router.post("/on", (req, res) => {
  const { brightness } = req.body || 0.4;
  testLEDs(brightness);
  res.json({ message: "LEDs updated" });
});

//reset LEDS
router.post("/off", (req, res) => {
  resetLEDs();
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
