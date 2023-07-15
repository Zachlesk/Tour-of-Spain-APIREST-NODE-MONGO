import Ciclistas from "../models/Ciclistas.js";

const getCiclistas = async (req, res)=>{
    const ciclistas = await Ciclistas.find();
    res.json(ciclistas);
};

const getCiclista = async (req, res)=>{
    try {
        const ciclista = await Ciclistas.findOne({_id:req.params.id});
        res.send(ciclista);
    } catch (error) {
        res.status(404);
        res.send({error: "Este ciclista no existe"});
    }
}

const postCiclistas = async (req, res)=>{
    const ciclistas = new Ciclistas(req.body);
    try {
        const nuevoCiclista = await ciclistas.save();
        res.json(nuevoCiclista);
    } catch (error) {
        console.log(error);
    }
};

const deleteCiclistas = async (req, res)=>{
    try {
        await Ciclistas.deleteOne({_id:req.params.id});
        res.status(204).send();
    } catch (error) {
        res.status(404);
        res.send({error: "Este ciclista no existe"});
    }
};

const putCiclistas = async (req, res)=>{
    try {
        const ciclista = await 
        Ciclistas.findOneAndUpdate(
            {_id:req.params.id},
            req.body,
            {new:true});

        await ciclista.save();
        res.json(ciclista);
        res.send(ciclista);
    } catch (error) {
        res.status(404);
        res.send({error: "Ciclista no existe"});
    }
};


export {getCiclistas, getCiclista, postCiclistas, deleteCiclistas, putCiclistas};