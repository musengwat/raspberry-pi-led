const activeAnimations = new Set();

const grow = (ledContext, brightness) => {
  const { ws281x, colorwheel, LEDS } = ledContext;
  let offset = 0;
  let direction = 1; // 1 for forward, -1 for backward
  const pixels = new Uint32Array(LEDS);

  const animationId = Symbol(); // Unique ID for this animation
  activeAnimations.add(animationId);

  const animate = async () => {
    if (!activeAnimations.has(animationId)) return; // Stop if animation is removed

    pixels.fill(0); // Clear the array
    pixels[offset % LEDS] = colorwheel(offset % 255);

    await ws281x.render({ pixels, brightness: brightness || 0.8 });

    offset += direction;

    if (offset >= LEDS || offset < 0) {
      direction *= -1;
      offset += direction;
    }

    setTimeout(animate, 50); // Run the next frame after a delay
  };

  animate(); // Start the animation
  return animationId; // Return the animation ID to the API
};

const stopAnimation = (animationId) => {
  activeAnimations.delete(animationId); // Stop the animation by removing it
};

module.exports = { grow, stopAnimation };
