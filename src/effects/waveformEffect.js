const waveformEffect = async (ledContext, delay) => {
  const { ws281x, colorwheel, LEDS } = ledContext;
  const pixels = new Uint32Array(LEDS);

  let offset = 0;

  const loop = async () => {
    for (let i = 0; i < LEDS; i++) {
      let wave = Math.sin((i + offset) * 0.1);
      let colorValue = Math.floor((wave + 1) * 127);
      pixels[i] = colorwheel(colorValue);
    }

    offset++;

    await ws281x.render({ pixels, brightness: 0.8 });
  };

  setInterval(loop, delay);
};

module.exports = { waveformEffect };
