import { Router } from "express";
import { getMaterials, addMaterial, updateMaterial, deleteMaterial } from "../handlers/materials.handlers";

const router = Router();

router.get('/api/materials', getMaterials);
router.post('/api/materials', addMaterial);
// router.patch('/api/materials/:id', undefined);
router.delete('/api/materials/:id', deleteMaterial);

export default router;
