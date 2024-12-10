const fire2 = async (ledContext, delay, brightness) => {
  const { ws281x, LEDS } = ledContext;
  const pixels = new Uint32Array(LEDS);

  const fireColors = [0x7f3f00, 0x9f4f00, 0xbf5f00, 0xff7f00, 0xff9f00];
  const loop = async () => {
    for (let i = 0; i < LEDS; i++) {
      const color = fireColors[Math.floor(Math.random() * fireColors.length)];

      const flicker = Math.floor(Math.random() * 50);
      pixels[i] = color + flicker;
    }

    await ws281x.render({ pixels, brightness: brightness || 0.8 });
  };

  setInterval(loop, delay);
};

const fire = async (ledContext, delay) => {
  const { ws281x, LEDS } = ledContext;
  const pixels = new Uint32Array(LEDS);

  // Base fire color (dark orange)
  const darkOrange = 0x7f3f00;

  // Sparkles (bright yellow and red)
  const yellow = 0xffff00;
  const red = 0xff0000;

  const loop = async () => {
    for (let i = 0; i < LEDS; i++) {
      // Use dark orange as the base color for most LEDs
      let color = darkOrange;

      // Random chance to add a sparkle (yellow or red)
      if (Math.random() > 0.8) {
        // 20% chance to sparkle
        color = Math.random() > 0.5 ? yellow : red; // Sparkle is either yellow or red
      }

      pixels[i] = color;
    }

    // Render the updated pixel array to the LEDs
    await ws281x.render({ pixels, brightness: 1.0 });
  };

  // Run the loop at specified intervals to create the fire effect
  setInterval(loop, delay);
};

module.exports = { fire, fire2 };
