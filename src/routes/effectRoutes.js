const { Router } = require("express");
const { pulse } = require("../effects/pulse");
const { rainbow } = require("../effects/rainbow");
const { walk } = require("../effects/walk");
const { flow } = require("../effects/flow");

const router = Router();
// test LEDS
router.post("/pulse", (req, res) => {
  const { delay, iterations } = req.body;
  pulse(delay, iterations);
  res.json({ message: "LEDs updated" });
});

//reset LEDS
router.post("/rainbow", (req, res) => {
  rainbow(req.body);
  res.json({ message: "LEDs turned off" });
});

// Sample GET route
router.post("/walk", async (req, res) => {
  const { delay, iterations } = req.body;
  walk(delay, iterations);
  res.json({ message: "Welcome to the API!" });
});

// Sample POST route
router.post("/fill", (req, res) => {
  const { color } = req.body;
  res.json({ color, status: "Data received" });
});

// Sample POST route
router.post("/flow", (req, res) => {
  const { delay, iterations } = req.body;
  flow(delay, iterations);
  res.json({ status: "Data received" });
});

module.exports = router;
