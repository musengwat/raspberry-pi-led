const express = require("express");
const {
  testLEDs,
  // setColor,
  // turnOffLEDs,
} = require("../controllers/ledController");

const router = express.Router();

// API endpoint to set a solid color
// router.post("/setColor", (req, res) => {
//   const { color } = req.body; // Expecting a 24-bit hex color (e.g., 0xff0000 for red)
//   console.log("led color set:", color);
//   if (color === undefined || typeof color !== "number") {
//     return res.status(400).send("Invalid color value");
//   }
//   setColor(color);
//   res.send("LEDs updated");
// });

router.post("/test", (req, res) => {
  console.log("testing leds");

  testLEDs();
  res.send("LEDs updated");
});

// // API endpoint to turn off LEDs
// router.post("/turnOff", (req, res) => {
//   turnOffLEDs();
//   res.send("LEDs turned off");
// });

module.exports = router;
