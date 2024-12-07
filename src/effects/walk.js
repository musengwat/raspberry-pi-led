const { initializeLEDs2 } = require("../controllers/ledController");

const walk = async (delay = 200) => {
  const { ws281x, colorwheel, LEDS } = await initializeLEDs2(true);

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
