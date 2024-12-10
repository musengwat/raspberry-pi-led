const mic = require("mic");

// Configure mic with desired settings
const micInstance = mic({
  rate: "16000", // Sampling rate in Hz
  channels: "1", // Mono audio
  encoding: "signed-integer", // PCM signed integer format
  device: "default", // Use default microphone
});

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
  const minInput = 50;
  const minOutput = 0.2;
  const maxInput = 7000;
  const maxOutput = 1;

  const clampedVolume = Math.max(minInput, Math.min(maxInput, volume));
  return (
    minOutput +
    ((clampedVolume - minInput) / (maxInput - minInput)) *
      (maxOutput - minOutput)
  );
};

const loudness = async (ledContext) => {
  const { ws281x, colorwheel, LEDS } = ledContext;
  const micInputStream = micInstance.getAudioStream();

  let offset = 0;

  const loop = async (brightness) => {
    const pixels = new Uint32Array(LEDS);
    offset++;
    for (let i = 0; i < LEDS; i++) {
      pixels[i] = colorwheel((i * LEDS + offset) % 255);
    }
    return ws281x.render({
      pixels,
      brightness,
    });
  };

  micInputStream.on("data", (data) => {
    try {
      const volume = calculateVolume(data); // Compute volume from PCM data
      const brightness = calculateBrightness(volume); // Compute volume from PCM data
      console.log(`Current volume: ${volume}`);
      console.log(`Scaled Brightness: ${brightness}`);
      loop(brightness);
    } catch (err) {
      console.error("Error processing audio data:", err);
    }
  });

  micInputStream.on("error", (err) => {
    const pixels = new Uint32Array(LEDS);
    for (let i = 0; i < LEDS; i++) {
      pixels[i] = colorwheel((i * LEDS + offset) % 255);
    }
    ws281x.render({ pixels, brightness: 0.4 });
    console.error("Microphone stream error:", err);
  });

  console.log("Listening to microphone...");
  micInstance.start();
};

module.exports = { loudness };