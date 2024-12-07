const { Router } = require("express");
const { pulse } = require("../effects/pulse");
const { rainbow } = require("../effects/rainbow");
const { walk } = require("../effects/walk");
const { flow } = require("../effects/flow");
const { fill } = require("../effects/fill");

module.exports = (ledContext) => {
  const router = Router();

  router.post("/pulse", async (req, res) => {
    try {
      const { delay } = req.body;
      const response = await pulse(ledContext, delay);
      res.json({ message: `LEDs updated ${response}` });
    } catch (error) {
      res
        .status(500)
        .json({ error: "Failed to update LEDs", details: error.message });
    }
  });

  //reset LEDS
  router.post("/rainbow", async (req, res) => {
    try {
      const { brightness } = req.body;
      const response = await rainbow(ledContext, brightness);
      res.json({ message: `LEDs updated ${response}` });
    } catch (error) {
      res
        .status(500)
        .json({ error: "Failed to update LEDs", details: error.message });
    }
  });

  // Sample GET route
  router.post("/walk", async (req, res) => {
    try {
      const { delay } = req.body;
      const response = await walk(ledContext, delay);
      res.json({ message: `LEDs updated ${response}` });
    } catch (error) {
      res
        .status(500)
        .json({ error: "Failed to update LEDs", details: error.message });
    }
  });

  // Sample POST route
  router.post("/fill", async (req, res) => {
    try {
      const { color, brightness } = req.body;
      const response = await fill(ledContext, color, brightness);
      res.json({ message: `LEDs updated ${response}` });
    } catch (error) {
      res
        .status(500)
        .json({ error: "Failed to update LEDs", details: error.message });
    }
  });

  // Sample POST route
  router.post("/flow", async (req, res) => {
    try {
      const { delay } = req.body;
      const response = await flow(ledContext, delay);
      res.json({ message: `LEDs updated ${response}` });
    } catch (error) {
      res
        .status(500)
        .json({ error: "Failed to update LEDs", details: error.message });
    }
  });

  router.post("/loudness", async (req, res) => {
    try {
      const response = await flow(ledContext);
      res.json({ message: `LEDs updated ${response}` });
    } catch (error) {
      res
        .status(500)
        .json({ error: "Failed to update LEDs", details: error.message });
    }
  });

  return router;
};
