const christmas = async (ledContext, delay, brightness) => {
  const { ws281x, LEDS, rgb2hex } = ledContext;
  const pixels = new Uint32Array(LEDS);
  let offset = true;

  const red = rgb2hex(255, 0, 0);
  const green = rgb2hex(0, 255, 0);
  //   const red = 0xbb2528;
  //   const green = 0x165b33;

  const loop = async () => {
    for (let i = 0; i < LEDS; i++) {
      console.log(i, i % 2);
      if (i % 2 === Number(offset)) {
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

const christmasFade = async (ledContext, delay, brightness) => {
  const { ws281x, LEDS, rgb2hex } = ledContext;
  const pixels = new Uint32Array(LEDS);
  let offset = true;
  let fadeStep = 0; // Tracks the current fade step
  let increasing = true; // Tracks the fade direction (increasing or decreasing)

  // Interpolate between two colors
  const interpolateColor = (color1, color2, step, steps) => {
    const r1 = (color1 >> 16) & 0xff;
    const g1 = (color1 >> 8) & 0xff;
    const b1 = color1 & 0xff;

    const r2 = (color2 >> 16) & 0xff;
    const g2 = (color2 >> 8) & 0xff;
    const b2 = color2 & 0xff;

    const r = Math.round(r1 + ((r2 - r1) * step) / steps);
    const g = Math.round(g1 + ((g2 - g1) * step) / steps);
    const b = Math.round(b1 + ((b2 - b1) * step) / steps);

    return rgb2hex(r, g, b);
  };

  const red = rgb2hex(255, 0, 0);
  const green = rgb2hex(0, 255, 0);
  const steps = 100; // Number of steps for the fade effect

  const loop = async () => {
    const color = interpolateColor(red, green, fadeStep, steps);

    for (let i = 0; i < LEDS; i++) {
      if (i % 2 === Number(offset)) {
        pixels[i] = color;
      } else {
        pixels[i] = green; // Keep alternating colors
      }
    }

    // Update fade step
    if (increasing) {
      fadeStep++;
      if (fadeStep >= steps) {
        increasing = false; // Start decreasing fade
      }
    } else {
      fadeStep--;
      if (fadeStep <= 0) {
        increasing = true; // Start increasing fade
      }
    }

    offset = !offset; // Shift the pattern
    await ws281x.render({ pixels, brightness: brightness || 0.8 });
  };

  // Run the loop at specified intervals to create the effect
  setInterval(loop, delay);
};

module.exports = { christmas, christmasFade };
