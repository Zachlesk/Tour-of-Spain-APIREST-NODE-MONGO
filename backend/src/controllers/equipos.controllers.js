import Equipos from "../models/Equipos.js";

const getEquipos = async (req, res)=>{
    const equipos = await Equipos.find();
    res.json(equipos);
};

const getEquipo = async (req, res)=>{
    try {
        const equipo = await Equipos.findOne({_id:req.params.id});
        res.send(equipo);
    } catch (error) {
        res.status(404);
        res.send({error: "Este equipo no existe"});
    }
}

const postEquipos = async (req, res)=>{
    const equipo = new Equipos(req.body);
    try {
        const nuevoEquipo = await equipo.save();
        res.json(nuevoEquipo);
    } catch (error) {
        console.log(error);
    }
};

const deleteEquipos = async (req, res)=>{
    try {
        await Equipos.deleteOne({_id:req.params.id});
        res.status(204).send();
    } catch (error) {
        res.status(404);
        res.send({error: "Este equipo no existe"});
    }
};


const putEquipos = async (req, res)=>{
    try {
        const equipo = await Equipos.findOneAndUpdate(
            {_id:req.params.id},
            req.body,
            {new:true});

        await equipo.save();
        res.json(equipo);
        res.send(equipo);
    } catch (error) {
        res.status(404);
        res.send({error: "Este equipo no existe"});
    }
};


export { getEquipos, getEquipo, postEquipos, deleteEquipos, putEquipos };