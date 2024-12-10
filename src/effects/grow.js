const grow = async (ledContext, delay, brightness) => {
  const { ws281x, colorwheel, LEDS } = ledContext;
  const pixels = new Uint32Array(LEDS);
  let offset = 0;
  let direction = 1; // 1 for forward, -1 for backward

  const loop = async () => {
    pixels[offset] = direction === 1 ? colorwheel(offset % 255) : 0;
    await ws281x.render({ pixels, brightness: brightness || 0.8 });

    // Update offset based on direction
    offset += direction;
    console.log(offset, direction);

    // Reverse direction at the ends
    if (offset >= LEDS || offset < 0) {
      direction *= -1;
      offset += direction; // Correct offset to stay within bounds
    }
    return "looped";
  };
  setInterval(loop, delay);
};

module.exports = { grow };
