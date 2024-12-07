const { initializeLEDs } = require("../controllers/ledController");

const walk = async (delay = 200, gpio) => {
  const { ws281x, colorwheel, LEDS } = await initializeLEDs(true, gpio);

  let offset = 0;

  function loop() {
    const pixels = new Uint32Array(LEDS);
    // Set the color at the current offset
    pixels[offset % LEDS] = colorwheel(offset % 255);

    offset++;

    ws281x.render(pixels);
  }

  setInterval(loop, delay);
};

module.exports = { walk };
