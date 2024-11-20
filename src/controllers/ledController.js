const ws281x = require('rpi-ws281x-native');

// LED configuration
const NUM_LEDS = 30; // Adjust to your LED strip's length
ws281x.init(NUM_LEDS);

// Helper function to set LED colors
const setLEDs = (colorArray) => {
  const pixels = new Uint32Array(NUM_LEDS);
  colorArray.forEach((color, idx) => {
    if (idx < NUM_LEDS) {
      pixels[idx] = color;
    }
  });
  ws281x.render(pixels);
};

// Turn LEDs off
const turnOffLEDs = () => {
  setLEDs(Array(NUM_LEDS).fill(0x000000));
};

// Set all LEDs to a specific color
const setColor = (color) => {
  setLEDs(Array(NUM_LEDS).fill(color));
};

// Cleanup function
const cleanup = () => {
  ws281x.reset();
};

module.exports = { setColor, turnOffLEDs, cleanup };
