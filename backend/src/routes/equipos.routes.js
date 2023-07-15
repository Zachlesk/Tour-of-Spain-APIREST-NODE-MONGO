import { Router } from 'express';
import { getEquipos, getEquipo, postEquipos, deleteEquipos, putEquipos} from '../controllers/equipos.controllers.js';

const router = Router();

router.get("/all", getEquipos);

router.get("/getone/:id", getEquipo);

router.post("/add", postEquipos);

router.delete("/delete/:id", deleteEquipos);

router.put("/update/:id", putEquipos);


export default router;