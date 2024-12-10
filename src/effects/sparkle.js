const sparkle = async (ledContext, delay, brightness) => {
  const { ws281x, LEDS } = ledContext;
  const pixels = new Uint32Array(LEDS);

  const loop = async () => {
    pixels.fill(0); // Clear previous frame
    const randomIndex = Math.floor(Math.random() * LEDS);
    pixels[randomIndex] = Math.random() * 0xffffff; // Random color
    await ws281x.render({ pixels, brightness: brightness || 0.8 });
  };

  return setInterval(loop, delay);
};

module.exports = { sparkle };
