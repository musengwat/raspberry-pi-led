const express = require("express");
const bodyParser = require("body-parser");
// const routes = require("./routes");
const { initializeLEDs } = require("./controllers/ledController");
const createRoutes = require("./routes"); // Use a function to generate routes with context

const app = express();
const port = 3000;
const LEDS = 200;
const gpio = [18, 12];

(async () => {
  try {
    // Initialize LEDs once at startup
    const ledContext = await initializeLEDs(LEDS, gpio);
    console.log("LEDs initialized");

    // Middleware
    app.use(bodyParser.json());

    // Pass the LED context to routes
    app.use("/", createRoutes(ledContext));

    // Start the server
    app.listen(port, () => {
      console.log(`Server running at http://localhost:${port}`);
    });
  } catch (err) {
    console.error("Error during startup:", err);
    process.exit(1); // Exit with error code
  }
})();
