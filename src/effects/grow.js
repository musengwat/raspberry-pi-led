const grow = async (ledContext, brightness) => {
  const { ws281x, colorwheel, LEDS } = ledContext;
  let offset = 0;
  const pixels = new Uint32Array(LEDS);
  let direction = 1; // 1 for forward, -1 for backward

  while (true) {
    pixels.fill(0); // Clear the array before updating
    pixels[offset % LEDS] = colorwheel(offset % 255);

    await ws281x.render({ pixels, brightness: brightness || 0.8 });

    offset += direction;

    if (offset >= LEDS || offset < 0) {
      direction *= -1;
      offset += direction;
    }
  }
};

module.exports = { grow };
