const express = require('express');
const router = express.Router();
const locationController = require('../controller/locationController');


router.post("/locations",locationController.createLocation)
// router.get('/locations',locationController);
// router.get('/locations/:id',locationController);
// router.put('/locations/:id',locationController);
// router.delete('/locations/:id',locationController);
// router.get('locations/coordinates',locationController);

module.exports = router;