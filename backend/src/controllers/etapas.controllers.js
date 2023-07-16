import Etapas from "../models/Etapas.js";

const getEtapas = async (req, res)=>{
    const etapas = await Etapas.find();
    res.json(etapas);
};

const getEtapa = async (req, res)=>{
    try {
        const etapa = await Etapas.findOne({_id:req.params.id});
        res.send(etapa);
    } catch (error) {
        res.status(404);
        res.send({error: "Esta etapa no existe"});
    }
};

const postEtapas = async (req, res)=>{
    const etapa = new Etapas(req.body);
    try {
        const nuevaEtapa = await etapa.save();
        res.json(nuevaEtapa);
    } catch (error) {
        console.log(error);
    }
};

const deleteEtapas = async (req, res)=>{
    try {
        await Etapas.deleteOne({_id:req.params.id});
        res.status(204).send();
    } catch (error) {
        res.status(404);
        res.send({error: "Esta etapa no existe"});
    }
};

const putEtapas = async (req, res)=>{
    try {
        const etapa = await Etapa.findOneAndUpdate({_id:req.params.id},
            {_id:req.params.id},
            req.body,
            {new:true});
        await etapa.save();
        res.json(etapa);
    } catch (error) {
        res.status(404);
        res.send({error: "Esta etapa no existe"});
    }
};


export { getEtapas, getEtapa, postEtapas, deleteEtapas, putEtapas };