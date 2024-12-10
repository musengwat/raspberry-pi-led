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

const twinkle = async (ledContext, delay, brightness) => {
  const { ws281x, LEDS } = ledContext;
  const pixels = new Uint32Array(LEDS);

  const warmWhiteColors = [0xffb300, 0xff6600, 0xff9933, 0xffcc00];

  let fadeDirection = 1;
  let fadeSpeed = 0.05;
  let fadeAmount = 0;

  const loop = async () => {
    pixels.fill(0);

    for (let i = 0; i < LEDS; i++) {
      if (Math.random() > 0.8) {
        const baseColor =
          warmWhiteColors[Math.floor(Math.random() * warmWhiteColors.length)];
        let fadedColor = baseColor;

        fadedColor = fadedColor * fadeAmount;

        pixels[i] = fadedColor;
      }
    }

    fadeAmount += fadeDirection * fadeSpeed;

    if (fadeAmount >= 1.0) fadeDirection = -1;
    if (fadeAmount <= 0.1) fadeDirection = 1;

    await ws281x.render({ pixels, brightness: brightness || 0.8 });
  };

  setInterval(loop, delay);
};

module.exports = { sparkle, twinkle };
