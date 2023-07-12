import express from "express";
import { obtenerCiclista, obtenerCiclistaID, agregarCiclista, borrarCiclista, actualizarCiclistas } from "../controllers/ciclistas.controllers.js";

const router = express.Router();

router.get("/all", obtenerCiclista);
router.get("/getone/:id", obtenerCiclistaID);
router.post("/add", agregarCiclista);
router.delete("/remove/:id", borrarCiclista);
router.patch("/update/:id", actualizarCiclistas);

export default router;