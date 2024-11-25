const ws281x = require("rpi-ws281x");

// LED configuration
const NUM_LEDS = 169; // Adjust to your LED strip's length

let config = {
  leds: NUM_LEDS,
  dma: 10,
  brightness: 255,
  gpio: 18,
  stringType: "grb",
};

ws281x.configure(config);

const testLEDs = () => {
  var pixels = new Uint32Array(config.leds);

  // Create a fill color with red/green/blue.
  var red = 255,
    green = 0,
    blue = 0;
  var color = (red << 16) | (green << 8) | blue;

  for (var i = 0; i < config.leds; i++) pixels[i] = color;

  // Render to strip
  ws281x.render(pixels);
};

module.exports = { testLEDs };
