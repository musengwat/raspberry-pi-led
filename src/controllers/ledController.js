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

module.exports = { initializeLEDs, clearLEDs, resetLEDs };
