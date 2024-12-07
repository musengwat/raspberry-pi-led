const { Router } = require("express");
const { pulse } = require("../effects/pulse");
const { rainbow } = require("../effects/rainbow");
const { walk } = require("../effects/walk");
const { flow, flow2 } = require("../effects/flow");
const { fill } = require("../effects/fill");

const router = Router();
// test LEDS
router.post("/pulse", (req, res) => {
  const { delay } = req.body;
  pulse(delay);
  res.json({ message: "LEDs updated" });
});

//reset LEDS
router.post("/rainbow", (req, res) => {
  const { brightness } = req.body;
  rainbow(brightness);
  res.json({ message: "LEDs turned off" });
});

// Sample GET route
router.post("/walk", async (req, res) => {
  const { delay } = req.body;
  walk(delay);
  res.json({ message: "Welcome to the API!" });
});

// Sample POST route
router.post("/fill", (req, res) => {
  const { color, brightness } = req.body;
  fill(color, brightness);
  res.json({ color, status: "Data received" });
});

// Sample POST route
router.post("/flow", (req, res) => {
  const { delay } = req.body;
  flow(delay);
  res.json({ status: "Data received" });
});

// Sample POST route
router.post("/flow2", (req, res) => {
  const { delay } = req.body;
  flow2(delay);
  res.json({ status: "Data received" });
});

module.exports = router;
