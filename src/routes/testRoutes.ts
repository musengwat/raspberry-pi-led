import express from "express";
import { testLEDs } from "../controllers";

const router = express.Router();

router.post("/test", (req: any, res: any) => {
  console.log("testing leds");

  testLEDs();
  res.send("LEDs updated");
});

export default router;
