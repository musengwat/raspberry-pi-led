const initializeLEDs = async (gpio) => {
  const { colorwheel, rgb2hex, StripType, ws281x } = await import("piixel");

  const LEDS = 200;
  // Configure the library. Must be called before calling `render`
  console.log(resetOnExit, gpio);
  try {
    ws281x.configure({
      gpio: gpio || 18,
      leds: LEDS,
      type: StripType.WS2811_STRIP_GRB,
      resetOnExit: true,
    });
  } catch (err) {
    console.warn("LEDs already initialized");
  }
  return { colorwheel, rgb2hex, StripType, ws281x, LEDS };
};

const clearLEDs = async () => {
  const { ws281x } = await initializeLEDs();
  ws281x.clear();
  console.log("leds have been cleared");
  return "leds have been turned off";
};

const resetLEDs = async (gpio) => {
  const { ws281x } = await initializeLEDs(gpio);
  ws281x.reset();

  return "leds have been turned off and processes has been killed";
};

module.exports = { initializeLEDs, clearLEDs, resetLEDs };
