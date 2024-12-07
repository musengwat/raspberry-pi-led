const { Router } = require("express");
const { clearLEDs, resetLEDs } = require("../effects/baseEffects");

const router = Router();
//reset LEDS
router.post("/off", async (req, res) => {
  try {
    const response = await resetLEDs();
    res.json({ message: `LEDs turned off ${response}` });
  } catch (error) {
    res
      .status(500)
      .json({ error: "Failed to turn off LEDs", details: error.message });
  }
});

// Sample GET route
router.post("/reset", async (req, res) => {
  try {
    const { gpio } = reaq.body;
    const response = await clearLEDs(gpio);
    res.json({ message: `LEDs turned off ${response}` });
  } catch (error) {
    res
      .status(500)
      .json({ error: "Failed to turn off LEDs", details: error.message });
  }
});

module.exports = router;
