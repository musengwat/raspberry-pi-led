const clearLEDs = async (ledContext) => {
  const { ws281x } = ledContext;
  ws281x.clear();
  console.log("leds have been cleared");
  return "leds have been turned off";
};

const resetLEDs = async (ledContext) => {
  const { ws281x } = ledContext;
  ws281x.reset();

  return "leds have been turned off and processes has been killed";
};

module.exports = { clearLEDs, resetLEDs };
