import { colorwheel, StripType, ws281x } from "piixel";

const LEDS = 200;

// Configure the library. Must be called before calling `render`
ws281x.configure({
  gpio: 18,
  leds: LEDS,
  type: StripType.WS2811_STRIP_GRB,
});

const testLEDs = async (brightness) => {
  const pixels = new Uint32Array(LEDS);
  for (let i = 0; i < LEDS; i++) {
    pixels[i] = colorwheel((i * 256) / LEDS);
  }

  ws281x.render({ pixels, brightness });

  return "leds have been turned on", LEDS;
};

const resetLEDs = async () => {
  const { ws281x } = await import("piixel");
  ws281x.reset();

  return "leds have been turned off";
};
module.exports = { testLEDs, resetLEDs };
