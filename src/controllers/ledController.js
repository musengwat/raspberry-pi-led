const testLEDs = async () => {
  // Dynamically import the piixel module
  const { colorwheel, StripType, ws281x } = await import("piixel");

  const LEDS = 169;

  // Configure the library. Must be called before calling `render`
  ws281x.configure({
    gpio: 18,
    leds: LEDS,
    type: StripType.WS2811_STRIP_GRB,
  });

  const pixels = new Uint32Array(LEDS);
  for (let i = 0; i < LEDS; i++) {
    pixels[i] = colorwheel((i * 256) / LEDS);
  }

  // Render pixels to the LED strip
  // ws281x.render(pixels);

  // Optionally, render with brightness
  ws281x.render({ pixels, brightness: 0.4 });

  return "leds have been turned on";
};
module.exports = { testLEDs };
