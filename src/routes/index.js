const { Router } = require("express");
const testRoutes = require("./testRoutes");
const effectRoutes = require("./effectRoutes");

const router = Router();

router.use("/test", testRoutes);
router.use("/effect", effectRoutes);

// export default router;
module.exports = router;
