const mongoose = require('mongoose');

const coordinatesSchema = new mongoose.Schema({
    lat:{
        type:Number,
        required:true
    },
    lng:{
        type:Number, 
        required:true
    },
})

const locationSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    coordinates:[coordinatesSchema],
})

const Location = mongoose.model('Location',locationSchema);

module.exports = Location;