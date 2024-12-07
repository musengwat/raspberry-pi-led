const initializeLEDs = async (LEDS, gpio) => {
  const { colorwheel, rgb2hex, StripType, ws281x } = await import("piixel");

  try {
    ws281x.configure({
      gpio,
      leds: LEDS,
      type: StripType.WS2811_STRIP_GRB,
      resetOnExit: true,
    });
  } catch (err) {
    console.warn("LEDs already initialized");
  }
  return { colorwheel, rgb2hex, StripType, ws281x, LEDS };
};

module.exports = { initializeLEDs };
