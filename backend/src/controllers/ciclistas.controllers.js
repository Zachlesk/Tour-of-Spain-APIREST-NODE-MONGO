import Ciclista from "../models/ciclista.js";

const obtenerCiclista = async (req, res) => {
    const ciclistas = await Ciclista.find();
    res.json(ciclistas);
}

const obtenerCiclistaID = async (req, res) => {
    const ciclista = await Ciclista.find({_id:req.params.id});
    res.json(ciclista);
}

const agregarCiclista = async (req, res) => {
    const ciclista = new Ciclista(req.body);
    try {
        const nuevoCiclista = await ciclista.save();
        res.json(nuevoCiclista);
    } catch (error) {
        console.error(error);
    }
}

const borrarCiclista = async (req, res) => {
    try {
        await Ciclista.deleteOne({_id: req.params.id});
        res.json(204).send()
    } catch (error) {
        res.status(400);
        res.send(error.message);
    }
}

const actualizarCiclistas = async (req, res) => {
    try {
        const ciclista = await Ciclista.findOne({_id:req.params.id});

        if(req.body.nombre) {
            actualizar.nombre = req.body.nombre;
        }
        if (req.body.carrerasCorridas) {
            actualizar.carrerasCorridas = req.body.carrerasCorridas;
        }
        if(req.body.edad){
            actualizar.edad = req.body.edad;
        }
        if(req.body.paisNatal){
            actualizar.paisNatal = req.body.paisNatal;
        }
        if(req.body.dni){
            actualizar.dni = req.body.dni;
        }

        await ciclista.save();
        res.send(ciclista);
    } catch (error) {
        res.status(400);
        res.send({error: "No existe"});
    }
}

export {
    obtenerCiclista, obtenerCiclistaID, agregarCiclista, borrarCiclista, actualizarCiclistas
}