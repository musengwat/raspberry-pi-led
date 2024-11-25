const {
  testLEDs,
  // setColor,
  // turnOffLEDs,
} = require("../controllers/ledController");

const router = express.Router();

router.post("/test", (req: any, res: any) => {
  console.log("testing leds");

  testLEDs();
  res.send("LEDs updated");
});

module.exports = router;
