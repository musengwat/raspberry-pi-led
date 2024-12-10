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
module.exports = { fire };
