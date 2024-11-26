// export * from "./testRoutes";

import { Router } from "express";
import testRoutes from "./testRoutes";

const router = Router();

router.use("/test", testRoutes);

export default router;
