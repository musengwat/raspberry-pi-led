const fill = async (ledContext, color, brightness) => {
  const { ws281x, LEDS, rgb2hex } = ledContext;
  const pixels = new Uint32Array(LEDS);
  for (let i = 0; i < LEDS; i++) {
    console.log("color:", color);
    // pixels[i]  = typeof color === Object ? rgb2hex(color.r, color.g, color.b) : color
    pixels[i] = rgb2hex(color.r, color.g, color.b);
  }
  console.log(ws281x, "in test");
  ws281x.render({ pixels, brightness: brightness || 0.4 });
  return "leds have been turned on", LEDS;
};

module.exports = { fill };
