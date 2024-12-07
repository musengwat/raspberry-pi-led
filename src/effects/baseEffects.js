const { initializeLEDs } = require("../controllers/ledController");

const clearLEDs = async () => {
  const { ws281x } = await initializeLEDs();
  ws281x.clear();
  console.log("leds have been cleared");
  return "leds have been turned off";
};

const resetLEDs = async (gpio) => {
  const { ws281x } = await initializeLEDs(gpio);
  ws281x.reset();

  return "leds have been turned off and processes has been killed";
};

module.exports = { clearLEDs, resetLEDs };
