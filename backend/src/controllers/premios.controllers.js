import Premios from "../models/Premios.js";

const getPremios = async (req, res)=>{
    const premios = await Premios.find();
    res.json(premios);
};

const getPremio = async (req, res)=>{
    try {
        const premio = await Premios.findOne({_id:req.params.id});
        res.send(premio);
    } catch (error) {
        res.status(404);
        res.send({error: "Este premio no existe"});
    }
};

const postPremios = async (req, res)=>{
    const premios = new Premios(req.body);
    try {
        const nuevosPremios = await premios.save();
        res.json(nuevosPremios);
    } catch (error) {
        console.log(error);
    }
};

const deletePremios = async (req, res)=>{
    try {
        await Premios.deleteOne({_id:req.params.id});
        res.status(204).send();
    } catch (error) {
        res.status(404);
        res.send({error: "Este premio no existe"});
    }
};


const putPremios = async (req, res)=>{
    try {
        const premios = await Premios.findOneAndUpdate({_id:req.params.id},
            {_id:req.params.id},
            req.body,
            {new:true});
        await premios.save();
        res.json(premios);
    } catch (error) {
        res.status(404);
        res.send({error: "Este premio no existe"});
    }
};


export {getPremios, getPremio, postPremios, deletePremios, putPremios};