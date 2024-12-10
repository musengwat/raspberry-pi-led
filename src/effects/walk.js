const walk = async (ledContext, delay = 200, brightness) => {
  const { ws281x, colorwheel, LEDS } = ledContext;

  let offset = 0;

  const loop = async () => {
    const pixels = new Uint32Array(LEDS);
    // Set the color at the current offset
    pixels[offset % LEDS] = colorwheel(offset % 255);

    offset++;
    console.log(offset);
    return ws281x.render({ pixels, brightness: brightness || 0.8 });
  };

  setInterval(loop, delay);
};

module.exports = { walk };
