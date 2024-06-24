const Location = require('../models/location');

const createLocation = async (req, res) => {

    try {
        const { name, coordinates } = req.body;
        const location = new Location({ name, coordinates });
        await location.save();
        res.status(201).json(location);
    } catch (err) {
        console.log(err);
        res.status(500).json({ error: err.message });
    }

}

const getAllLocation = async (req, res) => {

    try {
        const locations = await Location.find();
        res.status(200).json(locations);

    } catch (err) {
        console.log(err);
        res.status(500).json({ error: err.message });
    }
}

const getLocationById = async (req, res) => {
    try {
        const id = req.params.id;
        const location = await Location.findById(id);
        if (!location) {
            res.status(404).json({ message: "location not found" });
        }

        res.status(200).json(location);

    } catch (err) {
        console.log(err);
        res.status(500).json({ error: err.message });
    }
}

const updateLocation = async (req, res) => {
    try {

        const { name, coordinates } = req.body;
        const location = await Location.findByIdAndUpdate(
            req.params.id,
            { name, coordinates },
            { new: true, runValidators: true }
        );
        if (!location) return res.status(404).json({ error: 'Location not found' });
        res.status(200).json(location);

    } catch (err) {
        console.log(err);
        res.status(500).json({ error: err.message });
    }
}

const deleteLocation = async (req, res) => {
    try{
        const id = req.params.id;
        const location = await Location.findByIdAndDelete(id);
        if (!location) return res.status(404).json({ error: 'Location not found' });
        res.status(200).json({ message: 'Location deleted' });

    }catch(err){
        console.log(err);
        res.status(500).json({ error: err.message });
    }
}


const getAllCoordinates = async (req, res) => {
    try{
        const locations = await Location.find({},'coordinates');
    res.status(200).json(locations);
    }catch(err){
        console.log(err);   
        res.status(500).json({ error:err.message});
    }
}

module.exports = {
    createLocation,
    getAllLocation,
    getLocationById,
    updateLocation,
    deleteLocation,
    getAllCoordinates
}