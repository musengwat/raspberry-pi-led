const rainbow = async (ledContext, brightness) => {
  const { ws281x, colorwheel, LEDS } = ledContext;
  const pixels = new Uint32Array(LEDS);
  for (let i = 0; i < LEDS; i++) {
    pixels[i] = colorwheel((i * 256) / LEDS);
  }
  console.log(ws281x, "in test");
  ws281x.render({ pixels, brightness: brightness || 0.4 });
  return "leds have been turned on", LEDS;
};

module.exports = { rainbow };
