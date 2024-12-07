const { Router } = require("express");
const createBaseRoutes = require("./baseRoutes"); // Function to create base routes
const createEffectRoutes = require("./effectRoutes"); // Function to create effect routes

module.exports = (ledContext) => {
  const router = Router();

  // Pass the LED context to each route
  router.use("/", createBaseRoutes(ledContext));
  router.use("/effect", createEffectRoutes(ledContext));

  return router;
};
