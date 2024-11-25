import { Router } from "express";
import { testLEDs } from "../controllers";

const router = Router();

router.post("/", (req: any, res: any) => {
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

export default router;
