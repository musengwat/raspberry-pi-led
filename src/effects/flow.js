const { initializeLEDs } = require("../controllers/ledController");

const flow = async (delay = 200, iterations = 16) => {
  const { ws281x, colorwheel, LEDS } = await initializeLEDs(true);

  // Current pixel position
  let offset = 0;

  function loop() {
    const pixels = new Uint32Array(LEDS);
    offset++;

    for (let i = 0; i < LEDS; i++) {
      // Set the color at the current offset
      pixels[i] = colorwheel((i * LEDS + offset) % 255);
    }
    setTimeout(() => {
      ws281x.render(pixels);
    }, delay);
  }

  setInterval(loop, iterations);
};

module.exports = { flow };
