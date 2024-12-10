const rainbow = async (ledContext, delay, brightness) => {
  const { ws281x, colorwheel, LEDS } = ledContext;
  const pixels = new Uint32Array(LEDS);
  let offset = 0;

  const loop = async () => {
    for (let i = 0; i < LEDS; i++) {
      pixels[i] = colorwheel((i + offset) % 255);
    }
    offset = (offset + 1) % 255; // Wrap around after completing a cycle
    ws281x.render({ pixels, brightness: brightness || 0.8 });
  };
  console.log(delay, brightness);
  return setInterval(loop, delay);
};

module.exports = { rainbow };
