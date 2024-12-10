const firework = async (ledContext, delay, brightness, size) => {
  const { ws281x, colorwheel, LEDS } = ledContext;
  const pixels = new Uint32Array(LEDS);

  const fadeDuration = 100;
  let fadeDirection = 1;
  let fadeValue = 0;

  const loop = async () => {
    const burstStart = Math.floor(Math.random() * LEDS);
    const burstSize = Math.floor(Math.random() * 5) + size;
    const color = Math.floor(Math.random() * 255);

    fadeValue += fadeDirection * 0.05;
    if (fadeValue >= 1 || fadeValue <= 0) {
      fadeDirection *= -1;
    }

    pixels.fill(0);

    for (let i = 0; i < burstSize; i++) {
      const index = (burstStart + i) % LEDS;
      const colorWithBrightness = colorwheel(color);
      const fadedColor =
        (colorWithBrightness & 0x00ffffff) |
        (Math.floor(fadeValue * 255) << 24);

      pixels[index] = fadedColor;
    }

    await ws281x.render({ pixels, brightness: brightness || 0.8 });
  };

  setInterval(loop, delay);
};

module.exports = { firework };
