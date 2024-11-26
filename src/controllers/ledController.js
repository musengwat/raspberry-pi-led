const initializeLEDs = async (resetOnExit = false) => {
  const { colorwheel, rgb2hex, StripType, ws281x } = await import("piixel");

  const LEDS = 200;
  // Configure the library. Must be called before calling `render`
  try {
    ws281x.configure({
      gpio: 18,
      leds: LEDS,
      type: StripType.WS2811_STRIP_GRB,
      resetOnExit,
    });
  } catch (err) {
    console.warn(err, "LEDs already initialized");
  }

  return { colorwheel, rgb2hex, StripType, ws281x, LEDS };
};

const resetLEDs = async () => {
  const { ws281x } = await import("piixel");
  ws281x.reset();

  return "leds have been turned off";
};

module.exports = { initializeLEDs, resetLEDs };
