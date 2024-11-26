const { initializeLEDs } = require("../controllers/ledController");

const walk = async (delay) => {
  const { ws281x, rgb2hex, LEDS } = await initializeLEDs(true);

  let offset = 0;

  function loop() {
    const pixels = new Uint32Array(LEDS);
    // Set the color at the current offset
    pixels[offset] = rgb2hex(243, 210, 101);

    offset++;

    ws281x.render(pixels);
  }

  setInterval(loop, delay || 250);
};

module.exports = { walk };
