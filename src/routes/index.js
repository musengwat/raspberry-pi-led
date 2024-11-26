const { Router } = require("express");
const testRoutes = require("./testRoutes");

const router = Router();

router.use("/test", testRoutes);

// export default router;
module.exports = router;
