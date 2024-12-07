const initializeLEDs = async (resetOnExit = false) => {
  const { colorwheel, rgb2hex, StripType, ws281x } = await import("piixel");

  const LEDS = 200;
  // Configure the library. Must be called before calling `render`
  try {
    await ws281x.configure({
      gpio: 18,
      leds: LEDS,
      type: StripType.WS2811_STRIP_GRB,
      resetOnExit,
    });
    return { colorwheel, rgb2hex, StripType, ws281x, LEDS };
  } catch (err) {
    console.warn("LEDs already initialized");
  }
  return;
};

const initializeLEDs2 = async (resetOnExit = false) => {
  const { colorwheel, rgb2hex, StripType, ws281x } = await import("piixel");

  const LEDS = 200;
  // Configure the library. Must be called before calling `render`
  try {
    const ws281x_2 = await ws281x.configure({
      gpio: 12,
      leds: LEDS,
      type: StripType.WS2811_STRIP_GRB,
      resetOnExit,
    });
    return { colorwheel, rgb2hex, StripType, ws281x_2, LEDS };
  } catch (err) {
    console.warn("LEDs already initialized");
  }
  return;
};

const clearLEDs = async () => {
  const { ws281x } = await initializeLEDs();
  ws281x.clear();
  console.log("leds have been cleared");
  return "leds have been turned off";
};

const resetLEDs = async () => {
  const { ws281x } = await initializeLEDs();
  ws281x.reset();

  return "leds have been turned off and processes has been killed";
};

module.exports = { initializeLEDs, initializeLEDs2, clearLEDs, resetLEDs };
