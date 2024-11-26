const { Router } = require("express");
const { testLEDs } = require("../controllers/ledController");

const router = Router();

router.post("/", (req, res) => {
  console.log("testing leds");
  testLEDs();
  res.json({ message: "LEDs updated" });
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

// export default router;
