const { Router } = require("express");
const {
  initializeLEDs,
  clearLEDs,
  resetLEDs,
} = require("../controllers/ledController");

const router = Router();
// test LEDS
router.post("/on", (req, res) => {
  initializeLEDs;
  res.json({ message: "LEDs updated" });
});

//reset LEDS
router.post("/off", (req, res) => {
  resetLEDs();
  res.json({ message: "LEDs turned off" });
});

// Sample GET route
router.post("/reset", (req, res) => {
  const { gpio } = req.body;
  clearLEDs(gpio);
  res.json({ message: "LEDs turned off" });
});

module.exports = router;
