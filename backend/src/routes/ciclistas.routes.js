import { Router } from 'express';
import { getCiclistas, getCiclista, postCiclistas, deleteCiclistas, putCiclistas } from '../controllers/ciclistas.controllers.js';

const router = Router();

router.get("/all", getCiclistas);

router.get("/getone/:id", getCiclista);

router.post("/add", postCiclistas);

router.delete("/delete/:id", deleteCiclistas);

router.put("/update/:id", putCiclistas);


export default router;