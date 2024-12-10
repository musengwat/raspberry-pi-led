const { Router } = require("express");
const { pulse } = require("../effects/pulse");
const { rainbow } = require("../effects/rainbow");
const { walk } = require("../effects/walk");
const { flow } = require("../effects/flow");
const { fill } = require("../effects/fill");
const { grow } = require("../effects/grow");
const { sparkle } = require("../effects/sparkle");
const { loudness } = require("../effects/loudnessEffect");
const { waveformEffect } = require("../effects/waveformEffect");
const { firework } = require("../effects/firework");

module.exports = (ledContext) => {
  const router = Router();

  router.post("/pulse", async (req, res) => {
    try {
      const { delay, brightness } = req.body;
      const response = await pulse(ledContext, delay, brightness);
      res.json({ message: `LEDs updated ${response}` });
    } catch (error) {
      res
        .status(500)
        .json({ error: "Failed to update LEDs", details: error.message });
    }
  });

  router.post("/wave", async (req, res) => {
    try {
      const { delay, brightness } = req.body;
      const response = await waveformEffect(ledContext, delay, brightness);
      res.json({ message: `LEDs updated ${response}` });
    } catch (error) {
      res
        .status(500)
        .json({ error: "Failed to update LEDs", details: error.message });
    }
  });

  router.post("/firework", async (req, res) => {
    try {
      const { delay, brightness } = req.body;
      const response = await firework(ledContext, delay, brightness);
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
      const { brightness, delay } = req.body;
      const response = await rainbow(ledContext, delay, brightness);
      res.json({ message: `LEDs updated ${response}` });
    } catch (error) {
      res
        .status(500)
        .json({ error: "Failed to update LEDs", details: error.message });
    }
  });
  router.post("/sparkle", async (req, res) => {
    try {
      const { brightness, delay } = req.body;
      const response = await sparkle(ledContext, delay, brightness);
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
      const { delay, brightness } = req.body;
      const response = await walk(ledContext, delay, brightness);
      res.json({ message: `LEDs updated ${response}` });
    } catch (error) {
      res
        .status(500)
        .json({ error: "Failed to update LEDs", details: error.message });
    }
  });

  router.post("/grow", async (req, res) => {
    try {
      const { delay, brightness } = req.body;
      const response = await grow(ledContext, delay, brightness);
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
      const { delay, brightness } = req.body;
      const response = await flow(ledContext, delay, brightness);
      res.json({ message: `LEDs updated ${response}` });
    } catch (error) {
      res
        .status(500)
        .json({ error: "Failed to update LEDs", details: error.message });
    }
  });

  router.post("/loudness", async (req, res) => {
    try {
      const response = await loudness(ledContext);
      res.json({ message: `LEDs updated ${response}` });
    } catch (error) {
      res
        .status(500)
        .json({ error: "Failed to update LEDs", details: error.message });
    }
  });

  return router;
};
