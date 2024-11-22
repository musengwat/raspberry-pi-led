const ws281x = require("rpi-ws281x-native");

// LED configuration
const NUM_LEDS = 30; // Adjust to your LED strip's length
// ws281x.init(NUM_LEDS);

const options = {
  dma: 10,
  freq: 800000,
  channels: [
    {
      count: NUM_LEDS,
      gpio: 18,
      invert: false,
      brightness: 255,
      stripType: "ws2812",
    },
  ],
};

const channel = ws281x(NUM_LEDS, options);

const testLEDs = () => {
  const colors = channel.array;

  // update color-values
  colors[42] = 0xffcc22;
  ws281x.render();
};

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

module.exports = { testLEDs, setColor, turnOffLEDs, cleanup };
