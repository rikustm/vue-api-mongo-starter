import express from "express";
import controller from "./controller";

const path = controller.entityName || "entity";
const router = express.Router();

router.get(`/${path}`, controller.readData);
router.post(`/${path}`, controller.createData);
router.put(`/${path}/:id`, controller.updateData);
router.delete(`/${path}/:id`, controller.deleteData);

export default router;
