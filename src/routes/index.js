const { Router } = require("express");
const baseRoutes = require("./baseRoutes");
const effectRoutes = require("./effectRoutes");

const router = Router();

router.use("/", baseRoutes);
router.use("/effect", effectRoutes);

// export default router;
module.exports = router;
