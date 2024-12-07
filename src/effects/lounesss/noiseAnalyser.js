const mic = require("mic");

// Configure mic with desired settings
const micInstance = mic({
  rate: "16000", // Sampling rate in Hz
  channels: "1", // Mono audio
  encoding: "signed-integer", // PCM signed integer format
  device: "default", // Use default microphone
});

const micInputStream = micInstance.getAudioStream();

// Calculate volume from PCM data
const calculateVolume = (data) => {
  // Interpret the buffer as 16-bit signed integers
  const samples = new Int16Array(
    data.buffer,
    data.byteOffset,
    data.byteLength / Int16Array.BYTES_PER_ELEMENT
  );
  const sum = samples.reduce((acc, val) => acc + val * val, 0);
  return Math.sqrt(sum / samples.length); // RMS (Root Mean Square) value
};

const calculateBrightness = (volume) => {
  // Clamp volume to the input range to avoid unexpected results
  const minInput = 50;
  const minOutput = 0.2;
  const maxInput = 7000;
  const maxOutput = 1;

  const clampedVolume = Math.max(minInput, Math.min(maxInput, volume));
  // Map to the output range
  return (
    minOutput +
    ((clampedVolume - minInput) / (maxInput - minInput)) *
      (maxOutput - minOutput)
  );
};

// Start processing mic input
micInputStream.on("data", (data) => {
  try {
    const volume = calculateVolume(data); // Compute volume from PCM data
    const brightness = calculateBrightness(volume); // Compute volume from PCM data
    console.log(`Current volume: ${volume}`);
    console.log(`Scaled Brightness: ${brightness}`);
  } catch (err) {
    console.error("Error processing audio data:", err);
  }
});

// Handle errors from mic instance
micInputStream.on("error", (err) => {
  console.error("Microphone stream error:", err);
});

// Start the mic instance
micInstance.start();

console.log("Listening to microphone...");

const fill = async (ledContext) => {
  const { ws281x, LEDS, rgb2hex } = ledContext;
  const pixels = new Uint32Array(LEDS);
  for (let i = 0; i < LEDS; i++) {
    console.log("color:", color);
    // pixels[i]  = typeof color === Object ? rgb2hex(color.r, color.g, color.b) : color
    pixels[i] = rgb2hex(color.r, color.g, color.b);
  }
  console.log(ws281x, "in test");
  ws281x.render({ pixels, brightness: brightness || 0.4 });
  return "leds have been turned on", LEDS;
};

module.exports = { fill };
