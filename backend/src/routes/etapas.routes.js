import { Router } from 'express';
import { getEtapas, getEtapa, postEtapas, deleteEtapas, putEtapas} from '../controllers/etapas.controllers.js';

const router = Router();

router.get("/all", getEtapas);

router.get("/getone/:id", getEtapa);

router.post("/add", postEtapas);

router.delete("/delete/:id", deleteEtapas);

router.put("/update/:id", putEtapas);


export default router;