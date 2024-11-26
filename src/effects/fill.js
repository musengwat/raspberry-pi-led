const { initializeLEDs } = require("../controllers/ledController");

const fill = async (color, brightness) => {
  const { ws281x, LEDS,rgb2hex } = await initializeLEDs();
  const pixels = new Uint32Array(LEDS);
  for (let i = 0; i < LEDS; i++) {
    console.log('color:',color)
    pixels[i]  = typeof color === Object ? rgb2hex(color.r, color.g, color.b) : color || 255
  }
  console.log(ws281x, "in test");
  ws281x.render({ pixels, brightness: brightness || 0.4 });
  return "leds have been turned on", LEDS;
};

module.exports = { fill };
