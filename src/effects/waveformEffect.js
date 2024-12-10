const waveformEffect = async (ledContext, delay, brightnes) => {
  const { ws281x, LEDS, colorwheel } = ledContext;
  const pixels = new Uint32Array(LEDS);

  const loop = async () => {
    // Generate a simple waveform using sine or noise
    for (let i = 0; i < LEDS; i++) {
      let wave = Math.sin(i * 0.1); // Use sine wave for smooth transition
      let colorValue = Math.floor((wave + 1) * 127); // Map wave to color
      pixels[i] = colorwheel(colorValue);
    }

    await ws281x.render({ pixels, brightness: brightnes || 0.8 });
  };

  setInterval(loop, delay);
};

module.exports = { waveformEffect };
