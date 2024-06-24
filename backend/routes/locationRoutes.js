const express = require('express');
const router = express.Router();
const locationController = require('../controller/locationController');


router.post("/locations",locationController.createLocation)
router.get('/locations',locationController.getAllLocation);
router.get('/locations/:id',locationController.getLocationById);
router.put('/locations/:id',locationController.updateLocation);
router.delete('/locations/:id',locationController.deleteLocation);
router.get('/coordinates',locationController.getAllCoordinates);

module.exports = router;