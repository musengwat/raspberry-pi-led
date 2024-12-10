const grow = async (ledContext, brightness) => {
  const { ws281x, colorwheel, LEDS } = ledContext;
  let offset = 55;
  const pixels = new Uint32Array(LEDS);

  for (let i = 0; i < LEDS; i++) {
    offset++;
    pixels[offset % LEDS] = colorwheel(offset % 255);
    console.log(offset, offset % 255);

    await ws281x.render({ pixels, brightness: brightness || 0.8 });
  }
};

module.exports = { grow };
