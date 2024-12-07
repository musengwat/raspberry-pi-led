const flow = async (ledContext, delay) => {
  const { ws281x, colorwheel, LEDS } = ledContext;

  // Current pixel position
  let offset = 0;

  const loop = async () => {
    const pixels = new Uint32Array(LEDS);
    offset++;

    for (let i = 0; i < LEDS; i++) {
      // Set the color at the current offset
      pixels[i] = colorwheel((i * LEDS + offset) % 255);
    }
    console.log(offset);
    return ws281x.render({ pixels, brightness: 1 });
  };

  setInterval(loop, delay);
};

module.exports = { flow };
