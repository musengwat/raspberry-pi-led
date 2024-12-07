const { Router } = require("express");
const { clearLEDs, resetLEDs } = require("../effects/baseEffects");

module.exports = (ledContext) => {
  const router = Router();

  router.post("/off", async (req, res) => {
    try {
      const response = await resetLEDs(ledContext);
      res.json({ message: `LEDs turned off ${response}` });
    } catch (error) {
      res
        .status(500)
        .json({ error: "Failed to turn off LEDs", details: error.message });
    }
  });

  router.post("/reset", async (req, res) => {
    try {
      const response = await clearLEDs(ledContext);
      res.json({ message: `LEDs turned off ${response}` });
    } catch (error) {
      res
        .status(500)
        .json({ error: "Failed to turn off LEDs", details: error.message });
    }
  });

  return router;
};
