const fire2 = async (ledContext, delay, brightness) => {
  const { ws281x, LEDS } = ledContext;
  const pixels = new Uint32Array(LEDS);

  const fireColors = [0x7f3f00, 0x9f4f00, 0xbf5f00, 0xff7f00, 0xff9f00]; // Warm fire-like colors

  const loop = async () => {
    // Create a fire simulation by shifting pixels' brightness and applying new random flickers
    for (let i = 0; i < LEDS; i++) {
      // Apply random flickering effect by selecting a fire color at random
      const color = fireColors[Math.floor(Math.random() * fireColors.length)];

      // Apply some flickering by slightly varying the color brightness
      const flicker = Math.floor(Math.random() * 50); // Random flicker effect for variation
      pixels[i] = color + flicker;
    }

    await ws281x.render({ pixels, brightness: brightness || 0.8 });
  };

  setInterval(loop, delay);
};

module.exports = { fire };

const fire = async (ledContext, delay, brightness) => {
  const { ws281x, LEDS } = ledContext;
  const pixels = new Uint32Array(LEDS);

  const loop = async () => {
    for (let i = 0; i < LEDS; i++) {
      let color = 0x7f3f00 + Math.floor(Math.random() * 0x400000); // Random fire colors
      pixels[i] = color;
    }

    await ws281x.render({ pixels, brightness: brightness || 0.8 });
  };

  setInterval(loop, delay);
};
module.exports = { fire, fire2 };
