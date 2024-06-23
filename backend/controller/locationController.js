const Location = require('../models/location');

const createLocation = async (req,res) =>{

    try{
        const {name,coordinates} = req.body;
        const location = new Location({name,coordinates});
        await location.save();
        res.status(201).json(location);
    }catch(err){
        console.log(err);
        res.status(500).json({error:err.message});
    }

}


module.exports = {
    createLocation
}