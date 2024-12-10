const firework = async (ledContext, delay, brightness, size) => {
  const { ws281x, colorwheel, LEDS } = ledContext;
  const pixels = new Uint32Array(LEDS);

  const loop = async () => {
    // Create bursts of random color and random positions
    const burstStart = Math.floor(Math.random() * LEDS);
    const burstSize = Math.floor(Math.random() * 5) + size; // Random burst size
    const color = Math.floor(Math.random() * 255);

    for (let i = 0; i < burstSize; i++) {
      const index = (burstStart + i) % LEDS;
      pixels[index] = colorwheel(color);
    }

    await ws281x.render({ pixels, brightness: brightness || 0.8 });
  };

  setInterval(loop, delay);
};

module.exports = { firework };
