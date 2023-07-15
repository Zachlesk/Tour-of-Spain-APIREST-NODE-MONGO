import { Router } from 'express';
import {getPremios, getPremio, postPremios, deletePremios, putPremios} from '../controllers/premios.controllers.js';

const router = Router();

router.get("/all", getPremios);

router.get("/getone/:id", getPremio);

router.post("/add", postPremios);

router.delete("/delete/:id", deletePremios);

router.put("/update/:id", putPremios);


export default router; 