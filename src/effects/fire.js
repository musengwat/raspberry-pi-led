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

const christmas = async (ledContext, delay, brightness) => {
  const { ws281x, LEDS, rgb2hex } = ledContext;
  const pixels = new Uint32Array(LEDS);
  let offset = true;

  // Base fire color (dark orange)
  // const darkOrange = 0x7f3f00;
  // const red = rgb2hex(255, 0, 0);
  // const red = rgb2hex(0, 255, 0);

  const red = 0xbb2528;
  const green = 0x165b33;

  const loop = async () => {
    for (let i = 0; i < LEDS; i++) {
      console.log(i, i % 2);
      if (i % 2 === 0 && offset) {
        pixels[i] = red;
        console.log("red");
      } else {
        pixels[i] = green;
        console.log("green");
      }
    }

    offset = !offset;

    await ws281x.render({ pixels, brightness: brightness || 0.8 });
  };

  // Run the loop at specified intervals to create the fire effect
  setInterval(loop, delay);
};

module.exports = { christmas, fire2 };
