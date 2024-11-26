const initializeLEDs = async () => {
  const { colorwheel, rgb2hex, StripType, ws281x } = await import("piixel");

  const LEDS = 200;
  console.log(ws281x || "¯_(ツ)_/¯");
  // Configure the library. Must be called before calling `render`
  try {
    ws281x.configure({
      gpio: 18,
      leds: LEDS,
      type: StripType.WS2811_STRIP_GRB,
    });
  } catch (err) {
    console.warn(err, "LEDs already initialized");
  }
  console.log(ws281x || "bad");

  return { colorwheel, rgb2hex, StripType, ws281x, LEDS };
};

const resetLEDs = async () => {
  const { ws281x } = await import("piixel");
  ws281x.reset();

  return "leds have been turned off";
};

module.exports = { initializeLEDs, resetLEDs };
