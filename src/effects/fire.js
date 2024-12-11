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

module.exports = { fire2 };
